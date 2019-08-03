$('.content').hide();
$('.content').delay(1000).slideToggle();
$('.navbar').hide();
$('.navbar').delay(1000).slideToggle();
$('.navbar-brand').hide();
$('.navbar-brand').delay(2000).slideToggle();
$('.myname').hide();
$('.myname').delay(2200).fadeToggle();
$('.title').hide();
$('.title').delay(2600).fadeToggle();


document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, options);
});

// Initialize collapsible (uncomment the lines below if you use the dropdown variation)
// var collapsibleElem = document.querySelector('.collapsible');
// var collapsibleInstance = M.Collapsible.init(collapsibleElem, options);

// Or with jQuery

$(document).ready(function(){
    $('.sidenav').sidenav();
});
