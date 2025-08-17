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

        // images
        portfolioImgs[i].style.maxHeight = "100%";
        portfolioImgs[i].style.marginLeft = "auto";
        portfolioImgs[i].style.objectFit = "cover";

        // descs
        projectDescs[i].style.overflow = "hidden";
        projectDescs[i].style.textOverflow = "ellipsis";
        projectDescs[i].style.whiteSpace = "nowrap";
    
        
    }
    

}

function switchToIcon() {
    console.log("Switching to icon view");
    // essentially reset everything to original css style
    currentView = 0;

    for (var i = 0; i < projectCards.length; i++) {
        projectCards[i].style.height = "auto";
        projectCards[i].style.display = "inline-block";


        // title
        projectNames[i].style.width = "100%";
        projectNames[i].style.font = "1.2em 'TKindred', sans-serif";
        projectNames[i].style.fontWeight = "bold";
        projectNames[i].style.textShadow = "2px 2px #F4F1DE";    
        projectNames[i].style.display = "inline-block";


        // add date and links
        projectDates[i].style.display = "inline-block";
        projectDates[i].style.textAlign = "left";
        if (links[i]) {
            links[i].style.display = "inline-block";
            links[i].style.margin = "10px auto";
        }

        // reset margins and padding
        projectNames[i].style.padding = "10px";
        projectDescs[i].style.padding = "10px";
        portfolioImgs[i].style.margin = "10px";

        // descriptions
        projectDescs[i].style.height = "auto";
        projectDescs[i].style.width = "auto";
        projectDescs[i].style.overflow = "normal";
        projectDescs[i].style.textOverflow = "clip";
        projectDescs[i].style.whiteSpace = "normal";
        projectDescs[i].style.textAlign = "left";


        // images
        portfolioImgs[i].style.display = "inline-block";
        portfolioImgs[i].style.width = "80%";
        portfolioImgs[i].style.margin = "10px auto";
        portfolioImgs[i].style.height = "auto";
        portfolioImgs[i].style.maxHeight = "500px";  

    }
}
