document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".skills-prog li .skills-bar").forEach((bar, i) => {
      setTimeout(() => {
        let width = bar.parentElement.getAttribute("data-percent") + "%";
        bar.querySelector(".bar").style.width = width;
      }, i * 150);
    });
  
    document.querySelectorAll(".skills-soft li svg .cbar").forEach((circle, i) => {
      let r = circle.getAttribute("r");
      let circumference = Math.PI * (r * 2);
      let percent = circle.parentElement.parentElement.getAttribute("data-percent");
      let offset = ((100 - percent) / 100) * circumference;
      
      setTimeout(() => {
        circle.style.strokeDashoffset = offset;
      }, i * 150);
    });
  });
  