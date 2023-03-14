// {
//   let count = 0;
//   function countTimesRan() {
//     console.log(`countTimesRan has run ${++count} times!`);
//   }

//   for (let i = 0; i < 100; i++) {
//     countTimesRan();
//   }
// }


// {
//   let count = 0;
//   function countTimesRan() {
//     console.log(`countTimesRan has run ${++count} times!`);
//   }

//   for (let i = 0; i < 100; i++) {
//     if (Math.random() < 0.8) {
//       countTimesRan();
//     }
//   }
// }

// {
//   let count = 0;
//   function countTimesRan() {
//     console.log(`countTimesRan has run ${++count} times!`);
//   }

//   for (let i = 0; i < 100; i++) {
//     if (shouldRun(0.8)) {
//       countTimesRan();
//     }
//   }

//   function shouldRun(probability) {
//     return Math.random() < probability;
//   }
// }

{
  let count = 0;
  function countTimesRan() {
    console.log(`countTimesRan has run ${++count} times!`);
  }

  for (let i = 0; i < 100; i++) {
    maybeRun(countTimesRan, 0.8);
  }

  function maybeRun(callback, probability) {
    if (Math.random() < probability) {
      callback();
    };
  }
}
