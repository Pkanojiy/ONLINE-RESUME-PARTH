document.addEventListener("DOMContentLoaded", function () {
    // Animate programming skill bars
    document.querySelectorAll(".skills-prog li .skills-bar").forEach((bar, i) => {
      setTimeout(() => {
        let width = bar.parentElement.getAttribute("data-percent") + "%";
        bar.querySelector(".bar").style.width = width;
      }, i * 150);
    });
  
    // Animate software skills (circular progress)
    document.querySelectorAll(".skills-soft li svg .cbar").forEach((circle, i) => {
      let r = circle.getAttribute("r");
      let circumference = Math.PI * (r * 2);
      let percent = circle.parentElement.parentElement.getAttribute("data-percent");
      let offset = ((100 - percent) / 100) * circumference;
  
      setTimeout(() => {
        circle.style.strokeDashoffset = offset;
      }, i * 150);
    });
  
    // Social media buttons animation
    const socialButtons = document.querySelectorAll(".social-btn");
    
    socialButtons.forEach(button => {
      button.addEventListener("mouseover", function () {
        this.style.transform = "scale(1.2)";
        this.style.boxShadow = "0 5px 15px rgba(0,0,0,0.3)";
      });
  
      button.addEventListener("mouseout", function () {
        this.style.transform = "scale(1)";
        this.style.boxShadow = "none";
      });
    });
  
  });
  