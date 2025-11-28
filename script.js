const togglebarsEL = document.querySelector(".toggle-bars");
const navEL = document.querySelector("nav");

togglebarsEL.addEventListener("click", () => {
  togglebarsEL.classList.toggle("active");
  navEL.classList.toggle("active");
});
