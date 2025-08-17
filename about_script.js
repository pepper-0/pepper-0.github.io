/* ABOUT ANIMATIONS */
var bag = document.getElementById("bag");
bag.addEventListener("click", showBagItems);

var bagInstructions = document.getElementById("bagInstructions");

var clickableItemArea = document.getElementById("clickableItemArea");
clickableItemArea.style.display = "none";

var bagItemInfo = document.getElementById("bagItemInfo");

var waterbottle = document.getElementById("waterbottle");
var glasses = document.getElementById("glasses");
var phone = document.getElementById("phone");
var headphones = document.getElementById("headphones");
var project = document.getElementById("project");
var wallet = document.getElementById("wallet");
var lanyard = document.getElementById("lanyard");

var bagItemInfo = document.getElementById("bagItemInfo");
bagItemInfo.style.display = "none";

var bagItems = [waterbottle, glasses, phone, headphones, project, wallet, lanyard];

function showBagItems() {
    console.log("bag clicked");
    bagInstructions.innerHTML = "<p>✮˚.⋆ awesome! click on an item to learn more about it!</p>";
    /*shrink bag */
    // bag.style.transform = "scale(0.5)";
    // bag.style.transition = "transform 0.5s ease-in-out";
    /* currently the transition is really janky over here because it auto adjusts the width  */
    bag.src = "./assets/about/bag-display/bag_open.png";
    bag.style.margin = "0";
    bag.style.padding = "0";
    bag.style.width = "25%";
    bag.style.height = "15%";
    /*make other elements appear*/
    clickableItemArea.style.display = "grid";
    clickableItemArea.style.width = "75%";
    bagItemInfo.style.display = "block";
    bagItemInfo.innerHTML = "<h1>read here to learn more!<h1>";
    bagItems.forEach(function(item) {
        item.style.display = "block";
    });
}

waterbottle.addEventListener("click", function showWaterbottleInfo() {
    bagItemInfo.innerHTML = "<h1>water bottle<h1><ul><li>✦ i used to hate drinking water but after getting a water bottle i genuinely like, i actually hydrate now :D</li><li>✦ when i feel like i need a little caffeine boost, i'll also put in a green tea bag inside (copied it after my friend that got me hooked on green tea)</li><li>✦ occasionally i also like to drink boba, but my mom insists not getting it too often cause of how expensive it is 🥀 </li></ul>";
});
glasses.addEventListener("click", function showGlassesInfo() {
    bagItemInfo.innerHTML = "<h1>blue light glasses<h1><ul><li>✦ i got these glasses recently because of a) senior year b) lots of late coding nights lately..</li><li>✦ i'm mostly familiar with java (ap csp), python (bwsi and girls who code), html, css, and javascript (naturally, given that i am making a website after all :) )</li><li>✦ also i've dabbled with unity too! not the greatest at it though</li></ul>";
});
phone.addEventListener("click", function showPhoneInfo() {
    bagItemInfo.innerHTML = "<h1>phone<h1><ul><li>✦ athena award: a technical program i'm participating in (and actually submitting this website to it too!)</li><li>✦ kiki's delivery service: i love love love studio ghibli movies! ironically, my favorite isn't kiki's, but howl's moving castle 🏰✨🔥💨💫</li></ul>";
});
headphones.addEventListener("click", function showHeadphonesInfo() {
    bagItemInfo.innerHTML = "<h1>headphones<h1><ul><li>✦ some artists i listen to: ichiko aoba, laufey, clairo, steve lacy, lamp, men i trust, the marias</li><li>✦ i also listen to these (especially when i'm doing work): instrumental jazz, prokofiev's romeo and juliet, sense & sensibility's ost, dramatic classical music</li></ul>";
});
project.addEventListener("click", function showProjectInfo() {
    bagItemInfo.innerHTML = "<h1>knitting project<h1><ul><li>✦ one of my hobbies is fiber arts (for me, it includes but is not limited to crocheting, knitting, and sewing!)</li><li>✦ this is a shrug i've been working on on and off</li><li>✦ i like to work on my projects when i need something to do with my hands (e.g. in class lectures)</li></ul><li> ✮˚.⋆ pssst. you can check out some of my projects in my arts portfolio page :)</li>";
});
wallet.addEventListener("click", function showWalletInfo() {
    bagItemInfo.innerHTML = "<h1>wallet<h1><p>some basic info about me<p><ul><li>✦ located: MA (born and raised)</li><li>✦ i'm chinese (both parents are from hong kong)</li><li>✦ languages: english (ofc), cantonese, and mandarin. i wouldn't say i love learning languages but i have also tried to learn japanese in the past ¯\_(ツ)_/¯</li><li>✦ siblings: 0, sadly</li><li>✦ pets: 0, even more sadly. i would like both a cat and a dog in the future</li><li>✦ grade: rising high school senior (bound to change on 8/27, in which i will be an actual senior and this will be outdated information..)</li><li>✦ aspiring major: computational biology (or double major in cs + bio)</li></ul>";
});
lanyard.addEventListener("click", function showLanyardInfo() {
    bagItemInfo.innerHTML = "<h1>lanyard<h1><ul><li>✦ when i'm driving, this is where i put my car keys! </li><li>✦ this lanyard's from Beaver Works Summer Institute-- i was in Serious Games with AI (2025)</li><li>✦ i have a boxing glove keychain too! i'm not a boxer, but i practice taekwondo recreationally :)</li></ul>";
});