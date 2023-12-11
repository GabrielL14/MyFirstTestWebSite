function Function1(){
    console.log("hello world1");
}
function Function2(){
    console.log("hello world2");
}
function CreateWindow1(){
    const result = window.open("", "_blank", "width=1280, height=720");
    result.document.open();
    result.document.write("");
    result.document.close();
    const body = result.document.body;
    body.innerHTML = "<h1 style = \"color: aqua\">HELLO WORLD</h1>";

    return result;
}

window.addEventListener('load', OnMain);
function AddButtonForDownloadDocument(){
    const buttonParent = document.createElement('div');
    buttonParent.style = "display: flex; flex-direction-column; justify-content: center; align-items: center; height: 100vh";
    const button = document.createElement('button');
    button.innerText = "Download Document 1";
    button.style = "border: 1px solid black; padding: 20px; font-size: 40px; cursor: pointer; min-width: 10%";
    buttonParent.appendChild(button);
    document.body.appendChild(buttonParent);
    button.addEventListener('click', () => {
        DownloadDocument(GenerateDocument1());
        //CreateWindow1();
        console.log("HELLO WORLD");
    });
}
function OnMain(e){
    console.log("on main");
    document.body.style = "height: 100vh";
    AddButtonForDownloadDocument();
}



//console.log(document.body);