const getBodyElement = document.body;
const head = document.head || document.getElementsByTagName('head')[0];

let displayNod = false;

const nodBtnStyle = document.createElement('style');
nodBtnStyle.textContent = `

  .nodContainer {
    position: fixed; 
    right: 23px; 
    bottom: 23px; 
    background-color: #34568B; 
    border-radius: 50%; 
    z-index: 997;
    height:70px;
    width:70px;
    display:flex;
    justify-content:center;
    align-items:center;";
  }

  .nodBtn {
    background:transparent; 
    border:none; 
    cursor: pointer; 
    font-size: 13px; 
    text-decoration: none; 
    color: #FFFFFF; 
    font-family: sans-serif; 
    z-index: 1;
    height:70px;
    width:70px;
    border-radius:50%;
  }

  .nodBtn:hover{
    background-color:violet;
  }

  .nodiFrame {
    position: fixed; 
    right: 23px; 
    bottom: 100px; 
    z-index: 997;
    border:0;
    border-radius:0.5rem;
  }
`;

head.appendChild(nodBtnStyle);

if (getBodyElement !== null) {
  let parentNode = document.createElement("div");
  parentNode.className = 'nodContainer';

  let iframeNode = document.createElement("iframe");
  iframeNode.src = nodlink;
  iframeNode.className = 'nodiFrame';
  iframeNode.title = "Just Nod";
  iframeNode.width = "350";
  iframeNode.height = "500";
  iframeNode.allow = "camera; microphone";

  let nodButton = document.createElement('button');
  nodButton.innerHTML = 'Show NOD';
  nodButton.className = 'nodBtn';
  nodButton.onclick = function () {
    displayNod = !displayNod;
    if (displayNod) {
      nodButton.innerHTML = 'Hide NOD';
      getBodyElement.appendChild(iframeNode);
    } else {
      nodButton.innerHTML = 'Show NOD';
      getBodyElement.removeChild(iframeNode);
    }
    return false;
  };
  parentNode.appendChild(nodButton);
  getBodyElement.appendChild(parentNode);
}

//Handy
// var my_awesome_script = document.createElement('script');
// my_awesome_script.setAttribute('src','http://example.com/site.js');
// document.head.appendChild(my_awesome_script);