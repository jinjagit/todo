const uniqueId = (function() {
  let count = 0;
  return function() {
    ++count;
    return count;
  };
})();

export { uniqueId }
