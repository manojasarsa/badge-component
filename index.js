let btnHideSshow = document.querySelector(".button-hide-color");

let badgeHide = document.querySelector(".button-badge-hide");


btnHideSshow.addEventListener("click", () => {
    if(badgeHide.style.display === "block"){
        badgeHide.style.display = "none";
    }
    else{
        badgeHide.style.display = "block";
    }

})




