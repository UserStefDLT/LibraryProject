let nColors = 10;
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