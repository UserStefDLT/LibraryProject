let nColors = 10;
// let nColors = 36;
let color = [];
function generate_colors(numberOfColors) {
    let colorStep = 360/numberOfColors;
    for (let i = 1; i< numberOfColors+1; i++){
        let nextColor = colorStep * i
        color.push(nextColor);
    };
}
generate_colors(nColors);

function addColors(colorList){
    let colorSample = document.getElementById('color-sample');
    colorList.forEach(c => {
        let newColor = document.createElement('div');
        newColor.classList.add('color-card');
        // newColor.innerHTML = `hue: ${c}`;
        // newColor.innerHTML = `<div class="color-box" style="background-color: hsla(${c}, 50%, 15%, 100%); 
        // border: 10px solid hsla(${c}, 50%, 50%, 100%); color: hsla(${c}, 50%, 50%, 100%);">hue: ${c}</div>`;
        // newColor.innerHTML = `<div class="color-box" style="background-color: hsla(${c}, 50%, 15%, 100%); 
        // border: 10px solid hsla(${c}, 50%, 50%, 100%); color: hsla(${c}, 50%, 50%, 100%);">${c}</div>`;
        newColor.innerHTML = `
    <div class="column">
        <div class="color-text" style="color: hsla(${c}, 50%, 50%, 100%);">h: ${c}</div>
        <div class="color-box" style="background-color: hsla(${c}, 50%, 50%, 100%);"></div>
    </div>`;
        colorSample.appendChild(newColor);
    });
}
addColors(color);

// // let colorsToCompare = [15, 18, 20, 126, 120, 360, 225, 230, 234, 54, 60, 270, 290];
// let colorsToCompare = [20, 126, 360, 230, 234, 54, 60, 270, 290];
// addColors(colorsToCompare);

// let colorsToCompare2 = [20, 126, 360, 230, 60, 270];
// let colorsToCompare3 = [20, 126, 360, 230, 60, 290];

// let colorsToCompare4 = [20, 126, 360, 234, 54, 270];
// let colorsToCompare5 = [20, 126, 360, 234, 54, 290];

// let colorsToCompare6 = [20, 126, 360, 234, 60, 270];
// let colorsToCompare7 = [20, 126, 360, 234, 60, 290];

// addColors(colorsToCompare2);
// addColors(colorsToCompare3);
// addColors(colorsToCompare4);
// addColors(colorsToCompare5);
// addColors(colorsToCompare6);
// addColors(colorsToCompare7);