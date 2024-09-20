// const setTimeoutFunc = () => {
//   let timeoutId = 0;
//   let timerMap = {};

//   const setTimeoutPolly = (callback, delay, ...arg) => {
//     let id = timeoutId++;
//     timerMap[id] = true;
//     let start = Date.now();
//     const triggerCallback = () => {
//       if (!timerMap[id]) {
//         return;
//       }
//       if (Date.now() > start + delay) {
//         callback(...arg);
//       } else {
//         requestIdleCallback(triggerCallback);
//       }
//     };
//     requestIdleCallback(triggerCallback);
//     return id;
//   };
//   const clearTimeoutPolly = (id) => {
//     delete timerMap[id];
//   };

//   return { setTimeoutPolly, clearTimeoutPolly };
// };

// const { setTimeoutPolly } = setTimeoutFunc();

// console.log("start");
// const myId = setTimeoutPolly(
//   (name) => {
//     console.log("settimeout triggered", name);
//   },
//   1000,
//   "manish"
// );
// console.log("end");

/**
 *
 * step 1:--- create a function that has two funcs:--a settimout, b clear timeout.
 * outter func will have two variables a timer id with initial state of 0 and a timerMap which stores the timerId of each instance in which the setTimeout gets triggered
 *
 *
 * */

const handleSetTimeoutFunc = () => {
  let timerId = 0;
  const timerMap = {};

  const setTimeoutPollifil = (callback, delay) => {
    let id = timerId++;
    timerMap[id] = true;
    const startTime = Date.now();
    const triggerCallback = () => {
      if (!timerMap[id]) {
        return;
      }
      if (Date.now() > startTime + delay) {
        callback();
      } else {
        window.requestIdleCallback(triggerCallback);
      }
    };
    window.requestIdleCallback(triggerCallback);
    return id;
  };
  const clearTimeoutPollifil = (id) => {
    delete timerMap[id];
  };

  return { setTimeoutPollifil, clearTimeoutPollifil };
};
const { setTimeoutPollifil, clearTimeoutPollifil } = handleSetTimeoutFunc();

console.log("Start");

const id = setTimeoutPollifil(() => {
  console.log("settimeout triggered");
}, 1);

clearTimeoutPollifil(id);
console.log("end");

// handleSetIntervalFunc = () => {
//   let timerId = 0;
//   let timeMap = {};

//   const setIntervalPolly = (callback, delay) => {
//     let id = timerId++;
//     const reiterate = () => {
//       timeMap[id] = setTimeout(() => {
//         callback();
//         if (timeMap[id]) {
//           reiterate();
//         }
//       }, delay);
//     };
//     reiterate();
//     return id;
//   };
//   const clearIntervalPolly = (id) => {
//     delete timeMap[id];
//   };

//   return { setIntervalPolly, clearIntervalPolly };
// };

// const { setIntervalPolly, clearIntervalPolly } = handleSetIntervalFunc();

// console.log("intervalStarted");

// const intervalId = setIntervalPolly(() => {
//   console.log("interval triggered");
// }, 1000);

// setTimeout(() => {
//   clearIntervalPolly(intervalId);
// }, 3000);
// console.log("intervalended");
