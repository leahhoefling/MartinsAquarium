const initializeDetailButtonEvents = () => {
    const allCloseButtons = document.querySelectorAll(".button--close")

    for (const btn of allCloseButtons) {
        btn.addEventListener(
            "click",
            theEvent => {
                const dialogElement = theEvent.target.parentNode
                dialogElement.close()
            }
        )
    }

    // Show Bubble's details when the button is clicked
    document.querySelector("#button--bubbles").addEventListener(
        "click",
        theClickEvent => {
            const theDialog = document.querySelector("#details--bubbles")
            theDialog.showModal()
        }
    )

    // Show neal's details when the button is clicked
    document.querySelector("#button--neal").addEventListener(
        "click",
        theClickEvent => {
            const theDialog = document.querySelector("#details--neal")
            theDialog.showModal()
        }
    )

    // Show ocho's details when the button is clicked
    document.querySelector("#button--ocho").addEventListener(
        "click",
        theClickEvent => {
            const theDialog = document.querySelector("#details--ocho")
            theDialog.showModal()
        }
    )

    // Show rosie's details when the button is clicked
    document.querySelector("#button--rosie").addEventListener(
        "click",
        theClickEvent => {
            const theDialog = document.querySelector("#details--rosie")
            theDialog.showModal()
        }
    )

    // Show bitey's details when the button is clicked
    document.querySelector("#button--bitey").addEventListener(
        "click",
        theClickEvent => {
            const theDialog = document.querySelector("#details--bitey")
            theDialog.showModal()
        }
    )

    // Show leo's details when the button is clicked
    document.querySelector("#button--leo").addEventListener(
        "click",
        theClickEvent => {
            const theDialog = document.querySelector("#details--leo")
            theDialog.showModal()
        }
    )
}
export default initializeDetailButtonEvents
