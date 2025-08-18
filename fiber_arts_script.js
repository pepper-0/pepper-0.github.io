var listView = document.getElementById("listView");
var iconView = document.getElementById("iconView");

// 0 = icon, 1 = list
var currentView = 0;

listView.addEventListener("click", switchToList);
iconView.addEventListener("click", switchToIcon);

var projectCards = document.getElementsByClassName("projectCard");
var projectNames = document.getElementsByClassName("projectName");
var projectDates = document.getElementsByClassName("projectDate");
var projectDescs = document.getElementsByClassName("projectDesc");

var portfolioImgs = document.getElementsByClassName("portfolioImg");
var links = document.getElementsByClassName("link");

function switchToList() {
    currentView = 1;
    for (var i = 0; i < projectCards.length; i++) {
        openList(i);        
    }
}

function openList(i) {
    projectCards[i].style.height = "75px";
    projectCards[i].style.display = "flex";
    projectCards[i].style.flexDirection = "row";
    projectCards[i].style.alignItems = "center";

    // remove date and links
    projectDates[i].style.display = "none";
    if (links[i]) {
        links[i].style.display = "none";
    }

    // padding
    projectCards[i].style.padding = "0px"; // or your preferred value

    // space ratios
    projectNames[i].style.width = "15%";
    projectNames[i].style.marginRight = "2.5%";
    projectNames[i].style.marginLeft = "2.5%";
    projectDescs[i].style.width = "55%";
    projectDescs[i].style.marginRight = "2.5%";
    projectDescs[i].style.marginLeft = "2.5%";
    portfolioImgs[i].style.width = "15%";
    portfolioImgs[i].style.marginRight = "2.5%";
    portfolioImgs[i].style.marginLeft = "2.5%";

    // title
    projectNames[i].style.font = "1.0em 'Monaco', monospace";
    projectNames[i].style.fontWeight = "bold";
    projectNames[i].style.textShadow = "none";     

    // images
    portfolioImgs[i].style.height = "75%";
    portfolioImgs[i].style.marginLeft = "auto";
    portfolioImgs[i].style.objectFit = "cover";

    // descs
    projectDescs[i].style.overflow = "hidden";
    projectDescs[i].style.textOverflow = "ellipsis";
    projectDescs[i].style.whiteSpace = "nowrap";

    // additional modifications given by gh copilot
    projectCards[i].style.flexDirection = "row";
    projectNames[i].style.display = "inline-block";
    projectDescs[i].style.display = "inline-block";
    projectDescs[i].style.height = "fit-content";
    portfolioImgs[i].style.display = "inline-block";
    projectNames[i].style.marginRight = "2.5%";
    projectNames[i].style.marginLeft = "2.5%";
    projectDescs[i].style.marginRight = "2.5%";
    projectDescs[i].style.marginLeft = "2.5%";
    portfolioImgs[i].style.marginRight = "2.5%";
    portfolioImgs[i].style.marginLeft = "2.5%";
}

function switchToIcon() {
    // essentially reset everything to original css style
    currentView = 0;
    for (var i = 0; i < projectCards.length; i++) {
        openIcon(i);
    }
}

projectCards[0].addEventListener("click", open0); 
projectCards[1].addEventListener("click", open1); 
projectCards[2].addEventListener("click", open2); 
projectCards[3].addEventListener("click", open3); 
projectCards[4].addEventListener("click", open4); 
projectCards[5].addEventListener("click", open5); 

function open0() {
    openIcon(0);
}
function open1() {
    openIcon(1);
}
function open2() {
    openIcon(2);
}
function open3() {
    openIcon(3);
}
function open4() {
    openIcon(4);
}
function open5() {
    openIcon(5);
}


function openIcon(i) {
    // project card
    projectCards[i].style.height = "auto";
    projectCards[i].style.display = "block";
    projectCards[i].style.padding = "10px";
    projectCards[i].style.maxHeight = "none";
    projectCards[i].style.flexDirection = "column";

    // title
    projectNames[i].style.width = "auto";
    projectNames[i].style.font = "1.2em 'TKindred', sans-serif";
    projectNames[i].style.fontWeight = "bold";
    projectNames[i].style.textShadow = "2px 2px #F4F1DE";    
    projectNames[i].style.display = "block";
    projectNames[i].style.marginRight = "0";
    projectNames[i].style.marginLeft = "0";


    // add date and links
    projectDates[i].style.display = "block";
    projectDates[i].style.textAlign = "left";
    if (links[i]) {
        links[i].style.display = "block";
        links[i].style.margin = "10px auto";
    }

    // descriptions
    projectDescs[i].style.height = "auto";
    projectDescs[i].style.width = "100%";
    projectDescs[i].style.overflow = "normal";
    projectDescs[i].style.textOverflow = "clip";
    projectDescs[i].style.whiteSpace = "normal";
    projectDescs[i].style.textAlign = "left";
    projectDescs[i].style.marginRight = "0";
    projectDescs[i].style.marginLeft = "0";

    // images
    portfolioImgs[i].style.display = "block";
    portfolioImgs[i].style.width = "auto";
    portfolioImgs[i].style.maxWidth = "50%";
    portfolioImgs[i].style.margin = "auto";
    portfolioImgs[i].style.height = "auto";
    portfolioImgs[i].style.borderRadius = "10px";
    portfolioImgs[i].style.marginRight = "auto";
    portfolioImgs[i].style.objectFit = "contain";
    portfolioImgs[i].style.marginLeft = "auto";

}