const textarea = document.getElementById("mensaje");


textarea.addEventListener("focus", () => {

    textarea.style.boxShadow = "0 0 15px #00bfff";

});

textarea.addEventListener("blur", () => {

    textarea.style.boxShadow = "none";

});


document.addEventListener("mousemove", (e) => {

    const objects = document.querySelectorAll(".object");

    let x = (window.innerWidth / 2 - e.pageX) / 80;
    let y = (window.innerHeight / 2 - e.pageY) / 80;

    objects.forEach((obj) => {

        obj.style.transform =
        `translate(${x}px, ${y}px)`;

    });

});