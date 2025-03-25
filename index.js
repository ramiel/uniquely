const create = require("./create");

const { id, random, time, iterator } = create(
  "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
);

module.exports = { create, id, random, time, iterator };
