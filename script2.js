let color=""

document.addEventListener('keydown', function (event) {
    if (event.key === 'a') {
        color="green"
    } else if (event.key === 's') {
        color="red"
    } else if (event.key === 'd') {
        color="orange"
    }
    })
    
    const color1 = document.querySelector("#color1");
    const color2 = document.querySelector("#color2");
    const color3 = document.querySelector("#color3");
    const color4 = document.querySelector("#color4");

    color1.addEventListener("click", (event) => (color1.style.backgroundColor=color));
    color2.addEventListener("click", (event) => (color2.style.backgroundColor=color));
    color3.addEventListener("click", (event) => (color3.style.backgroundColor=color));
    color4.addEventListener("click", (event) => (color4.style.backgroundColor=color));  