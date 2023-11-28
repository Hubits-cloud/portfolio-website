const mouse = document.getElementById("mouse");

window.onmousemove = event => {
    const x = event.clientX - mouse.offsetWidth / 2,
          y = event.clientY - mouse.offsetHeight / 2;

    mouse.style.transform = `translate(${x}px, ${y}px)`;
}