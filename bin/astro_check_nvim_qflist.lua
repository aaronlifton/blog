local M = {
  output = nil
}

function os.capture(cmd, raw)
  local handle = assert(io.popen(cmd, 'r'))
  local output = assert(handle:read('*a'))
  handle:close()
  if raw then
    return output
  end
  output = string.gsub(
    string.gsub(string.gsub(output, '^%s+', ''), '%s+$', ''),
    '[\n\r]+',
    ' '
  )
  return output
end

M.run_astro_check = function()
  M.output = os.capture("bun run astro check", true)
end

-- split output by lines with lua builtin functions only, no use of vim
local function split_lines(str)
  local lines = {}
  for s in str:gmatch("[^\r\n]+") do
    table.insert(lines, s)
  end
  return lines
end

local function find_errors(output)
  local lines = split_lines(output)
  local errors = {}
  for _, v in ipairs(lines) do
    if string.find(v, "error") and string.find(v, "src") then
      table.insert(errors, v)
    end
  end
  return errors
end

-- line =
-- "src/util/test.ts:9:24 - error ts(2345): Argument of type '(acc: T[], cur: T[]) => (T extends readonly (infer InnerArr)[] ? InnerArr : T)[][]' is not assignable to parameter of type '(previousValue: T[], currentValue: T[], currentIndex: number, array: T[][]) => T[]'."

I.parse_astro_check_error = function(line)
  local parts = {}
  for n in line:gmatch('[^%s]+') do
    table.insert(parts, n)
  end;
  if #parts == 0 then
    return nil
  end
  local filename, _, severity, error_code, error_msg = table.unpack(parts)
  local line_data = filename:gmatch("%d+")
  local line, col = line_data(), line_data(1)
  local filename = filename:match("[^%s]*[^:%d]")
  local message = error_code .. " " .. table.concat(table.pack(table.unpack(parts, 5, #parts)), " ")

  return {
    filename = string.match(filename, "[^%s]+^ -"),
    col = tonumber(col),
    lnum = tonumber(line),
    message = message,
  }
end

M.parse_errors = function()
  local errors = find_errors(M.output)
  local parsed_errors = {}
  for _, v in ipairs(errors) do
    table.insert(parsed_errors, M.parse_astro_check_error(v))
  end
  M.parsed_errors = parsed_errors
  return M.parsed_errors
end

M.send_to_qlist = function()
  -- local errors = find_errors(M.output)
  -- local parsed_errors = {}
  -- for _, v in ipairs(errors) do
  --   table.insert(parsed_errors, M.parse_astro_check_error(v))
  -- end
  local parsed_errors = M.parsed_errors
  vim.fn.setqflist({}, " ", { title = "Astro Check Errors", items = parsed_errors })
end

M.clear = function()
  M.output = nil
  M.parsed_errors = nil
end

local oveerseer_component = {
  desc = "Runs Astro Check",
  params = {},
  editable = false,
  serializable = true,
  constructor = function(params)
    return {
      on_init = function()
      end,
      on_start = function()
        M.run_astro_check()
      end,
      on_preprocess_result = function()
        M.parse_errors()
      end,
      on_result = function()
        M.send_to_qlist()
      end,
      on_exit = M.clear,
      on_dispose = M.clear,
    }
  end
}

local task = require("overseer").new_task({
  cmd = "bun run astro check",
  components = {
    -- Add on_complete_notify first with a customized 'statuses' parameter
    { "astro_check_send_to_qlist", statuses = { "SUCCESS" } },
    -- The default group also adds on_complete_notify,
    -- but since it appears second it will be ignored.
    "default"
  }
})
return M
