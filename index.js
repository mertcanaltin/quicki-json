function quicki(obj) {
  const pairs = [];

  for (let key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      pairs.push(encodeURIComponent(key) + "=" + encodeURIComponent(obj[key]));
    }
  }

  return pairs.join("&");
}

module.exports = {
  quicki,
};
