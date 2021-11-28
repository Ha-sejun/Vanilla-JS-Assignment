const imgtheme = document.querySelector("img");
const todoLists = document.querySelector("ul");

if(imgtheme.classList.contains("Day")){
    weatherContainer.classList.add("days");
    cityContainer.classList.add("days");
    days.classList.add("days"); 
    clock.classList.add("days");
    accountMassage.classList.add("day");
} else {
    weatherContainer.classList.add("night");
    cityContainer.classList.add("night");
    days.classList.add("night");
    clock.classList.add("night");
    accountMassage.classList.add("night");
}