/* ABOUT ANIMATIONS */
var bag = document.getElementById("bag");
bag.addEventListener("click", showBagItems);
var waterbottle = document.getElementById("waterbottle");
var glasses = document.getElementById("glasses");
var phone = document.getElementById("phone");
var headphones = document.getElementById("headphones");
var project = document.getElementById("project");
var wallet = document.getElementById("wallet");



var bagItemInfo = document.getElementById("bagItemInfo");

var bagItems = [waterbottle, glasses, phone, headphones, project, wallet];

function showBagItems() {
    console.log("bag clicked");
    bagItems.forEach(function(item) {
        item.style.display = "block";
    });
}

waterbottle.addEventListener("click", function showWaterbottleInfo() {
        bagItemInfo.innerHTML = "<h1>water bottle<h1><ul><li>✦ i used to hate drinking water but after getting a water bottle i actually like, i actually hydrate now :D</li><li>✦ when i feel like i need a little caffeine boost, i'll also put in a green tea bag inside (copied it after my friend that got me hooked on green tea)</li><li>✦ occasionally i also like to drink boba, but my mom insists not getting it too often cause of how expensive it is 🥀 </li></ul";
});
glasses.addEventListener("click", function showGlassesInfo() {
    bagItemInfo.innerHTML = "<h1>blue light glasses<h1><ul><li>✦ i got these glasses recently because of a) senior year b) lots of late coding nights lately..</li><li>✦ i'm mostly familiar with java (ap csp), python (bwsi and girls who code), html, css, and javascript (naturally, given that i am making a website after all :) )</li><li>✦ also i've dabbled with unity too! not the greatest at it though</li></ul";
});
phone.addEventListener("click", function showPhoneInfo() {
    bagItemInfo.innerHTML = "<h1>phone<h1><ul><li>✦ athena award: a thing i'm participating in (and actually submitting this website to it too!)</li><li>✦ kiki's delivery service: i love love love studio ghibli movies! ironically, my favorite isn't kiki's, but howl's moving castle 🌰</li></ul";
});