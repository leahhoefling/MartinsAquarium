/**
 *   FishListComponent which renders individual fish objects as HTML
 */
import { useFish } from "./FishDataProvider.js"
import FishComponent from "./Fish.js"

const FishListComponent = () => {

    const contentElement = document.querySelector(".fishies")
    const fishes = useFish()

    // Generate all of the HTML for all of the fish
    let allFishHTML = ""
    for (const fish of fishes) {
        let fishHTML = FishComponent(fish)
        allFishHTML += fishHTML
    }

    // Add a section, and all of the fish to the DOM
    contentElement.innerHTML += `
        <section class= "fish_section">
        ${allFishHTML}
        </section>
    `
}

export default FishListComponent