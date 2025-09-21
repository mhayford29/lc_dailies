// LC 2637 Promise Time Limit

/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
var timeLimit = function (fn, t) {
  return async function (...args) {
    let id;
    const racePromise = new Promise((resolve, reject) => {
      id = setTimeout(() => reject("Time Limit Exceeded"), t);
    });
    return Promise.race([fn(...args), racePromise]).finally(() =>
      clearTimeout(id)
    );
  };
};

/**
 * const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
 * limited(150).catch(console.log) // "Time Limit Exceeded" at t=100ms
 */
