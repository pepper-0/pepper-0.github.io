var listView = document.getElementById("listView");
var iconView = document.getElementById("iconView");

// 0 = icon, 1 = list
var currentView = 1;

listView.addEventListener("click", switchToList);
iconView.addEventListener("click", switchToIcon);

var exampleCard = document.getElementById("exampleCard");

var projectCards = document.getElementsByClassName("projectCard");
console.log("Project cards found: " + projectCards.length);
var projectNames = document.getElementsByClassName("projectName");
console.log(projectNames);
var projectDates = document.getElementsByClassName("projectDate");
var projectDescs = document.getElementsByClassName("projectDesc");

var portfolioImgs = document.getElementsByClassName("portfolioImg");
var links = document.getElementsByClassName("link");

function switchToList() {
    currentView = 1;
    console.log("Switching to list view");
    exampleCard.style.display = "block";
    for (var i = 0; i < projectCards.length; i++) {
        projectCards[i].style.maxHeight = "50px";
        projectCards[i].style.display = "flex";
        projectCards[i].style.flexDirection = "row";

        // remove date and links
        projectDates[i].style.display = "none";
        if (links[i]) {
            links[i].style.display = "none";
        }

        // reset margins and padding
        projectNames[i].style.padding = "0";
        projectDescs[i].style.padding = "0";
        portfolioImgs[i].style.margin = "0";

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
        projectNames[i].style.whiteSpace = "nowrap";
        projectNames[i].style.textOverflow = "ellipsis";
        projectNames[i].style.overflow = "hidden";        

        // descriptions
        projectDescs[i].style.height = "100%";
        projectDescs[i].style.width = "100%";
        projectDescs[i].style.whiteSpace = "nowrap";
        projectDescs[i].style.textOverflow = "ellipsis";
        projectDescs[i].style.overflow = "hidden";

        // images
        portfolioImgs[i].style.maxHeight = "100%";
        portfolioImgs[i].style.marginLeft = "auto";
        portfolioImgs[i].style.objectFit = "cover";
        
    }
    

}

function switchToIcon() {
    console.log("Switching to icon view");
    currentView = 0;
    exampleCard.style.display = "none";
}
