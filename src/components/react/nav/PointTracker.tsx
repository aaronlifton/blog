export default function Widget() {
	return (
		<button
			type="button"
			className="flex items-center space-x-2 rounded-lg bg-zinc-200 dark:bg-zinc-800 p-2"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				className="h-6 w-6 text-zinc-500"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<title>Alternative text for the SVG</title>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="2"
					d="M12 6v6m0 0v6m0-6h6m-6 0H6"
				/>
			</svg>
			<span className="text-zinc-500">Points: 100</span>
		</button>
	);
}
