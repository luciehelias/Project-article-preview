const shareButton = document.querySelector(".icons-share");
const shareSVG = document.querySelector (".share-button");

console.log (shareSVG)
const shareItems = document.querySelector(".share-components");
const shareImage = document.querySelector(".share-image")

shareButton.addEventListener('click', function(){
shareItems.style.display = "flex";
shareSVG.style.fill ="white";
});

document.addEventListener('click', function(event) {
    const targetElement = event.target;
    if (!shareButton.contains(targetElement) && !shareItems.contains(targetElement)) {
      shareItems.style.display = "none";
      
    }
  });