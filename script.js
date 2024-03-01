const main = document.querySelector(".main");
let color = false;
let startTime;
let endTime;
let reactionTime;

function blue() {
  if (color) {
    endTime = new Date();
    reactionTime = endTime - startTime - 50;
    main.style.backgroundColor = "rgb(24, 147, 248)";
    main.innerText = reactionTime + " ms " + "⚡";
    main.removeEventListener("click", blue);
  } else {
    main.style.backgroundColor = "red";
    main.innerText = "Wait for green";
    color = !color;

    setTimeout(() => {
      main.style.backgroundColor = "Green";
      startTime = new Date();
    }, Math.random() * 3000 + 1000);
    clearTimeout();
  }
}

main.addEventListener("mousedown", blue);
