import "./style.css";

const COLOR_PALETTE = {
  "#ef3e36": "Vermilion",
  "#17bebb": "Verdigris",
  "#2e282a": "Raisin Black",
  "#372719": "Bistre",
  "#fad8d6": "Misty Rose",
};

const addOptionsToColorPicker = () => {
  const colorPickerSelect = document.querySelector("#color-picker");

  Object.keys(COLOR_PALETTE).forEach((color) => {
    const option = document.createElement("option");
    option.value = color;
    option.innerText = COLOR_PALETTE[color];

    colorPickerSelect.append(option);
  })
}

const addEventListenerToColorPicker = () => {
  const colorPickerSelect = document.querySelector("#color-picker");
  const colorName = document.querySelector("#color-name");
  colorPickerSelect.addEventListener("change", (event) => {

    const newColor = event.target.value; 
    //Almacenamos el código de color

    document.body.style.backgroundColor = newColor;
    //Le aplicamos el background color con el código de color seleccionado

    const colorNameText = `${COLOR_PALETTE[newColor]} | ${newColor}` 
    colorName.innerText = COLOR_PALETTE[newColor] ? colorNameText : "-";
    
  });
};

addOptionsToColorPicker();
addEventListenerToColorPicker();
