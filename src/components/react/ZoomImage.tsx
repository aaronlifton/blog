import { useRef, useEffect, useState, Fragment } from "react";
import A11yDialogLib from "a11y-dialog";
import { A11yDialog } from "react-a11y-dialog";
import closeIcon from "$/icons/tabler/x.svg";
import { IconZoomIn } from "@tabler/icons-react";
import { twMerge } from "tailwind-merge";
import IconButton from "./IconButton";
import Styles from "./ZoomImage.module.css";

interface ZoomImageProps {
	dialogId: string;
	children: React.ReactElement;
}

const ZoomImage: React.FC<ZoomImageProps> = ({ dialogId, children }) => {
	const [dialogOpen, setDialogOpen] = useState(false);
	const dialogRef = useRef<HTMLDialogElement>();
	const dialog = useRef<A11yDialogLib>();

	return (
		<Fragment>
			<div className={twMerge("flex")}>
				<IconButton onClick={() => dialog.current?.show()}>
					<IconZoomIn />
				</IconButton>
				{children}
			</div>
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
				<div className={Styles.overlay} />

				<div className={Styles.content}>
					<button
						type="button"
						data-a11y-dialog-hide
						aria-label="Close the dialog"
						className={Styles.close}
					>
						{/* <img src={closeIcon.src} /> */}
					</button>
					<p>Some content for the dialog.</p>
					<img
						src={children.props.src}
						alt={children.props.alt}
						style={{ width: "100%", height: "100%" }}
					/>
				</div>
			</A11yDialog>
		</Fragment>
	);

	function setDialog(instance: A11yDialogLib | undefined): unknown {
		dialog.current = instance;
		return dialog.current;
	}
};

export default ZoomImage;
