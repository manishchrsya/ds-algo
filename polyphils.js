/**
 * MAP method
 * */

Array.prototype.myMapFunc = function (cb) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    temp.push(cb(this[i], i, this));
  }
  return temp;
};

/**
 * Filter
 * */

Array.prototype.myFilter = function (cb) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) {
      temp.push(this[i]);
    }
  }
  return temp;
};

/**
 * find
 * */

Array.prototype.myFind = function (callback) {
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      return this[i];
    }
  }
  return null;
};

/**
 * FindIndex:---
 * */

Array.prototype.myFindIndex = function (callback) {
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      return i;
    }
  }
  return -1;
};

/**
 * Index of
 * **/

Array.prototype.myIndexOf = function (element) {
  for (let i = 0; i < this.length; i++) {
    if (this[i] === element) {
      return i;
    }
  }
  return -1;
};

/**
 *
 * Reduce :--
 *
 * */

Array.prototype.myReduce = function (callback, initialValue) {
  let accumulator = initialValue;
  for (let i = 0; i < this.length; i++) {
    if (accumulator) {
      callback(accumulator, this[i], i, this);
    } else {
      accumulator = this[i];
    }
  }
  return accumulator;
};

/**
 * Call method
 * */

/**
 * use case for call
 * */
let car1 = {
  color: "red",
  company: "ferrari",
};
function purchaseCar(currency, price) {
  console.log(
    `I have purchased a ${this.color} ${this.company} car for ${currency}${price}`
  );
}
purchaseCar.call(car1, "$", 2000);
/**
 * now we'll write the polifil
 * */

Function.prototype.myCall = function (referenceToObj = {}, ...args) {
  if (typeof this !== "function") {
    throw new Error(`${this} is not a function`);
  }
  referenceToObj.function = this;
  referenceToObj.function(...args);
};

/**
 *
 * Polyfill for apply
 *
 */

Function.prototype.myApply = function (context = {}, args = []) {
  if (typeof this !== "function") {
    throw new Error(`${this} is not a function`);
  }
  if (!Array.isArray(args)) {
    throw new Error("Expected arguments to be an array");
  }
  context.function = this;
  context.function(...args);
};

/**
 *
 * Polyfill for bind
 *
 * */

Function.prototype.myBind = function (context = {}, ...args) {
  if (typeof this !== "function") {
    throw new Error(`${this} is not a function`);
  }
  context.function = this;
  return function (...newArgs) {
    return context.function(...args, ...newArgs);
  };
};

/**
 * Promise polyfill
 *
 * */

// function PromisePolyFill(executor) {
//   let onResolved,
//     onRejected,
//     isFulfilled = false,
//     isRejected = false,
//     isCalled = false,
//     value;
//   function resolve(val) {
//     isFulfilled = true;
//     value = val;
//     if (typeof onResolved === "function") {
//       onResolved(val);
//       isCalled = true;
//     }
//   }

//   function reject(val) {
//     isRejected = true;
//     value = val;
//     if (typeof onRejected === "function") {
//       onRejected(val);
//       isCalled = true;
//     }
//   }

//   this.then = function (callback) {

//   };

//   this.catch = function (callback) {
//     onRejected = callback;
//     if (isRejected && !isCalled) {
//       isCalled = true;
//       onRejected(value);
//     }
//     return this;
//   };

//   try {
//     executor(resolve, reject);
//   } catch (error) {
//     reject(error);
//   }
// }

// const examplePromise = new PromisePolyFill((resolve, reject) => {
//   //   setTimeout(() => {
//   reject(2);
//   //   }, 1000);
// });

// examplePromise
//   .then((value) => {
//     console.log("value", value);
//   })
//   .catch((err) => console.log("err", err));

/**
 * Promise polyfill
 *
 *
 * */

function PolyfillPromise(executerFunc) {
  let onResolved, onRejected, isFulfilled, isRejected, isCalled, value;

  function resolve(val) {
    isFulfilled = true;
    value = val;
    if (typeof onResolved === "function") {
      isCalled = true;
      onResolved(val);
    }
  }

  function reject(val) {
    isRejected = true;
    value = val;
    if (typeof onRejected === "function") {
      isCalled = tru;
      onRejected(val);
    }
  }

  this.then = function (callback) {
    onResolved = callback;
    if (isFulfilled && !isCalled) {
      onResolved(value);
    }
    return this;
  };

  this.catch = function (callback) {
    onRejected = callback;
    if (isRejected && !isCalled) {
      onRejected(value);
    }
    return this;
  };

  try {
    executerFunc(resolve, reject);
  } catch (error) {
    reject(error);
  }
}

const newPromise = new PolyfillPromise((resolve, reject) => {
  //   setTimeout(() => {
  reject("manish");
  //   }, 1000);
});

newPromise
  .then((val) => {
    console.log("val", val);
  })
  .catch((err) => {
    console.log("err", err);
  });

/**
 * debounce function
 *
 */

function debounce(func, delay) {
  let timerId;
  return function (...args) {
    const context = this;
    clearTimeout(timerId);
    timerId = setTimeout(() => {
      func.apply(context, args);
    }, delay);
  };
}

const debounce = (callback, delay) => {
  let timerId;
  return (...args) => {
    const context = this;
    clearTimeout(timerId);
    timerId = setTimeout(() => {
      callback.apply(context, args);
    }, delay);
  };
};

const debouncingFunction = (cb, delay) => {
  let timerId;
  return (...props) => {
    const context = this;
    clearTimeout(timerId);
    timerId = setTimeout(() => {
      cb.apply(context, props);
    }, delay);
  };
};

const thisIsDebouncingFunction = (cb, delay) => {
  let timerId;
  return (...props) => {
    const context = this;
    clearTimeout(timerId);
    timerId = setTimeout(() => {
      cb.apply(context, props);
    }, delay);
  };
};

const manishBouncing = (callback, delay) => {
  let timerId;
  return () => {
    clearTimeout(timerId);
    timerId = setTimeout(() => {
      callback();
    }, delay);
  };
};

/**
 * polyfill for reduce method
 * */

Array.prototype.myArrayReduce = function (callback, initialValue) {
  let accumulator = initialValue;
  for (let i = 0; i < this.length; i++) {
    if (accumulator) {
      callback(accumulator, this[i], i, this);
    } else {
      accumulator = this[i];
    }
  }
  return accumulator;
};

// call:---

// Array.prototype.myCallFunc = function

const obj = {
  name: "manish",
  age: 28,
};

function getUser(title, city) {
  return `My name is ${this.name} ${title}, having age of ${this.age} from ${city}`;
}

const userDetails = getUser.call(obj, title, city);
const userDetailsArr = getUser.apply(obj, [title, city]);

Array.prototype.myCallFunc = function (context, ...args) {
  if (typeof this !== "function") {
    throw new Error(`${this} is not a function`);
  }
  context.func = this;
  context.func(...args);

  //   this.func = callback();
};

// https://dummyjson.com/products/search?q=&limit=20&skip=0
