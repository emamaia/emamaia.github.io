$(function(){

    $('#btnAnimate').click(function(){
        $('.alert').animate({
            height: '150px',
            width: '500px'
        })   

})

    $("#btnReset").click(function(){
        $(".alert").animate({
            height: '50px',
            width: '300px'
        })
    })

})