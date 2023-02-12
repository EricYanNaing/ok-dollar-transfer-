
$("#phone").on('keyup',function (){
    var phoneInput = $("#phone").val()

    if ( phoneInput === '09448460545'){
        $("#blockBox").addClass('d-none')
        $("#unregisterBox").addClass('d-none')
        $("#invalidBox").addClass('d-none')

        $("#validBox").removeClass('d-none')
        $("#accountName").removeClass('d-none')
        $("#otherCashBackBox").removeClass('d-none')
    }else if(phoneInput === '09448460541'){
        $("#validBox").addClass('d-none')
        $("#unregisterBox").addClass('d-none')
        $("#invalidBox").addClass('d-none')
        $("#accountName").addClass('d-none')
        $("#otherCashBackBox").addClass('d-none')

        $("#blockBox").removeClass('d-none')
    }else{
        $("#validBox").addClass('d-none')
        $("#blockBox").addClass('d-none')
        $("#invalidBox").addClass('d-none')
        $("#accountName").addClass('d-none')
        $("#otherCashBackBox").addClass('d-none')

        $("#unregisterBox").removeClass('d-none')
    }
    if (phoneInput.length < 11 || phoneInput.length >11){
        $("#validBox").addClass('d-none')
        $("#blockBox").addClass('d-none')
        $("#unregisterBox").addClass('d-none')
        $("#accountName").addClass('d-none')
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


$("#phone1").on('keyup',function (){
    var phoneInput1 = $("#phone1").val()

    if ( phoneInput1 === '09448460545'){
        $("#blockBox1").addClass('d-none')
        $("#unregisterBox1").addClass('d-none')
        $("#invalidBox1").addClass('d-none')

        $("#validBox1").removeClass('d-none')
        $("#transferAmount1").removeClass('d-none')
        $("#accountName1").removeClass('d-none')
        $("#transferAmount").removeClass('d-none')
    }else if(phoneInput1 === '09448460541'){
        $("#validBox1").addClass('d-none')
        $("#unregisterBox1").addClass('d-none')
        $("#invalidBox1").addClass('d-none')
        $("#accountName1").addClass('d-none')
        $("#transferAmount1").addClass('d-none')
        $("#transferAmount").addClass('d-none')

        $("#blockBox1").removeClass('d-none')
    }else{
        $("#validBox1").addClass('d-none')
        $("#blockBox1").addClass('d-none')
        $("#invalidBox1").addClass('d-none')
        $("#accountName1").addClass('d-none')
        $("#transferAmount1").addClass('d-none')
        $("#transferAmount").addClass('d-none')

        $("#unregisterBox1").removeClass('d-none')
    }
    if (phoneInput1.length < 11 || phoneInput1.length >11){
        $("#validBox1").addClass('d-none')
        $("#blockBox1").addClass('d-none')
        $("#unregisterBox1").addClass('d-none')
        $("#accountName1").addClass('d-none')
        $("#transferAmount1").addClass('d-none')
        $("#transferAmount").addClass('d-none')

        $("#invalidBox1").removeClass('d-none')
    }
})
