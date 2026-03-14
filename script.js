// Smooth scroll with null check
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if(target) {  // Only scroll if element exists
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Navbar shadow
window.addEventListener("scroll", function(){
  const nav = document.querySelector(".navbar");
  nav.style.boxShadow = window.scrollY > 50 
    ? "0 8px 25px rgba(0,0,0,0.5)" 
    : "0 0 0 rgba(0,0,0,0)";
});