import { exec, spawn } from "child_process"
import path from "node:path";

const filename = process.argv[2];

if (!filename) {
  console.error('Please provide a filename as an argument.');
  process.exit(1);
}

const basename = path.parse(filename).name;
console.log({ basename }); // Output: example

// const command = `ffmpeg -i ${filename} -c:v libvpx-vp9 -pix_fmt yuva420p ${basename}.webm`

const command = 'ffmpeg';
const args = ["-i",  filename, "-c:v", "libvpx-vp9", "-pix_fmt", "yuva420p", `${basename}.webm`];

const childProcess = spawn(command, args);

childProcess.stdout.on('data', (data) => {
  console.log(data.toString());
});

childProcess.stderr.on('data', (data) => {
  console.error(data.toString());
});

childProcess.on('close', (code) => {
  console.log(`Child process exited with code ${code}`);
});









exec(command, (error, stdout, stderr) => {
  if (error) {
    console.error(`Error: ${error.message}`);
    return;
  }
  if (stderr) {
    console.error(`ffmpeg stderr: ${stderr}`);
    return;
  }
  console.log('ffmpeg command executed successfully.');
});