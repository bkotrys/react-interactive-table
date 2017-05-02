import jsv from 'jsverify';

const promiseArb = (errorArb, successArb, timerArb) =>
  jsv.oneof(
    errorArb.smap(err => new Promise((_, rej) => {
      setTimeout(rej, timerArb.generator(10), err)
    })),
    successArb.smap(val => new Promise((res, _) => {
      setTimeout(res, timerArb.generator(10), val)
    }))
  );

const petArb = jsv.record({
  animal: jsv.elements(['Bird', 'Cat', 'Dog', 'Turtle', 'Pig', 'Capybara']),
  colour: jsv.elements(['Black', 'White', 'Brown', 'Green']),
  pattern: jsv.elements(['Solid', 'Striped', 'Spotted']),
  rating: jsv.integer(1, 5),
  price: jsv.integer(10, 1000)
});

const errorsArb = jsv.elements(['Network error', 'Solar flare detected']);

const petServiceArb = promiseArb(errorsArb, jsv.array(petArb), jsv.integer(10, 1000));

const petService = {
  fetch: jsv.sampler(petServiceArb, 100)
};

export {
  petArb,
  petServiceArb,
  petService
};
