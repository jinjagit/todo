const uniqueId = (() => {
  let count = 0;
  return () => {
    ++count;
    return count;
  };
})();

export { uniqueId }
