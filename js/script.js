//DEFINE VARIABLES
let NumberOfWelcomingDIV = 9; //CHANGE HERE WELCOME DIV NUMBER
let NumberOfTextDIV = 10; //CHANGE HERE TEXT DIV NUMBER

// opening of the website
addEventListener("DOMContentLoaded", (event) => {
  setTimeout(() => {
    scrollToCenter();
  }, 10);

  
  let recenterDivs = document.getElementsByClassName("recenter");
  console.log(recenterDivs);
  for (let i = 0; i < recenterDivs.length; i++) {
    //si jamais ça bug, essayer mouseenter ou mouseleave
    recenterDivs[i].addEventListener("mouseover", () => {
      console.log("mouse leave");
      reCenterDiv(recenterDivs[i]);
    });
  }

  function reCenterDiv(container) {
    const containerRect = container.getBoundingClientRect();

    window.scrollTo({
      left: containerRect.left + window.scrollX,
      top: containerRect.top + window.scrollY,
      behavior: "smooth",
    });
  }
});

function scrollToCenter() {
  console.log("scroll to center");
  var width = document.body.scrollWidth;
  var height = document.body.scrollHeight;

  var viewportWidth = window.innerWidth;
  var viewportHeight = window.innerHeight;

  window.scrollTo({
    left: width / 2 - viewportWidth / 2,
    top: height / 2 - viewportHeight / 2,
    behavior: "smooth",
  });
}

for (let i = 1; i <= NumberOfWelcomingDIV; i++) {
  const myDiv = document.getElementById("myDiv" + i);
  if (myDiv) {
    myDiv.addEventListener("click", () => {
      myDiv.classList.add("move-up");
      setTimeout(() => {
        myDiv.style.display = "none"
      }, 3000);
      // myDiv.classList.toggle("move-down");
    });
  }
}

for (let i = 1; i <= NumberOfTextDIV; i++) {
  const scrollableDiv = document.querySelector("#scrollable-text-" + i);
  if (scrollableDiv) {
    scrollableDiv.addEventListener("mouseleave", () => {
      scrollableDiv.scrollTop = 0;
    });
  }
}
