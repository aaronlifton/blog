import closeIcon from "~/icons/tabler/x.svg";
import { IconZoomIn } from "@tabler/icons-react";
import type A11yDialogInstance from "a11y-dialog";
import { XIcon } from "lucide-react";
import { Fragment, useEffect, useRef, useState } from "react";
import { A11yDialog } from "react-a11y-dialog";
import { twMerge } from "tailwind-merge";
import IconButton from "./IconButton";
import Styles from "./ZoomImage.module.css";

interface ZoomImageProps {
  dialogId: string;
  src: string;
  alt?: string;
  caption?: string;
  children: React.ReactElement;
}

const ZoomImage: React.FC<ZoomImageProps> = ({ dialogId, src, alt, caption, children }) => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>();
  const dialog = useRef<A11yDialogInstance>();

  return (
    <Fragment>
      <button
        type="button"
        className="flex relative [&_img]:m-0 group/zoom"
        onClick={() => dialog.current?.show()}
      >
        <div className="absolute right-0 p-2 rounded-none transition duration-150 bottom-[4px] bg-gray-100/50 group-hover/zoom:bg-gray-200">
          <IconZoomIn />
        </div>
        {children}
      </button>
      <A11yDialog
        id={dialogId}
        classNames={{
          container: Styles.container,
          overlay: Styles.overlay,
          dialog: Styles.dialog,
        }}
        dialogRef={(instance) => setDialog(instance)}
        title="Viewing image"
      >
        <div className={Styles.content}>
          <div className="flex justify-end items-end">
            <button
              type="button"
              data-a11y-dialog-hide
              aria-label="Close the dialog"
              className={Styles.close}
            >
              <XIcon />
            </button>
          </div>
          <div className="p-2">
            <img
              src={src}
              alt={alt}
              style={{ width: "100%", height: "100%" }}
            />
            {(alt || caption) && <p className="pt-4 italic text-center font-sm prose">{caption || alt}</p>}
          </div>
        </div>
      </A11yDialog>
    </Fragment>
  );

  function setDialog(instance: A11yDialogInstance | undefined): unknown {
    dialog.current = instance;
    return dialog.current;
  }
};

export default ZoomImage;
