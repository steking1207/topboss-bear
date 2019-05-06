$('input').focus( function() {

    var $input = $(this);
    //$input.css('background', 'yellow');

    var scroll = $input.offset();
    //$input.closest('#viewport').animate({
    //  scrollTop: $input.offset().top
    //}, 'slow');
});


/***** using plain JS *****/

var viewport = document.getElementById('viewport');
var allInputs = document.getElementsByTagName('input');
for( var i=0; i<allInputs.length; i++) {

    var item = allInputs[i];
//    console.log('set focus event handler on', item)
    item.onfocus = function() {
//        this.style.background = "yellow";
        item.scrollIntoView();
    }
};
