/* .js files add interaction to your website */
var translateIndex = 0;
var welcomeText = [
    "⋆.˚✮🎧✮˚.⋆  hello! i'm jana leung, welcome to my corner :\)\nfeel free to look around, and relax\!\nthis is a personal website, so it doesn't have any specific theme or purpose\.\n\(pssst, if you want more information/to contact me, you can click my logo...)",
    "⋆.˚✮🎧✮˚.⋆  你好! 我叫梁靜悠，欢迎来到我的网站 :)"
]

var translateText = document.getElementById("translatable");
var translateButton = document.getElementById("translateButton");

translateButton.addEventListener("click", changeLanguage);

function changeLanguage() {
    translateIndex++;
    if (translateIndex == welcomeText.length) {
        translateIndex = 0;
    }
    translateText.innerHTML = welcomeText[translateIndex];
}