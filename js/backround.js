const themes = ["Monterey", "Big Sur", "Mojave"]; //Theme Array

const chosenTheme = themes[Math.floor(Math.random()*themes.length)]; //Select Theme

const images = [`${chosenTheme}_Day.jpg`, `${chosenTheme}_Night.jpg`]; //Image Array

const chosenValue = Math.floor(Math.random()*images.length);

const chosenImage = images[chosenValue]; //테마 랜덤하게 선택

const bgImage = document.createElement("img"); //img태그

bgImage.src = `img/${chosenTheme}/${chosenImage}`; //이미지 설정

document.body.appendChild(bgImage); //html에 태그 추가

const img = document.querySelector("img");

if(chosenValue === 0){
    img.className="Day";
} else {
    img.className="Night";
}



