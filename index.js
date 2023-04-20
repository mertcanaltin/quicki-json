function quicki(obj) {
    let keys = [];
    let values = [];
  
    for (let key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        keys.push(key);
        values.push(obj[key]);
      }
    }
  
    let str = "";
    for (let i = 0; i < keys.length; i++) {
      if (i > 0) str += "&";
      str += encodeURIComponent(keys[i]) + "=" + encodeURIComponent(values[i]);
    }
  
    return str;
  }
  
  module.exports = {
    quicki,
  };
  