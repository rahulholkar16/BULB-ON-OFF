const button = document.body.querySelector(".btn");

const on = () => {
    document.body.classList.toggle("on");
}

button.addEventListener("click", on);
