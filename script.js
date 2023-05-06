let boxContent = document.querySelectorAll(".box_content");
let content = document.querySelectorAll("p");
boxContent.forEach((element) => {
  element.addEventListener("click", () => {
    boxContent.forEach((e) => {
      e.querySelector("p").style.display = "none";
      e.querySelector("h2").style.fontWeight = "400";
      e.querySelector("h2").style.color = "#1E1F36";
      e.querySelector(".arrow").style.transform = "rotate(0deg)";
    });
    element.querySelector("h2").style.fontWeight = "700";
    element.querySelector("p").style.display = "block";
    element.querySelector(".arrow").style.transform = "rotate(180deg)";
  });
});
