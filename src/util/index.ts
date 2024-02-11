import path  from "path";

const MONTHS = [
	"Jan",
	"Feb",
	"Mar",
	"Apr",
	"May",
	"Jun",
	"Jul",
	"Aug",
	"Sep",
	"Oct",
	"Nov",
	"Dec",
];

export const toTitleCase = (str: string): string =>
	str.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.slice(1).toLowerCase());

export const getMonthName = (date: Date): string => MONTHS[new Date(date).getMonth()];

export const getSlugFromPathname = (pathname: string) =>
	path.basename(pathname, path.extname(pathname));

export { iconForTag } from "./tagIconMap";

export * from "./dom"
export * from "./markdown"
export * from "./test"
export * from "./css.mjs"
export * from "./array"
