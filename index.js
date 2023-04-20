export function fastStringify(obj) {
  let keys = [];
  let values = [];

  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
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
