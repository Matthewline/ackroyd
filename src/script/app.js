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

email.addEventListener("input", () => {
  if (email.value.match(regExp)) {
    text.innerHTML = "Your email address in valid";
    text.style.color = "#eee";
    text.style.backgroundColor = "#009933";
    button.addEventListener(
      "click",
      () => {
        text.innerHTML = "Congrats, you're now on our newsletter list";
        document.querySelector(".form_email").value = "";
      },
      { once: true }
    );
  } else if (email.value === "" || email.value == null) {
    text.innerHTML = "";
    text.style.backgroundColor = "";
  } else {
    text.innerHTML = "Please enter valid email address";
    text.style.color = "#eee";
    text.style.backgroundColor = "#c9223a";
  }
});
