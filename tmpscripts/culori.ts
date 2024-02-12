import { samples } from 'culori';
import easing from 'bezier-easing';

// Bezier easing:
let bezier = easing(0, 0, 1, 0.5);
let a = samples(10).map(bezier);
console.log({a})

// easeInQuad:
const b = samples(10).map(t => t * t);
console.log({b})
