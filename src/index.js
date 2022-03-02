console.log("%c HI", "color: firebrick");

const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
let breeds;
console.log(breeds);
// on page load, fetches the images using the url above ⬆️
// parses the response as JSON
// adds image elements to the DOM for each 🤔 image in the array
fetch(imgUrl)
  .then((res) => res.json())
  .then((dogImageData) => appendImages(dogImageData.message));

function appendImages(dogImages) {
  const imgContainer = document.querySelector("div");
  dogImages.forEach((image) => {
    // create an image element
    const img = document.createElement("img");
    // set src attribute
    img.src = image;
    let h2 = document.createElement("h2");
    h2.innerText = "hello world";
    // img.alt = image
    // append img to dom
    // imgContainer.appendChild(img);
    imgContainer.append(img);
  });
}

const breedUrl = "https://dog.ceo/api/breeds/list/all";

// on page load, fetches all the dog breeds using the url above ⬆️
// adds the breeds to the page in the <ul> provided in index.html

fetch(breedUrl)
  .then((res) => res.json())
  .then((breedsData) => {
    breeds = Object.keys(breedsData.message);
    renderBreeds(breeds);
  });

// purpose of renderBreeds is to select the ul, and add each breed to that ul
// select DOM element to render breeds to
const ul = document.querySelector("ul");

function renderBreeds(breeds) {
  console.log(breeds);
  // iterate over array
  for (let breed of breeds) {
    // create li element
    const li = document.createElement("li");
    // update textContent, innerText
    li.textContent = breed;
    // add event listener to li
    li.addEventListener("click", () => {
      //   console.log(event.target);
      //   debugger;
      li.style.color = "red";
    });
    // append li to list
    ul.appendChild(li);
  }
}

// Once all of the breeds are rendered in the <ul>, add JavaScript so that, when the user clicks on any one of the <li>s, the font color of that <li> changes. This can be a color of your choosing.

// Once we are able to load all of the dog breeds onto the page, add JavaScript so that the user can filter breeds that start with a particular letter using a dropdown.

// For example, if the user selects 'a' in the dropdown, only show the breeds with names that start with the letter a. For simplicity, the dropdown only includes the letters a-d. However, we can imagine expanding this to include the entire alphabet.

// select dropdown
const dropdown = document.querySelector("select");

dropdown.addEventListener("change", filterBreeds);

function filterBreeds(event) {
  let letter = event.target.value;
  // we want to filter existing li breeds to only breeds that start with this letter
  // how can we access the breeds
  //   console.log(breeds);
  // filter breeds using letter

  let filteredBreeds = breeds.filter((breed) => {
    return breed[0] === letter;
  });

  console.log(filteredBreeds);
  ul.innerHTML = "";
  renderBreeds(filteredBreeds);
}
