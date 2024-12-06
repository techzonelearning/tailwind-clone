







let closebar = document.getElementById("close");
let addClass = document.getElementById("addClass");
let bars = document.getElementById("bars");

closebar.addEventListener("click", () => {
  addClass.classList.add("left-full");
});
bars.addEventListener("click", () => {
  addClass.classList.remove("left-full");
});
