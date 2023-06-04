const quicki = require('../index').quicki;
const assert = require('assert');

describe('Hız Testi', function () {
  const obj = {
    name: 'John Doe',
    age: 30,
    city: 'New York',
    hobby: 'Programming',
    language: 'JavaScript',
    experience: 'Intermediate',
    favoriteColor: 'Blue',
    favoriteNumber: 42,
  };

  it('JSON.stringify() hızı', function () {
    console.time('JSON.stringify()');
    JSON.stringify(obj);
    console.timeEnd('JSON.stringify()');
  });

  it('quicki() hızı', function () {
    console.time('quicki()');
    quicki(obj);
    console.timeEnd('quicki()');
  });
});
