document.querySelectorAll(".service-text").forEach((serviceText, index) => {
  const littleTitle = document.querySelectorAll(".little-title")[index];

  serviceText.addEventListener("mouseover", function () {
    littleTitle.classList.add("title-service-add");
  });

  serviceText.addEventListener("mouseout", function () {
    littleTitle.classList.remove("title-service-add");
  });
});
