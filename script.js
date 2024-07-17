const shareButton = document.querySelector(".icons-share");
const shareSVG = document.querySelector (".button-svg");
const shareItemDesktop = document.querySelector(".share-component-desktop");
const shareImage = document.querySelector(".share-image")

shareButton.addEventListener('click', function(){
shareItemDesktop.style.display = "flex";
shareSVG.style.fill ="white";
});

document.addEventListener('click', function(event) {
    const targetElement = event.target;
    if (!shareButton.contains(targetElement) && !shareItemDesktop.contains(targetElement)) {
      shareItemDesktop.style.display = "none";
      shareSVG.style.fill = "#6E8098";
    }
  });

//   function changeAppearance (e) {
// if (e.matches){
//   document.querySelector('component-mobile').style.display = "flex";
//   document.querySelector('share-component-desktop').style.display = "none";
// } else {
//   document.querySelector('component-mobile').style.display = "none";
//   document.querySelector('share-component-desktop').style.display = "flex";
// }}

// const mediaQuery = window.matchMedia('(max-width: 800px)');
//         mediaQuery.addListener(changeAppearance);
//         changeAppearance(mediaQuery);