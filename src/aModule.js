const aModule = () => {
  let test = document.getElementById('test');
  test.innerHTML = 'Hello from aModule';

  x = 6; // intentional error for testing (seting undeclared var)
};

export { aModule }
