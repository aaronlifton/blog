
export type PaletteWithFallback = {
	[key: string]: {
		[key: string]: {
			oklch: string;
			rgbFallback: string;
		};
	};
};

export type SimplePalette = {
	[key: string]: {
		[key: string]: string;
	};
};
