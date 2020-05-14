const openLeftDrawerBtn = document.querySelector(".l-open");
const closeLeftDrawerBtn = document.querySelector(".l-close");
const leftDrawer = document.getElementById("l-drawer")


openLeftDrawerBtn.addEventListener("click", () => {
    leftDrawer.style.left = "0%"
});

closeLeftDrawerBtn.addEventListener("click", () => {
    leftDrawer.style.left = "-250px"
});


// Right Side Drawer
const openRightDrawerBtn = document.querySelector(".r-open");
const closeRightDrawerBtn = document.querySelector(".r-close");
const rightDrawer = document.getElementById("r-drawer")


openRightDrawerBtn.addEventListener("click", () => {
    rightDrawer.style.right = "0%"
});

closeRightDrawerBtn.addEventListener("click", () => {
    rightDrawer.style.right = "-250px"
});
