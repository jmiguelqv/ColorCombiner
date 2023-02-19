const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById('btn');
btn.addEventListener('click',()=>{
    const colorConfig =[];
    for(let i=0;i<6;i++){
        const randomNumber = getRandomNumber();
        colorConfig[i] = hex[randomNumber];
    } 
    const redColor = `#${colorConfig[0]}${colorConfig[1]}0000`;
    const greenColor = `#00${colorConfig[2]}${colorConfig[3]}00`; 
    const blueColor = `#0000${colorConfig[4]}${colorConfig[5]}`;
    const hexColor = `#${colorConfig[0]}${colorConfig[1]}${colorConfig[2]}${colorConfig[3]}${colorConfig[4]}${colorConfig[5]}`
    document.getElementById('colors').appendChild(createColorBox(redColor,"block"));
    document.getElementById('colors').appendChild(createColorBox(greenColor,"block"));
    document.getElementById('colors').appendChild(createColorBox(blueColor,"block"));
    document.getElementById('hexColor').appendChild(createColorBox(hexColor,"block bigger"));

});

const createColorBox = (color,className) => {
    const colorBox = document.createElement("div");
    colorBox.className = className;
    colorBox.style.background = color;
    return colorBox;
}
const getRandomNumber = () => Math.floor(Math.random()*hex.length);

