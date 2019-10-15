// $(function(){
//     $('#button').click(function(){
//         $('.card1').toggle(2000);
//         $('.card2').toggle(4000);
//         $('.card3').toggle(6000);
//     })

// })


$(function(){
    $('#button').click(function(){
        $('.card:eq(0)').toggle(2000);
        $('.card:eq(1)').toggle(4000);
        $('.card:eq(2)').toggle(6000);
    })

})