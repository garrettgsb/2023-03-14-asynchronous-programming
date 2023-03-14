// We want to say "do X in Y milliseconds."
// So it's not like the whole program has to wait for 2 seconds, then do a thing, then wait, then do a thing...
// It's like you say "Hey, do your thing, but when 2 seconds have passed, run this, k?"
function doXInYMs(x /* a function */, y /* some number of milliseconds */) {
  setTimeout(x, y);
}

// console.log('start');
// setTimeout(function() { console.log('2 seconds have passed...') }, 2000);
// setTimeout(() => console.log('4 seconds have passed...'), 4000);
// setTimeout(() => console.log('5 seconds have passed...'), 5000);
// setTimeout(() => console.log('5.5 seconds have passed...'), 5500);
// console.log('end');

function reportCurrentTime() {
  console.log(Date.now());
}

// console.log('start');
// setTimeout(reportCurrentTime, 2000);
// setTimeout(reportCurrentTime, 4000);
// setTimeout(reportCurrentTime, 5000);
// setTimeout(reportCurrentTime, 5500);
// console.log('end');

const start = Date.now();
const interval = setInterval(() => {
  reportCurrentTime()
  if (Date.now() > start + 10000) {
    clearInterval(interval);
  }
}, 1000);
console.log(interval);

// setTimeout(() => { clearInterval(interval) }, 10000);

// Here's a weird gotcha: `console.log` before and after... Why?
