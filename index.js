
document.getElementById('generate_btn').addEventListener('click', function(){
    let colorValue = document.getElementById('color_input').value;
    let mode = document.getElementById('color_mode').value;
    let hexValue = colorValue.slice(1);


    fetch(`https://www.thecolorapi.com/scheme?hex=${hexValue}&mode=${mode.toLowerCase()}`)
        .then(res => res.json())
        .then(data => {
            document.getElementById('color_container').innerHTML = '';
            const colorsArr = data.colors;
            const schemeValues = colorsArr.map(color =>{
                let showColor = color.hex.value;
                
                document.getElementById('color_container').innerHTML += `    
                <div id="colors_display" class="colors_display" style="background-color: ${showColor}"><p id="color_tag" class="color_tag" >${showColor}</p></div>`;
        })
})

})
