var listView = document.getElementById("listView");
var iconView = document.getElementById("iconView");

// 0 = icon, 1 = list
var currentView = 0;

listView.addEventListener("click", switchToList);
iconView.addEventListener("click", switchToIcon);

var exampleCard = document.getElementById("exampleCard");

var projectCards = document.getElementsByClassName("projectCard");
var projectNames = document.getElementsByClassName("projectName");
var projectDates = document.getElementsByClassName("projectDate");
var projectDescs = document.getElementsByClassName("projectDesc");
var portfolioImgs = document.getElementsByClassName("portfolioImg");
var links = document.getElementsByClassName("link");

function switchToList() {
    currentView = 1;
    console.log("Switching to list view");
    exampleCard.style.display = "block";
    for (var i = 0; i < projectCards.length; i++) {
        projectCards[i].style.maxHeight = "100px";
        projectCards[i].style.display = "flex";
        projectCards[i].style.flexDirection = "row";

        // adjust ratios

        // remove date and links
        projectDates[i].style.display = "none";
        links[i].style.display = "none";


        // images
        portfolioImgs[i].style.maxHeight = "95px";
        
    }
    

}

function switchToIcon() {
    console.log("Switching to icon view");
    currentView = 0;
    exampleCard.style.display = "none";
}
