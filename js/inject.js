function Function1(){
    console.log("hello world1");
}
function Function2(){
    console.log("hello world2");
}
setInterval(() => {
    const para = document.createElement("p");
    para.innerHTML = "lkjhgfdfghjk";
    document.body.appendChild(para);;
}, 100);
console.log(document.body);