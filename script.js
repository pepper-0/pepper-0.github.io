/* .js files add interaction to your website */

/* INDEX ANIMATIONS */
var mainCode = document.getElementById("mainCode");
mainCode.addEventListener("click", openMain);
var mainOpen = false;

var runButton = document.getElementById("runButton");
runButton.addEventListener("click", runCode);

var translateIndex = -1;
var welcomeText = [
    "⋆.˚✮🎧✮˚.⋆  hello! i'm jana leung, welcome to my corner :\)\nfeel free to look around, and relax\!\nthis is a personal website, so it doesn't have any specific theme or purpose\.\n\(pssst, if you want more information/to contact me, you can click my logo...)",
    "⋆.˚✮🎧✮˚.⋆  你好! 我叫梁靜悠，欢迎来到我的网站 :)\nok big disappoint... my chinese is not that good. sorry, i am NOT translating the rest of what i wrote in english, i am so illiterate. genuinely.",
    "⋆.˚✮🎧✮˚.⋆  你好！我是梁靜悠，欢迎来到我的小角落 :)\n随便看看, 放松一下!\n这是一个个人网站，所以没有特别的主题或目的。\n（嘘，如果你想要更多信息/联系我，可以点击我的logo…）\n (Credits to Google Translate)"
]

var translateText = document.getElementById("translatable");
var translateButton = document.getElementById("translateButton");
translateButton.style.display = "none";


translateButton.addEventListener("click", changeLanguage);

function openMain() {
    if (!mainOpen) {
        mainCode.innerHTML = "&nbsp&nbsppublic static void main(String[] args) {<br>&nbsp&nbsp&nbsp&nbspString message = Messages.welcomeEnglish();<br>&nbsp&nbsp&nbsp&nbspSystem.out.println(message);<br>&nbsp&nbsp}";
    } else {
        mainCode.innerHTML = "&nbsp&nbsppublic static void main(String[] args) {}";
    }
    mainOpen = !mainOpen;

}

function runCode() {
    // chage run button text

    if (runButton.innerHTML == "Run ►") {
        runButton.innerHTML = "Stop ■";
        changeLanguage();
        translateButton.style.display = "block";
    } else if (runButton.innerHTML == "Stop ■") {
        runButton.innerHTML = "Run ►";
        translateText.innerHTML = "";
        translateButton.style.display = "none";
        translateIndex = -1;
    }
}

function changeLanguage() {
    translateIndex++;
    if (translateIndex == welcomeText.length) {
        translateIndex = 0;
    }
    translateText.innerHTML = welcomeText[translateIndex];
}