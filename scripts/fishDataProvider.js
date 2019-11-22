const fishCollection = [
    {
        name: "Bart",
        food: ["algae", "crustaceans"],
        location: "Hawaii",
        length: 2,
        species: "Betta Fish",
        image: "https://www.peta.org/wp-content/uploads/2019/08/iStock-1160758684_NONTANUN-CHAIPRAKON-1-602x301.jpg"
    },
    {
        name: "Tina",
        food: ["algae", "plankton"],
        location: "Morocco",
        length: 200,
        species: "Great White Shark",
        image: "https://news.harvard.edu/wp-content/uploads/2019/04/iStock-515813368.jpg?w=1600&h=900&crop=1"
    },
    {
        name: "Bubbles",
        food: ["coral", "plankton"],
        location: "Djibouti",
        length: 1420,
        species: "Humpback Whale",
        image: "https://static.independent.co.uk/s3fs-public/thumbnails/image/2019/10/03/13/istock-958303054.jpg?w968h681"
    },
    {
        name: "Bitey",
        food: ["humans", "snakes"],
        location: "Amazon",
        length: 10,
        species: "Piranha",
        image: "https://ichef.bbci.co.uk/news/660/cpsprodpb/A277/production/_103919514_gettyimages-92121157.jpg"
    },
    {
        name: "Big Boi",
        food: ["plankton", "sand"],
        location: "Cape Town",
        length: 4,
        species: "puffer fish",
        image: "https://pbs.twimg.com/media/C_B4y3JXgAE4sui.jpg:large"

    },
    {
        name: "Grandma Dot",
        food: ["minnows", "seaweed"],
        location: "Artic",
        length: 478,
        species: "Greenland Shark",
        image: "https://www.captain-planet.net/uploads/2018/10/d0a4004f21e7a47d7bf18d257bce1ff6_800_420.jpg"
    }
]

export const useFish = () => {
    return fishCollection
}

//immutability: our core, raw data should be private and hidden and should not be changed by other modules
//this is why we are exporting this FUNCTION (useFish) instead of just the array