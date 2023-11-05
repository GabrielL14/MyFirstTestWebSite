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

document.body.addEventListener('click') = () => {
    CreateWindow1();
}

//console.log(document.body);