// LC 2723 Add Two Promises

/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
var addTwoPromises = async function (promise1, promise2) {
  return new Promise((resolve) => {
    Promise.all([promise1, promise2]).then((val) => resolve(val[0] + val[1]));
  });
};

/**
 * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
 *   .then(console.log); // 4
 */
