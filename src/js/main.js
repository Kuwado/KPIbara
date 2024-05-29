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

// ----------------------------------------- notice ------------------------------------
const notice = document.querySelector('#notice');
var noticeStt = false;

function showNotice() {
    if (!noticeStt) {
        notice.style.display = "block";
        setTimeout(function() {
            notice.style.top = "110%";
            noticeStt = true;
        }, 10); 
    } else {
        hideNotice();
    }
}

function hideNotice() {
    notice.style.top = "400%";
    setTimeout(function() {
        notice.style.display = "none";
        noticeStt = false;
    }, 300);
}

document.addEventListener('click', function(event) {
    if(noticeStt) {
        const targetElement = event.target; 
        const isClickInsideNotice = notice.contains(targetElement);
        if (targetElement !== document.querySelector('.notice-btn') && !isClickInsideNotice) {
            hideNotice();
        }
    }
});

