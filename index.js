'use strict';

JSON.canParse = function(str) {
  try {
    JSON.parse(str);
    return true;
  } catch (e) {
    return false;
  }
}
