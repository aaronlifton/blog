import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "$/components/ui/dialog";
import { Skeleton } from "$/components/ui/skeleton";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "$/components/ui/tooltip";
import InsetIcon from "$components/react/InsetIcon.tsx";
import {
	// IconZoomIn,
	// IconZoomOut,
	IconZoomScan,
	// IconZoomScanFilled,
} from "@tabler/icons-react";
import type { ImageMetadata } from "astro";
import { Suspense, useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import { Button } from "../ui/button";

interface Props {
	imageMetadata: ImageMetadata;
	alt: string;
	caption?: string;
	children: React.ReactElement;
	className?: string;
	postLink?: string;
}

const Placeholder = () => {
	return (
		<div className="flex flex-col space-y-3  ">
			<Skeleton className="h-[500px] w-full max-w-[calc(80vw)]  max-h-[calc(100vh-8rem)]  rounded-xl" />
			<div className="space-y-2">
				<Skeleton className="h-4 w-full" />
			</div>
		</div>
	);
};

const ZoomableImage = ({
	imageMetadata,
	alt,
	caption,
	children,
	className,
	postLink,
}: Props) => {
	const [imageLoaded, setImageLoaded] = useState(false);
	// load image into memory
	useEffect(() => {
		const img = new window.Image();
		img.src = imageMetadata.src;
		img.onload = () => {
			setTimeout(() => {
				setImageLoaded(true);
			}, 3000);
		};
	}, [imageMetadata]);
	return (
		<Dialog>
			<DialogTrigger>
				<div className={twMerge("block relative group", className)}>
					<InsetIcon>
						<IconZoomScan />
					</InsetIcon>
					{children}
				</div>
			</DialogTrigger>
			<DialogContent
				className={
					"max-w-[calc(80vw)]  max-h-[calc(100vh-8rem)] overflow-y-scroll"
				}
			>
				<DialogHeader>
					<DialogTitle>Screenshot Preview</DialogTitle>
					<Suspense fallback={<Placeholder />}>
						<div className="flex place-content-center">
							{imageLoaded ? (
								<div className="block relative">
									<InsetIcon>
										<Button link={postLink}>Go to post</Button>
									</InsetIcon>
									<a href={imageMetadata.src}>
										<img
											src={imageMetadata.src}
											alt={alt}
											className="max-h-[calc(100vh-16rem)]"
										/>
									</a>
								</div>
							) : (
								<Placeholder />
							)}
						</div>
					</Suspense>
					<DialogDescription className="text-center prose pt-4">
						{caption || alt}
					</DialogDescription>
				</DialogHeader>
			</DialogContent>
		</Dialog>
	);
};

export default ZoomableImage;
