const createSetIntervaal = () => {
  let intervalId = 0;
  let intervalMap = {};

  const setIntervalPolli = (callback, delay) => {
    let id = intervalId++;
    const reiterate = () => {
      intervalMap[id] = setTimeout(() => {
        callback();
        if (intervalMap[id]) {
          reiterate();
        }
      }, delay);
    };
    reiterate();
    return id;
  };
  const clearIntervalPolli = (id) => {
    delete intervalMap[id];
  };

  return { setIntervalPolli, clearIntervalPolli };
};

const { clearIntervalPolli, setIntervalPolli } = createSetIntervaal();

console.log("start");

const id = setIntervalPolli(() => {
  console.log("interval triggered");
}, 2000);

console.log("end");
