const links = document.querySelectorAll(".navbar-link");

links.forEach((link) => {
  link.addEventListener("click", () => {
    //all other links normal css
    links.forEach((link) => {
      link.className = "navbar-link";
    });

    // link clicked => change style
    link.classList.add("change");

    //links before and after link clicked => change
    link.previousElementSibling.classList.add("prevElChange");
    link.nextElementSibling.classList.add("nextElChange");
  });
});
