window.onload = function() {
    // Check if the pop-up has already been shown
    if (!localStorage.getItem('popupShown')) {
        alert(`Well looky here, why'd you decide to come here? Don't you have better things to do with your life... Anyways welcome I guess. 
Kick your shoes off and stay a while might as well make it worth the visit.`);

        // Set 'popupShown' in localStorage
        localStorage.setItem('popupShown', 'true');
    }
};
