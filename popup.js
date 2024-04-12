function setCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}

function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

window.onload = function() {
    if (!getCookie('popupShown')) {
        alert(`Well looky here, why'd you decide to come here? Don't you have better things to do with your life... Anyways welcome I guess. 
Kick your shoes off and stay a while might as well make it worth the visit.`);
        setCookie('popupShown', 'true', 1); // Expires in 1 day
    }
};
