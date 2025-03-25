const create = require("./create");

const x = create("0123456789abcdef").random;
const y = create("89abcdef").random;

module.exports = function uuid() {
  return [x(8), x(4), "4" + x(3), y(1) + x(3), x(12)].join("-");
};
