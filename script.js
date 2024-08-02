var main = document.querySelector(".main");
var crsr = document.querySelector("#cursor");
var imageDiv = document.querySelector(".img-div");

main.addEventListener("mousemove", function (dets) {
  gsap.to(crsr, {
    x: dets.x,
    y: dets.y,
    duration: 0.6,
  });
});

imageDiv.addEventListener("mouseenter", function () {
  crsr.innerHTML = "Lakshya Pandey";
  gsap.to(crsr, {
    scale: 2,
    // backgroundColor: "#ffffff38"
    backgroundColor: "blanchedalmond"
  });
});

imageDiv.addEventListener("mouseleave", function () {
  crsr.innerHTML = "";
  gsap.to(crsr, {
    scale: 1,
    backgroundColor: ""
  });
});