'use strict';

const create = require('./create')

var { id, random, time, iterator } = create('0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz');

module.exports = { create, id, random, time, iterator };
