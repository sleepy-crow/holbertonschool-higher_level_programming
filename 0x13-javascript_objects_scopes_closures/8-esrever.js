#!/usr/bin/node
exports.esrever = function (list) {
  const revList = [];
  for (let index = list.length - 1; index >= 0; index--) {
    revList.push(list[index]);
  }
  return revList;
};