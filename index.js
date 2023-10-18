const refs = {
  nav: document.querySelector("#showcase-content-1 [data-navigation-showcase]"),
  conten: document.querySelector("#showcase-content-1 [data-main-content]"),
};
refs.nav.addEventListener("click", (e) => {
  const { target } = e;
  if (target.nodeName !== "BUTTON") return;
  const currentBtn = target;
  const prevActiveBtn = refs.nav.querySelector(".popular__active");
  const prevActiveConten = refs.conten.querySelector(".showcase__show");
  if (prevActiveBtn) {
    prevActiveBtn.classList.remove("popular__active");
    prevActiveConten.classList.remove("showcase__show");
  }
  const currentShowcase = currentBtn.dataset.showcase;

  const currentContent = refs.conten.querySelector(
    `[data-content=${currentShowcase}]`
  );

  currentBtn.classList.add("popular__active");
  currentContent.classList.add("showcase__show");
});
