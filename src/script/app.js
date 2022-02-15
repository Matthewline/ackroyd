// Hidden navbar
let lastKnownScrollPosition = 0;

document.addEventListener("scroll", function () {
  if (window.scrollY > lastKnownScrollPosition) {
    document.querySelector(".nav").classList.add("nav_hidden");
  } else {
    document.querySelector(".nav").classList.remove("nav_hidden");
  }
  lastKnownScrollPosition = window.scrollY;
});

// Newsletter
const text = document.querySelector(".text");
const input = document.querySelector(".form_email");
const button = document.querySelector(".form_button");
let regExp = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

input.addEventListener("input", function () {
  if (input.value.match(regExp)) {
    text.textContent = "Your address input is valid";
    text.classList.add("text_valid");
    text.classList.remove("text_invalid");
  } else if (input.value === "" || input.value == null) {
    text.textContent = "";
  } else {
    text.textContent = "Please enter valid input address";
    text.classList.add("text_invalid");
  }
});
button.addEventListener("click", function () {
  if (input.value.match(regExp)) {
    text.textContent = "Congrats, you're now on our newsletter list";
    document.querySelector(".form_email").value = "";
  }
});

// Images API
const images = document.querySelector(".images");
const smaller_images = document.querySelector(".smaller_images");
let img = document.createElement("img");
const apiKey =
  "https://api.nasa.gov/planetary/apod?api_key=Dvrc5VermucA3JmvI8kcBfu2mQSDpDcngkEfMV4s&count=3";

fetch(apiKey)
  .then((response) => response.json())
  .then((data) => {
    for (let i = 1; i < 3; i++) {
      const img = document.createElement("img");
      img.src = data?.[i]?.url;
      img.classList.add("image");
      smaller_images.append(img);
    }
    img.src = data?.[0]?.url;
    img.classList.add("image_primary");
    img.classList.add("active_image");
    images.prepend(img);
  });

const indicators = document.querySelectorAll(".cover_button");
for (let indicator of indicators) {
  indicator.addEventListener("click", () => {
    const images = document.querySelectorAll(".images img");
    const activeImage = document.querySelector(".active_image");
    const associatedImage = images[indicator.dataset.imageIndex];
    if (associatedImage) {
      associatedImage.classList.add("active_image");
      activeImage?.classList.remove("active_image");
    }
  });
}
