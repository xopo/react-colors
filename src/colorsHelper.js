
/**
 *  this is how a pallet looks like 
*/ // {
//     paletteName: "Material UI Colors",
    //     id: "material-ui-colors",
    //     emoji: "🎨",
    //     colors: [
    //       { name: "red", color: "#F44336" },
    //       { name: "pink", color: "#E91E63" },
    //       { name: "purple", color: "#9C27B0" },
    //       { name: "deeppurple", color: "#673AB7" },
    //       { name: "indigo", color: "#3F51B5" },
    //       { name: "blue", color: "#2196F3" },
    //       { name: "lightblue", color: "#03A9F4" },
    //       { name: "cyan", color: "#00BCD4" },
    //       { name: "teal", color: "#009688" },
    //       { name: "green", color: "#4CAF50" },
    //       { name: "lightgreen", color: "#8BC34A" },
    //       { name: "lime", color: "#CDDC39" },
    //       { name: "yellow", color: "#FFEB3B" },
    //       { name: "amber", color: "#FFC107" },
    //       { name: "orange", color: "#FF9800" },
    //       { name: "deeporange", color: "#FF5722" },
    //       { name: "brown", color: "#795548" },
    //       { name: "grey", color: "#9E9E9E" },
    //       { name: "bluegrey", color: "#607D8B" }
    //     ]
//   }

import chroma from 'chroma-js';
const levels = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];

export function generatePalette(starterPalette) {
    const { id, paletteName, emoji } = starterPalette;
    let newPalette = {
        paletteName,
        id, 
        emoji,
        colors: {}
    };
    for(let color of starterPalette.colors) {
        // color woud be dark -> light => we need to reverse it
        let scale = generateScale(color.color, 10).reverse(); 
        for (let i in scale) {  // get index to be use to get level
            const level = levels[i];
            const newColor = {
                name: `${color.name} ${level}`,
                id: color.name.toLowerCase().replace(/ /, '/'),
                hex: scale[i],
                rgb: chroma(scale[i]).css(),
                rgba: chroma(scale[i])
                        .css()
                        .replace('rgb', 'rgba')
                        .replace(')', ', 1.0)')
            }
            if (!newPalette.colors[level]) newPalette.colors[level] = [];
            newPalette.colors[level].push(newColor);
        }
    }
    
    return newPalette;
}

// create a range of colors from darkenColor - color - white
function getRange(hexColor) {
    const end = '#fff';
    return [
        chroma(hexColor)
        .darken(1.4)
        .hex(),
        hexColor,
        end
    ]
}

// generate a range of colors
function generateScale(hexColor, numberOfColors) {
    return chroma.scale(getRange(hexColor)).mode('lab').colors(numberOfColors);
}

