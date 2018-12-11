var tabbutton=document.querySelectorAll(".buttoncontainer button");
var tabPanels=document.querySelectorAll(".tabpanel");

function showPanel(panelIndex,colorCode) {
    tabbutton.forEach(function(node){
        node.style.backgroundColor="#262F30";
        node.style.color="white";
        node.style.fontWeight="";
        node.style.border="0.5px solid white";
        node.style.borderBottom="0";
        node.style.cursor="pointer";
    });
    tabbutton[panelIndex].style.backgroundColor="#D7ECFA";
    tabbutton[panelIndex].style.color="Black";
    tabbutton[panelIndex].style.fontWeight="bold";
    tabbutton[panelIndex].style.borderBottom="0";
    tabbutton[panelIndex].style.cursor="default";
    tabPanels.forEach(function(node){
        node.style.display="none";
    });
    tabPanels[panelIndex].style.display="block";
}
showPanel(0);