const button = document.querySelector("button")
const menu = document.getElementsByClassName("menunav")[0]

const myFunction = () => {
  menu.classList.toggle('visible');
}
button.addEventListener('click', myFunction)



