// FORM SUBMISSION
const form = document.getElementById("contact-form");
const popup = document.getElementById("form-popup");

if (form && popup) {
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const formData = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: formData,
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        popup.classList.add("show");
        setTimeout(() => popup.classList.remove("show"), 4000);
        form.reset();
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      alert("Network error. Please try again later.");
    }
  });
}


// NAVBAR SCROLL ANIMATION
let lastScrollY = window.scrollY;
const navbar = document.querySelector("nav");

if (navbar) {
  window.addEventListener("scroll", () => {
    if (window.scrollY > lastScrollY) {
      navbar.classList.add("hide");
    } else {
      navbar.classList.remove("hide");
    }
    lastScrollY = window.scrollY;
  });
}
