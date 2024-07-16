const shareButton = document.querySelector(".icons-share");
const shareSVG = document.querySelector (".button-svg");
const shareItem = document.querySelector(".share-component");
const shareImage = document.querySelector(".share-image")

shareButton.addEventListener('click', function(){
shareItem.style.display = "flex";
shareSVG.style.fill ="white";
});

document.addEventListener('click', function(event) {
    const targetElement = event.target;
    if (!shareButton.contains(targetElement) && !shareItem.contains(targetElement)) {
      shareItem.style.display = "none";
      shareSVG.style.fill = "#6E8098";
    }
  });