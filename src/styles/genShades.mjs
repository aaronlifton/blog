import Values from "values.js";

console.log(new Values());
const log = console.log;
const v = new Values("rgb(243, 243, 243)");
const slate = [
  //text-neutral-50
  new Values("rgb(250 250 250)"),
  //text-neutral-100
  new Values("rgb(245 245 245)"),
  //text-neutral-200
  new Values("rgb(229 229 229)"),
  //text-neutral-300
  new Values("rgb(212 212 212)"),
  //text-neutral-400
  new Values("rgb(163 163 163)"),
  //text-neutral-500
  new Values("rgb(115 115 115)"),
  //text-neutral-600
  new Values("rgb(82 82 82)"),
  //text-neutral-700
  new Values("rgb(64 64 64)"),
  //text-neutral-800
  new Values("rgb(38 38 38)"),
  //text-neutral-900
  new Values("rgb(23 23 23)"),
  //text-neutral-950
  new Values("rgb(10 10 10)"),
];

const result = slate.reduce((acc, curr) => {
  let newAcc = acc;
  if (acc.length === 0) {
    acc.push({ val: curr });
  } else {
    const prevBrightness = acc[acc.length - 1].val.getBrightness();
    const currBrightness = curr.getBrightness();
    acc.push({
      val: curr,
      diff: prevBrightness - currBrightness,
      curr: currBrightness,
    });
  }
  return acc;
}, []);

log(
  result.map(({ val, diff, curr }) => ({
    diff,
    val: val.rgb.toString(),
    curr,
  })),
);
//
//
// function calculateBrightnessDifference(slate) {
//   // Function to calculate the brightness of an RGB color
// function calculateBrightnessDifference(slate) {
//   // Function9 * r + 0.587 * g + 0.114 * b; // Brightness formula
//   }
//
//   // Reduce the array to calculate the difference in brightness
//   return slate.reduce((acc, current, index) => {
//     const currentBrightness = calculateBrightness(current.rgb); // Calculate current color brightness
//     const previousBrightness =
//       index > 0 ? calculateBrightness(slate[index - 1].rgb) : currentBrightness;
//     const differenceInBrightness = Math.abs(
//       currentBrightness - previousBrightness,
//     ); // Calculate difference from previous
//
//     // Push the result to the accumulator
//     acc.push({
//       name: current.name, // Assuming each `Values` object has a `name` property
//       differenceInBrightnessFromPreviousElementOfArray: differenceInBrightness,
//     });
//
//     return acc; // Return the accumulator for the next iteration
//   }, []);
// }
//
// // Assuming `Values` objects look something like this:
// class Valuess {
//   constructor(rgb) {
//     this.rgb = rgb;
//     // Extract the name from the comment above the constructor call for demonstration
//     // In a real scenario, you might want to adjust how names are assigned
//     this.name = rgb; // Placeholder for actual name extraction logic
//   }
// }
//
// // Your slate array as provided, but wrapped in `Values` class instances
// const slate2 = [
//   //text-neutral-50
//   new Valuess("rgb(250 250 250)"),
//   //text-neutral-100
//   new Valuess("rgb(245 245 245)"),
//   //text-neutral-200
//   new Valuess("rgb(229 229 229)"),
//   //text-neutral-300
//   new Valuess("rgb(212 212 212)"),
//   //text-neutral-400
//   new Valuess("rgb(163 163 163)"),
//   //text-neutral-500
//   new Valuess("rgb(115 115 115)"),
//   //text-neutral-600
//   new Valuess("rgb(82 82 82)"),
//   //text-neutral-700
//   new Valuess("rgb(64 64 64)"),
//   //text-neutral-800
//   new Valuess("rgb(38 38 38)"),
//   //text-neutral-900
//   new Valuess("rgb(23 23 23)"),
//   //text-neutral-950
//   new Valuess("rgb(10 10 10)"),
// ];
//
// // Calculate the differences in brightness
// const brightnessDifferences = calculateBrightnessDifference(slate2);
// console.log(brightnessDifferences);
