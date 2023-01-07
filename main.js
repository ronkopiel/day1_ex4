function handleClick() {
    console.log('Elements Clicked');
    ContactMe.style.color = 'red';
    PlacesILove.style.color = 'green';
}

function delayHandleClick() {
    setTimeout(handleClick, 3000);
}
function toggleDarkMode() {
        let flag = document.getElementById("DarkMode").value;
        if (flag == 'OFF' ) {
            document.getElementById("DarkMode").value = 'ON';
            document.body.setAttribute('class', 'dark-mode');
            return;
        }
        else {
            document.getElementById("DarkMode").value = 'OFF';
            document.body.setAttribute('class', 'light-mode');
        }
}
const favoriteFoods = [`ramen`,`burger`,`pillaf`,`sabich`];
let listTitle = document.getElementById("favorite-food").innerHTML;
let makeList = listTitle +`<ul>`;
function listFavoriteFoods(foodArray) { 
    for (i = 0; i < foodArray.length; i++) {
        const food = foodArray[i];
        makeList += `<li>${food}</li>`;
    }
    makeList += `</ul>`;
    document.getElementById("favorite-food").innerHTML = makeList;
}
listFavoriteFoods(favoriteFoods);



const aboutMe = [
    {
      description: {
        hobby: `PC Enthusiast`,
        info: `I love owning and messing around with highend PC hardware for the hell of it. `,
      },
      image: "/assets/gpu.jpeg",
    },
    {
      description: {
        hobby: `Animal Handler`,
        info: `From a very young age i was surrounded with many diffrent animals in my home and i fell in love with nature.`,
      },
      image: "/assets/panda1200-1.jpg",
    },
    {
      description: {
        hobby: `Japanese Culture`,
        info: `I love japanese culture, From a young age i loved thier video games and their media and recently i started learning the language and reading classic literature. `,
      },
      image: "/assets/Views_of_Mount_Fuji_from_Ōwakudani_20211202.jpg",
    },
  ];
  
function createImgSection(array) {
    let container ="";
    for (let i = 0; i < array.length; i++) {
        let hobbyElement = "";
        let infoElement = "";
        let imageElement = "";
        hobbyElement = array[i].description.hobby;
        infoElement = array[i].description.info;
        imageElement = array[i].image;
        console.log(hobbyElement,infoElement,imageElement);
        container += `<div class="image-block"><img src=${imageElement}><h1>${hobbyElement}</h1><p>${infoElement}</p></div>`
        document.getElementById("objects").innerHTML = container;
    }
}  
createImgSection(aboutMe);