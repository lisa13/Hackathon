function showEl(li,plus,minus){
    $(plus).hide();
    $(minus).css('display','inline-block');
    $(li).hide().slideDown();
    
}
function hideEl(li,plus,minus){
    $(minus).hide();
    $(plus).css('display','inline-block');
    $(li).fadeOut(500);
    
}