import sys
import mdformat as mdf
import os


def format_file(in_fname, out_fname, check=False):
    # join cwd to in_fname and resolve it
    in_fname = os.path.join(os.getcwd(), in_fname)
    # join cwd to out_fname and resolve it
    out_fname = os.path.join(os.getcwd(), out_fname)
    with open(in_fname, "r", encoding="utf-8") as fd:
        unformatted = fd.read()
    extensions = {"frontmatter"}
    options = {"wrap": 80}
    formatted = mdf.text(unformatted, options=options, extensions=extensions)
    print(formatted)
    if check:
        return formatted == unformatted
    else:
        with open(out_fname, "w", encoding="utf-8") as fd:
            fd.write(formatted)
        return True


if __name__ == "__main__":
    argv = sys.argv
    for f in argv[1:]:
        format_file(f, f, False)