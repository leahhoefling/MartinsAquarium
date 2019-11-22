const borderColorChange = () => {
    let tipDivs = document.querySelectorAll(".tip");

    for (const tip of tipDivs) {
        // This handler will be executed only once when the cursor
        // moves over the div inside aside
        tip.addEventListener("mouseover", function (event) {
            // highlight the mouseenter target
            tip.style.border = "1px dotted teal";
        })
        tip.addEventListener("mouseout", function (event) {
            // highlight the mouseenter target
            tip.style.border = "";
        })
    }
}

export default borderColorChange