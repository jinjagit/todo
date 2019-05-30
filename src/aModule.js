const aModule = () => {
  let test = document.getElementById('test');
  test.innerHTML = 'Hello from aModule';

  let content = document.getElementById('content');

  for(let i = 0; i < 70; i++) {
    const para = document.createElement('p');
    para.innerHTML = "placeholder content";
    para.style.textAlign = "center";
    content.appendChild(para);
  }

};

export { aModule }
