$('.ask').click(function(event){
    event.preventDefault();
    $('.ask').removeClass('active')
    $('.answer').slideUp(500)
    $(this).toggleClass('active').next().stop(true).slideToggle(500)
})
function typing(element){
    let abdullo = '',
    i = 0,
    qwert = element.html();
    let asdf = setInterval(() => {
        abdullo += qwert[i]
        i++
        element.html(abdullo)
        if(qwert.length - 1 < i){
            clearInterval(asdf)
        }
    }, 90);
}
$('.read-more').click(function() {
    $('.text-hidden').slideToggle('hidden');
    if ($('.read-more').text() == "Read less") {
        $(this).text("Read less")
    } else {
        $(this).text("Read more")
    }
  });


typing($('h1'))
$('button[data-filter]').click(function(){
    let att = $(this).attr('data-filter')
    if(att == 'primary'){
        $('.js-filter-card').not(`[data-filter=${att}]`).slideUp(500)
    }
     else if(att == 'success'){
        $('.js-filter-card').not(`[data-filter=${att}]`).slideUp(500)
    }
    else if(att == 'danger'){
        $('.js-filter-card').not(`[data-filter=${att}]`).slideUp(500)
    }else{
        $('.js-filter-card').slideDown(500)

    }
    $(`.js-filter-card[data-filter]=${att}`).slideDown(500)
})
$('.js-modal-show').click(function(e){
    $('.modal').fadeIn(500)
    e.preventDefault();
})
$('button.close').click(function(){
    $('.modal').fadeOut(500)
})
$('.modal').click(function(event){
    if(event.target === event.currentTarget){

        $('.modal').fadeOut(500)
    }

})