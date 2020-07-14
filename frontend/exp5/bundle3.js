(function (factory) {
  typeof define === 'function' && define.amd ? define(factory) :
  factory();
}((function () { 'use strict';

  function bb(y) {
    return y + y;
  }

  console.log(bb(5));

})));
