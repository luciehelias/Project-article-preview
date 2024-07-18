const shareButtonDesktop = document.querySelector(".icons-share-desktop");
const shareButtonMobile = document.querySelector(".icons-share-mobile");
const shareSVG = document.querySelector (".button-svg");
const shareItemDesktop = document.querySelector(".share-component-desktop");
const shareItemsMobile = document.querySelector(".share-component-mobile");
const shareMobile = document.querySelector(".share-mobile");
const person = document.querySelector(".person");

const mediaQuery = window.matchMedia('(max-width: 800px)');

function handleMediaQueryChange(e){
  if (e.matches){
    shareButtonDesktop.addEventListener('click',function(){
      shareMobile.style.display="flex";
      person.style.display="none";
      shareSVG.style.fill ="white";
      shareItemsMobile.style.display="flex";
      shareItemDesktop.style.display="none";
    });

    shareButtonMobile.addEventListener('click', function(){
      shareMobile.style.display="none";
      person.style.display="flex";
      shareSVG.style.fill = "#6E8098"
    });

  }else {
    shareButtonDesktop.addEventListener('click', function(){
      shareItemDesktop.style.display = "flex";
      shareSVG.style.fill ="white";
      shareMobile.style.display="none";
      });
      
     document.addEventListener('click', function(event) {
        const targetElement = event.target;
        if (!shareButtonDesktop.contains(targetElement) && !shareItemDesktop.contains(targetElement)) {
          shareItemDesktop.style.display = "none";
          shareSVG.style.fill = "#6E8098";
        }
      });
  }
}

handleMediaQueryChange(mediaQuery);
mediaQuery.addEventListener('change', handleMediaQueryChange);



