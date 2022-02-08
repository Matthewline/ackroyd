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
    button.addEventListener(
      "click",
      function () {
        text.textContent = "Congrats, you're now on our newsletter list";
        document.querySelector(".form_email").value = "";
      },
      { once: true }
    );
  } else if (input.value === "" || input.value == null) {
    text.textContent = "";
  } else {
    text.textContent = "Please enter valid input address";
    text.classList.add("text_invalid");
  }
});

// Images API
const apiKey =
  "https://api.nasa.gov/planetary/apod?api_key=Dvrc5VermucA3JmvI8kcBfu2mQSDpDcngkEfMV4s&count=3";

fetch(apiKey)
  .then((response) => response.json())
  .then((data) => {
    const images = document.querySelector(".images");
    const smaller_images = document.querySelector(".smaller_images");
    for (let i = 1; i < 3; i++) {
      const img = document.createElement("img");
      img.src = data?.[i]?.url;
      img.classList.add("image");
      smaller_images.append(img);
    }
    let img = document.createElement("img");
    img.src = data?.[0]?.url;
    img.classList.add("image_primary");
    images.prepend(img);
  });

// Mobile
const cover_button = document.querySelectorAll(".cover_button");

for (let i = 0; i < cover_button.length; i++) {
  cover_button[i].addEventListener("click", function () {
    document.querySelector(".active_cover_button")
      ? document
          .querySelector(".active_cover_button")
          .classList.remove("active_cover_button")
      : "";
    this.classList.add("active_cover_button");
  });
  cover_button[0].classList.add("active_cover_button");
}
