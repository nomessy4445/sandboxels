elements.exotic_dna = {
    color: "#8e44ad",
    behavior: behaviors.POWDER,
    category: "life",
    state: "solid",
    desc: "Strange and unstable DNA structure, reacts with egg yolk to create life.",
};

elements.homunculus = {
    color: ["#b5651d", "#a29bfe", "#00cec9", "#fab1a0", "#ffeaa7"].sort(() => 0.5 - Math.random()).slice(0,1),
    behavior: behaviors.CRAWLER,
    category: "life",
    state: "solid",
    density: 1200,
    tempHigh: 120,
    stateHigh: "ash",
    burn: 20,
    burnTime: 100,
    burnInto: "ash",
    reactions: {
        "fire": { elem1: "ash", elem2: null }
    },
    tick: function(pixel) {
        // Random color every few ticks to simulate procedural appearance
        if (Math.random() < 0.01) {
            pixel.color = ["#b5651d", "#a29bfe", "#00cec9", "#fab1a0", "#ffeaa7"][Math.floor(Math.random()*5)];
        }
    }
};

elements.exotic_dna.reactions = {
    "egg_yolk": {
        elem1: null,
        elem2: "homunculus",
        func: function(pixel1, pixel2) {
            // Give homunculus a unique random color on creation
            if (pixel2 && pixelMap[pixel2.x][pixel2.y]) {
                const hom = pixelMap[pixel2.x][pixel2.y];
                hom.color = "#"+Math.floor(Math.random()*16777215).toString(16).padStart(6, "0");
            }
        }
    }
};
