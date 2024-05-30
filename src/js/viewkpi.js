const likeBtns = document.querySelectorAll(".kpi-item-right");

likeBtns.forEach(btn => {
    var btnn = btn.querySelector("i");
    btnn.addEventListener("click", function() {
        if (btn.classList.contains("active")) {
            btn.classList.remove("active")
        } else {
            btn.classList.add("active");
        }
    })
})