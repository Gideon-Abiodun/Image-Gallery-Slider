const gallery = document.querySelector(".gallery");
const backBtn = document.getElementById("backBtn");
const nextBtn = document.getElementById("nextBtn");

gallery.addEventListener("wheel", (event) =>{
    event.preventDefault();
    gallery.scrollLeft += event.deltaY;
    gallery.style.scrollBehavior = "auto";
});

backBtn.addEventListener("click", () =>{
    gallery.style.scrollBehavior = "smooth";
    gallery.scrollLeft += 900;
});

nextBtn.addEventListener("click", () =>{
    gallery.style.scrollBehavior = "smooth";
    gallery.scrollLeft -= 900;
});