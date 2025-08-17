/* code is majority copied and adapted from fiber arts script */

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
var projectAdditionalInfo = document.getElementsByClassName("projectAdditionalInfo");
var links = document.getElementsByClassName("link");

function switchToList() {
    currentView = 1;
    for (var i = 0; i < projectCards.length; i++) {
        projectCards[i].style.display =  "flex";
        projectCards[i].style.maxHeight = "75px";
        projectCards[i].style.width = "100%";
        projectCards[i].style.boxSizing = "border-box";
        projectCards[i].style.padding = "0";
        projectCards[i].style.textAlign = "center";

        // space ratios + remov additional info + dates
        projectNames[i].style.width = "15%";
        projectNames[i].style.marginRight = "2.5%";
        projectNames[i].style.marginLeft = "2.5%";
        projectDescs[i].style.width = "55%";
        projectDescs[i].style.marginRight = "2.5%";
        projectDescs[i].style.marginLeft = "2.5%";
        links[i].style.width = "15%";
        links[i].style.marginRight = "2%";
        links[i].style.marginLeft = "2%";
        projectDates[i].style.display = "none"; // hide dates in list view

        projectNames[i].style.display = "block";
        projectNames[i].style.font = "1.0em 'Monaco', monospace";
        projectNames[i].style.fontWeight = "bold";
        projectNames[i].style.textAlign = "center";
        projectNames[i].style.textShadow = "none";

        projectNames[i].style.overflow = "hidden";
        projectNames[i].style.textOverflow = "ellipsis";
        projectNames[i].style.whiteSpace = "nowrap";

        // projectDates[i].style.display = "block";
        // projectDates[i].style.textAlign = "left";

        projectDescs[i].style.display = "block";
        projectDescs[i].style.textAlign = "left";
        projectDescs[i].style.overflow = "hidden";
        projectDescs[i].style.textOverflow = "ellipsis";
        projectDescs[i].style.whiteSpace = "nowrap";
    
        links[i].style.fontSize = "0.8em";
        links[i].style.display = "block";
        links[i].style.textAlign = "center";
        links[i].style.width = "fit-content";

        projectAdditionalInfo[i].style.display = "block";
        projectAdditionalInfo[i].style.textAlign = "left";
    }
    for (var j = 0; j < projectAdditionalInfo.length; j++) {
        projectAdditionalInfo[j].style.display = "none"; // hide additional info in list view
    }
}
function switchToIcon() {
    currentView = 0;
    for (var i = 0; i < projectCards.length; i++) {
        projectCards[i].style.display =  "block";
        projectCards[i].style.maxHeight = "none";

        projectCards[i].style.width = "100%";
        projectCards[i].style.boxSizing = "border-box";
        projectCards[i].style.padding = "10px";
        projectCards[i].style.textAlign = "center";

    
        // space ratios
        projectNames[i].style.width = "auto";
        projectNames[i].style.marginRight = "0";
        projectNames[i].style.marginLeft = "0";
        projectDescs[i].style.width = "100%";
        projectDescs[i].style.marginRight = "0";
        projectDescs[i].style.marginLeft = "0";
        links[i].style.fontSize = "1.0em";
        links[i].style.width = "fit-content";
        links[i].style.marginRight = "auto";
        links[i].style.marginLeft = "auto";


        projectNames[i].style.display = "block";
        projectNames[i].style.font = "bold 1.2em 'TKindred', sans-serif";
        projectNames[i].style.textShadow = "2px 2px #F4F1DE";
        projectNames[i].style.textAlign = "center";
        projectDescs[i].style.overflow = "normal";
        projectDescs[i].style.textOverflow = "none";
        projectDescs[i].style.whiteSpace = "normal";

        projectDates[i].style.display = "block";
        projectDates[i].style.textAlign = "left";

        projectDescs[i].style.display = "block";
        projectDescs[i].style.textAlign = "left";
        projectDescs[i].style.overflow = "normal";
        projectDescs[i].style.textOverflow = "none";
        projectDescs[i].style.whiteSpace = "normal";

        links[i].style.display = "block";
        links[i].style.textAlign = "center";
        links[i].style.width = "fit-content";

        projectAdditionalInfo[i].style.textAlign = "left";       
        
    }
    for (var j = 0; j < projectAdditionalInfo.length; j++) {
        projectAdditionalInfo[j].style.display = "block"; // hide additional info in list view
    }
}