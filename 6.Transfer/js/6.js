$("#phone").on('keyup',function (){
    var phoneInput = $("#phone").val()

    if ( phoneInput === '09448460545'){
        $("#blockBox").addClass('d-none')
        $("#unregisterBox").addClass('d-none')
        $("#invalidBox").addClass('d-none')

        $("#validBox").removeClass('d-none')
        $("#transferAmount").removeClass('d-none')
        $("#accountName").removeClass('d-none')
        $("#otherCashBackBox").removeClass('d-none')
    }else if(phoneInput === '09448460541'){
        $("#validBox").addClass('d-none')
        $("#unregisterBox").addClass('d-none')
        $("#invalidBox").addClass('d-none')
        $("#accountName").addClass('d-none')
        $("#transferAmount").addClass('d-none')
        $("#otherCashBackBox").addClass('d-none')

        $("#blockBox").removeClass('d-none')
    }else{
        $("#validBox").addClass('d-none')
        $("#blockBox").addClass('d-none')
        $("#invalidBox").addClass('d-none')
        $("#accountName").addClass('d-none')
        $("#transferAmount").addClass('d-none')
        $("#otherCashBackBox").addClass('d-none')

        $("#unregisterBox").removeClass('d-none')
    }
    if (phoneInput.length < 11 || phoneInput.length >11){
        $("#validBox").addClass('d-none')
        $("#blockBox").addClass('d-none')
        $("#unregisterBox").addClass('d-none')
        $("#accountName").addClass('d-none')
        $("#transferAmount").addClass('d-none')
        $("#otherCashBackBox").addClass('d-none')

        $("#invalidBox").removeClass('d-none')
    }
})



$("#transferValue").on('keyup',function (){
    var transferValue =$("#transferValue").val()
    if (transferValue.length >= 2){
        $("#submit").removeClass('d-none')
    }else {
        $("#submit").addClass('d-none')
    }
})
