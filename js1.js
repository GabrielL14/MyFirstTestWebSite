var combinaison1 = {
    c1: [
        'a',
        'b',
        'c',
        'd',
        'e',
        'f',
        'g',
        'h',
        'i',
        'j',
    ],
    c2:[
        'a',
        'b',
        'c',
        'd',
        'e',
        'f',
        'g',
        'h',
        'i',
        'j',
    ],
    c3:[
        'a',
        'b',
        'c',
        'd',
        'e',
        'f',
        'g',
        'h',
        'i',
        'j',
    ],
    c4:[
        'a',
        'b',
        'c',
        'd',
        'e',
        'f',
        'g',
        'h',
        'i',
        'j',
    ]
    
    
};


console.log("test1");
console.log("papipapoin");
console.log("papipapoin2");

combinaison1.c1 = GenerateComb();
combinaison1.c2 = GenerateComb();
combinaison1.c3 = GenerateComb();
combinaison1.c4 = GenerateComb();

console.group("combinaisonJSON");
console.log(JSON.stringify(combinaison1, undefined, 4));
console.groupEnd();

function CombE1ToE2(c, comb){
    if(typeof c == "string" && comb instanceof Array){
        let length = comb.length;
        let founded = false;
        let index = 0;
        for(let i = 0; i < length; i += 1){
            let e1 = comb[i];
            if(c == e1){
                founded = true;
                index = i;
            }
        }

        return index.toString();
    }
    else{
        throw "error arguments type";
    }
}
function CombE2ToE1(n, comb){
    if(typeof n == "string" && comb instanceof Array){
        return comb[parseInt(n)];
    }
    else{
        throw "error arguments type";
    }
}
function ExchangeRandomArray(arr){
    if(arr instanceof Array){
        let length = arr.length;
        let pIndex = 0;
        let actualIndex = 0;
        let result = [];
        for(let i = 0; i < length; i += 1){
            result[i] = arr[i];
        }
        for(let i = 0; i < length; i += 1){
            actualIndex = Math.round(Math.random() * (length - 1));
            let forPrevElem = result[actualIndex]
            result[actualIndex] = result[pIndex];
            result[pIndex] = forPrevElem;
            pIndex = actualIndex;
        }

        return result;
    }
    else{
        throw "error arguments type";
    }
}
function GenerateComb(){
    let result = [];
    function Contain(arr, e){
        let length = arr.length;
        let result = false;
        for(let i = 0; i < length && !result; i += 1){
            if(arr[i] == e){
                result = true;
            }
        }

        return result;
    }
    let alphabet = [];
    for(let i = 0; i < 22; i += 1){
        alphabet[i] = String.fromCharCode('a'.charCodeAt() + i);
    }
    alphabet = ExchangeRandomArray(alphabet);
    
    for(let i = 0; i < 10; i += 1){
        let charR = alphabet[i];
        if(!Contain(result, charR)){
            result[i] = charR;
        }
    }

    return result;
}
console.log("test1");
function TestCombinason(combinaison){
    let c1 = combinaison.c1;
    let c2 = combinaison.c2;
    let c3 = combinaison.c3;
    let c4 = combinaison.c4;
    var length = combinaison.c1.length;
    
    console.group("c1");
    for(i = 0; i < length; i += 1){
        let c1R = c1[i];
        let toE1R = CombE2ToE1(i.toString(), c1);
        let toE2R = CombE1ToE2(toE1R, c1);
        console.log({i: i, c1R: c1R, toE1R: toE1R, toE2R: toE2R});
    }
    console.groupEnd();

    console.group("c2");
    for(i = 0; i < length; i += 1){
        let c2R = c2[i];
        let toE1R = CombE2ToE1(i.toString(), c2);
        let toE2R = CombE1ToE2(toE1R, c2);
        console.log({i: i, c2R: c2R, toE1R: toE1R, toE2R: toE2R});
    }
    console.groupEnd();

    console.group("c3");
    for(i = 0; i < length; i += 1){
        let c3R = c3[i];
        let toE1R = CombE2ToE1(i.toString(), c3);
        let toE2R = CombE1ToE2(toE1R, c3);
        console.log({i: i, c3R: c3R, toE1R: toE1R, toE2R: toE2R});
    }
    console.groupEnd();

    console.group("c4");
    for(i = 0; i < length; i += 1){
        let c4R = c4[i];
        let toE1R = CombE2ToE1(i.toString(), c4);
        let toE2R = CombE1ToE2(toE1R, c4);
        console.log({i: i, c4R: c4R, toE1R: toE1R, toE2R: toE2R});
    }
    console.groupEnd();
}

function ToABCAddress(nAddress, combinaison){
    if(typeof nAddress == "string" && typeof combinaison == "object"){
        let length = nAddress.length;
        let fID = 0;
        let ind1 = 0;
        let ind2 = 0;
        let ind3 = 0;
        let addr = "";
        
        for(let i = 0; i < length; i += 1){
            let oldFID = fID;
            let c = nAddress[i];
            if(c == '.'){
                if(oldFID == 0){
                    ind1 = i;
                    fID = 1;
                }
                if(oldFID == 1){
                    ind2 = i;
                    fID = 2;
                }
                if(oldFID == 2){
                    ind3 = i;
                    fID = 3;
                }
            }
        }
        fID = 0;
        for(let i = 0; i < length; i += 1){
            
            let c = nAddress[i];
            let cr = '';
            let oldFID = fID;
            if(i == ind1 || i == ind2 || i == ind3){
                if(i == ind1){
                    fID = 1;
                    cr = "x";
                }
                if(i == ind2){
                    fID = 2;
                    cr = "y";
                }
                if(i == ind3){
                    fID = 3;
                    cr = "z";
                }
            }
            else{
                let comb;
                if(oldFID == 0){
                    comb = combinaison.c1;
                }
                if(oldFID == 1){
                    comb = combinaison.c2;
                }
                if(oldFID == 2){
                    comb = combinaison.c3;
                }
                if(oldFID == 3){
                    comb = combinaison.c4;
                }
                cr = CombE2ToE1(c, comb);
            }
            addr += cr;

        }

        return {
            success: fID == 3,
            ind1: ind1,
            ind2: ind2,
            ind3: ind3,
            addr: addr
        }
    }
    else{
        throw "error arguments type";
    }
}
function ToNAddress(abcAddress, combinaison){
    if(typeof abcAddress == "string" && typeof combinaison == "object"){
        let length = abcAddress.length;
        let fID = 0;
        let ind1 = 0;
        let ind2 = 0;
        let ind3 = 0;
        let addr = "";
        let str2 = abcAddress.toLowerCase();
        
        for(let i = 0; i < length; i += 1){
            let oldFID = fID;
            let c = str2[i];
            if(oldFID == 0 && c == "x"){
                fID = 1;
                ind1 = i;
            }
            if(oldFID == 1 && c == "y"){
                fID = 2;
                ind2 = i;
            }
            if(oldFID == 2 && c == "z"){
                fID = 3;
                ind3 = i;
            }
        }
        fID = 0;
        for(let i = 0; i < length; i += 1){
            let c = abcAddress[i];
            let cr = '';
            let oldFID = fID;
            if(i == ind1 || i == ind2 || i == ind3){
                if(i == ind1){
                    fID = 1;
                    cr = ".";
                }
                if(i == ind2){
                    fID = 2;
                    cr = ".";
                }
                if(i == ind3){
                    fID = 3;
                    cr = ".";
                }
            }
            else{
                let comb;
                if(oldFID == 0){
                    comb = combinaison.c1;
                }
                if(oldFID == 1){
                    comb = combinaison.c2;
                }
                if(oldFID == 2){
                    comb = combinaison.c3;
                }
                if(oldFID == 3){
                    comb = combinaison.c4;
                }
                cr = CombE1ToE2(c, comb);
            }
            addr += cr;
        }

        

        return {
            success: fID == 3,
            ind1: ind1,
            ind2: ind2,
            ind3: ind3,
            addr: addr,
        }
    }
    else{
        throw "error arguments type";
    }
}




(function(){
    function GetUrl(){
            
    }
    function IncludeScript(src){
        let script = document.createElement("script");
        script.src = src;
        document.head.appendChild(script);
    }
    function SetPage(dom){
        document.open();
        document.write("");
        document.close();
        document.head = dom.head;
        document.body = dom.body;
    }
    function Main(){
        let identity = "";
        let type = "";
        let url = new URL(location.href);
        let entries = url.searchParams.entries();
        
        for(let entry of entries){
            if(entry[0] == "i"){
                identity = entry[1];
            }
            if(entry[0] == "g"){
                type = entry[1];
            }
            console.log(entry);
        }
        alert("identity: ", identity, ", type: ", type);
    }

    document.addEventListener("DOMContentLoaded", Main);

})();
