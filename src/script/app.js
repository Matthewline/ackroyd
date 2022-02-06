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
const email = document.querySelector(".form_email");
const button = document.querySelector(".form_button");
let regExp = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

email.addEventListener("input", function () {
  if (email.value.match(regExp)) {
    text.textContent = "Your address email is valid";
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
  } else if (email.value === "" || email.value == null) {
    text.textContent = "";
  } else {
    text.textContent = "Please enter valid email address";
    text.classList.add("text_invalid");
  }
});

// Images API
const image_primary_result = document.querySelector(".image_primary");
const image_1_result = document.querySelector(".image_1");
const image_2_result = document.querySelector(".image_2");
const apiKey =
  "https://api.nasa.gov/planetary/apod?api_key=Dvrc5VermucA3JmvI8kcBfu2mQSDpDcngkEfMV4s&count=3";

fetch(apiKey)
  .then((response) => response.json())
  .then((data) => {
    image_primary_result.innerHTML = `<img src="${data?.[0]?.url}"/>`;
    image_1_result.innerHTML = `<img src="${data?.[1]?.url}"/>`;
    image_2_result.innerHTML = `<img src="${data?.[2]?.url}"/>`;
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
