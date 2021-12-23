const promise = new Promise((resolve, reject) => {
  function getRandom(min, max) {
    return Math.random() * (max - min) + min;
  }
  const randomTime = (getRandom(0, 3));
  const EXECUTION_TIME = 2;

  setTimeout(() => {
    if (randomTime < EXECUTION_TIME) {
      resolve('Success');
    } else {
      reject(new Error('Error'));
    }
  }, randomTime);
});

promise.then(message => {
  console.log(message);
})
  .catch(error => console.error(error))

