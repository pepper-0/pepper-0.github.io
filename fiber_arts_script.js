var listView = document.getElementById("listView");
var iconView = document.getElementById("iconView");

// 0 = icon, 1 = list
var currentView = 0;

listView.addEventListener("click", switchToList);
iconView.addEventListener("click", switchToIcon);

var iconExampleCard = document.getElementById("exampleCard");

var iconProjectCards = document.getElementsByClassName("projectCard");
var iconProjectNames = document.getElementsByClassName("projectName");
var iconProjectDates = document.getElementsByClassName("projectDate");
var iconProjectDescs = document.getElementsByClassName("projectDesc");

var iconPortfolioImgs = document.getElementsByClassName("portfolioImg");
var iconLinks = document.getElementsByClassName("link");

// create copies of original elemetns for list view
var listExampleCard = iconExampleCard;
var listProjectCards = iconProjectCards;
var listProjectNames = iconProjectNames;
var listProjectDates = iconProjectDates;
var listProjectDescs = iconProjectDescs;
var listPortfolioImgs = iconPortfolioImgs;
var listLinks = iconLinks;

// now modify the original elements for list view
for (var i = 0; i < listProjectCards.length; i++) {
    listProjectCards[i].style.maxHeight = "50px";
//    listProjectCards[i].style.display = "flex";
    listProjectCards[i].style.flexDirection = "row";

    // reset margins and padding
    listProjectNames[i].style.padding = "0";
    listProjectDescs[i].style.padding = "0";
    listPortfolioImgs[i].style.margin = "0";

    // space ratios
    listProjectNames[i].style.width = "15%";
    listProjectNames[i].style.marginRight = "2.5%";
    listProjectNames[i].style.marginLeft = "2.5%";
    listProjectDescs[i].style.width = "55%";
    listProjectDescs[i].style.marginRight = "2.5%";
    listProjectDescs[i].style.marginLeft = "2.5%";
    listPortfolioImgs[i].style.width = "15%";
    listPortfolioImgs[i].style.marginRight = "2.5%";
    listPortfolioImgs[i].style.marginLeft = "2.5%";

    // title
    listProjectNames[i].style.font = "1.0em 'Monaco', monospace";
    listProjectNames[i].style.fontWeight = "bold";
    listProjectNames[i].style.textShadow = "none";     

    // images
    listPortfolioImgs[i].style.maxHeight = "100%";
    listPortfolioImgs[i].style.marginLeft = "auto";
    listPortfolioImgs[i].style.objectFit = "cover";

    // descs
    listProjectDescs[i].style.overflow = "hidden";
    listProjectDescs[i].style.textOverflow = "ellipsis";
    listProjectDescs[i].style.whiteSpace = "nowrap";
}
switchToIcon(); // default view is icon view


function switchToList() {
    currentView = 1;
    console.log("Switching to list view");
    exampleCard.style.display = "block"; 
    for (var i = 0; i < listProjectCards.length; i++) {
        iconExampleCard.style.display = "none"; // hide the example card in icon view
        iconProjectCards[i].style.display = "none"; 
        iconProjectNames[i].style.display = "none";
        iconProjectDates[i].style.display = "none";
        iconProjectDescs[i].style.display = "none";
        iconPortfolioImgs[i].style.display = "none";
        iconLinks[i].style.display = "none";

        // show list view 
        listExampleCard.style.display = "block";
        listProjectCards[i].style.display = "flex"; // show the project cards in list view
        listProjectNames[i].style.display = "inline-block";
        listProjectDates[i].style.display = "none";
        listProjectDescs[i].style.display = "inline-block";
        listPortfolioImgs[i].style.display = "inline-block";
        listLinks[i].style.display = "inline-block";
        listProjectCards[i].style.height = "auto"; // set height to auto for list view


    }
    

}

function switchToIcon() {
    console.log("Switching to icon view");
    // essentially reset everything to original css style
    currentView = 0;

    for (var i = 0; i < projectCards.length; i++) {
        iconExampleCard.style.display = "block"; // hide the example card in icon view
        iconProjectCards[i].style.display = "block"; 
        iconProjectNames[i].style.display = "block";
        iconProjectDates[i].style.display = "block";
        iconProjectDescs[i].style.display = "block";
        iconPortfolioImgs[i].style.display = "block";
        iconLinks[i].style.display = "block";

        // show list view 
        listExampleCard.style.display = "block";
        listProjectCards[i].style.display = "flex"; // show the project cards in list view
        listProjectNames[i].style.display = "inline-block";
        listProjectDates[i].style.display = "none";
        listProjectDescs[i].style.display = "inline-block";
        listPortfolioImgs[i].style.display = "inline-block";
        listLinks[i].style.display = "inline-block";
        listProjectCards[i].style.height = "auto"; // set height to auto for list view        
        // projectCards[i].style.height = "auto";
        // projectCards[i].style.display = "inline-block";


        // // title
        // projectNames[i].style.width = "100%";
        // projectNames[i].style.font = "1.2em 'TKindred', sans-serif";
        // projectNames[i].style.fontWeight = "bold";
        // projectNames[i].style.textShadow = "2px 2px #F4F1DE";    
        // projectNames[i].style.display = "inline-block";


        // // add date and links
        // projectDates[i].style.display = "inline-block";
        // projectDates[i].style.textAlign = "left";
        // if (links[i]) {
        //     links[i].style.display = "inline-block";
        //     links[i].style.margin = "10px auto";
        // }

        // // reset margins and padding
        // projectNames[i].style.padding = "10px";
        // projectDescs[i].style.padding = "10px";
        // portfolioImgs[i].style.margin = "10px";

        // // descriptions
        // projectDescs[i].style.height = "auto";
        // projectDescs[i].style.width = "auto";
        // projectDescs[i].style.overflow = "normal";
        // projectDescs[i].style.textOverflow = "clip";
        // projectDescs[i].style.whiteSpace = "normal";
        // projectDescs[i].style.textAlign = "left";


        // // images
        // portfolioImgs[i].style.display = "inline-block";
        // portfolioImgs[i].style.width = "80%";
        // portfolioImgs[i].style.margin = "10px auto";
        // portfolioImgs[i].style.height = "auto";
        // portfolioImgs[i].style.maxHeight = "500px";  

    }
}
