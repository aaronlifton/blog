function hexToRgb(hex) {
	const [, rr, gg, bb] = hex.match(
		/^#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})$/i,
	);

	return `${Number.parseInt(rr, 16)} ${Number.parseInt(gg, 16)} ${Number.parseInt(bb, 16)}`;
}

function withOKLCHOpacityValue(val) {
  return `oklch(var(${val}) / <alpha-value>)`;
}
function withOpacityValue(variable) {
	return `rgb(var(${variable}) / <alpha-value>)`;
}

module.exports = {
	hexToRgb,
	withOKLCHOpacityValue,
	withOpacityValue
}