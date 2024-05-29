// --------------------------------- avatar menu --------------------------------------
const avatarMenu = document.querySelector('#avatar-menu');
var avtMenuStt = false;

function showAvatarMenu() {
    if (!avtMenuStt) {
        avatarMenu.style.display = "block";
        setTimeout(function() {
            avatarMenu.style.right = "1%";
            avtMenuStt = true;
        }, 10); 
    } else {
        hideAvatarMenu();
    }
}

function hideAvatarMenu() {
    avatarMenu.style.right = "-20%";
    setTimeout(function() {
        avatarMenu.style.display = "none";
        avtMenuStt = false;
    }, 300);
}

document.addEventListener('click', function(event) {
    if(avtMenuStt) {
        const targetElement = event.target; 
        const isClickInsideAvatarMenu = avatarMenu.contains(targetElement);
        if (targetElement !== document.querySelector('#avatar-button') && !isClickInsideAvatarMenu) {
            hideAvatarMenu();
        }
    }
});

// ----------------------------------------- sidebar -----------------------------------
const sidebar = document.querySelector('#sidebar');
const iconSidebar = document.querySelector('.bar-btn i');
var sbStt = false

function showSidebar() {
    if (!sbStt) {
        sidebar.style.display = "flex";
        setTimeout(function() {
            sidebar.style.right = "0%";
        }, 10);
        sbStt = true;
        iconSidebar.classList.remove("fa-bars");
        iconSidebar.classList.add("fa-xmark");
    } else {
        sidebar.style.right = "-70%";
        setTimeout(function() {
            sidebar.style.display = "none";
        }, 300);
        sbStt = false;
        iconSidebar.classList.remove("fa-xmark");
        iconSidebar.classList.add("fa-bars");
    }

}

// kpi 
const kpiMenu = document.querySelector('.sidebar-kpi-list');
var kpiStt = false

function showKpi(){
    if (!kpiStt) {
        kpiMenu.style.display = "block";
        kpiStt = true;
    } else {
        kpiMenu.style.display = "none";
        kpiStt = false;
    }
}
