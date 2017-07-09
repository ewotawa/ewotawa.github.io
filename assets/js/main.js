$(document).ready(function(){
    adjustTop();

    $(window).resize(function(){
        adjustTop();
    });

});


/* Function to keep nav bar at top of window */
function adjustTop() {
        var height = $('.main-nav').height();
        $('.main-wrapper').css({'top' : height + 'px'});
}    

/* Call panelToggle() to hide content on page load */
panelToggle('myPanelBody'); 

/* on click, toggle panel body content visible or hidden */
function panelToggle() {
    var x = document.getElementById('myPanelBody');
    if (x.style.display === 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }
}