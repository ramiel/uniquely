const createIterator = require("es6-util/iterator/create");
const { hrtime } = require("node:process");

module.exports = function create(chars) {
  const length = chars.length;

  const id = (i) => {
    return i < length
      ? chars[i]
      : id(Math.floor(i / length) - 1) + chars[i % length];
  };

  const random = (n = 1) => {
    let string = "";
    for (let i = 0; i < n; i++)
      string += id(Math.floor(Math.random() * length));
    return string;
  };

  const time = () => id(hrtime());

  const next = () => {
    let i = 0;
    return () => ({ value: id(i++), done: false });
  };

  const iterator = () => createIterator(next());

  return { id, random, time, iterator };
};
