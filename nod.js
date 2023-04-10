const getBodyElement = document.body;
let displayNod = false;
let iframestyle = "position: fixed; right: 23px; bottom: 100px; z-index: 997;";

if (getBodyElement !== null) {
    let parentNode = document.createElement("div");
    parentNode.style =
        "position: fixed; right: 23px; bottom: 23px; background-color: #34568B; border-radius: 50%; z-index: 997;height:70px;width:70px;display:flex;justify-content:center;align-items:center;";

    let iframeNode = document.createElement("iframe");
    iframeNode.src = "https://link.yournod.com/rTVccv";
    iframeNode.style = iframestyle + " ; display:none";
    iframeNode.title = "Just Nod";
    iframeNode.width = "350";
    iframeNode.height = "500";
    iframeNode.allow = "camera; microphone";

    var nodButton = document.createElement('button');
    nodButton.innerHTML = 'Show NOD';
    nodButton.style =
        "background:transparent; border:none; cursor: pointer; font-size: 13px; text-decoration: none; color: #FFFFFF; font-family: sans-serif; z-index: 1;height:70px;width:70px;border-radius:50%;";
    nodButton.onclick = function () {
        //alert('here be dragons');
        displayNod = !displayNod;
        console.log("Display NOD :", displayNod);

        if (displayNod) {
            nodButton.innerHTML = 'Hide NOD';
            iframeNode.style = iframestyle + "; display:block";
        } else {
            nodButton.innerHTML = 'Show NOD';
            iframeNode.style = iframestyle + "; display:none";
        }

        return false;
    };
    parentNode.appendChild(nodButton);


    getBodyElement.appendChild(parentNode);
    getBodyElement.appendChild(iframeNode);
}