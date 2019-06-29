$(document).ready(function(){
    $('form').append("<input type='button' id='btnSubmit' value='Submit' disabled='true'>");

    $('input[type="text"]').change(function() {
       $('#btnSubmit').removeAttr('disabled');
    });

    $('<div id="d1"></div>').insertAfter('form').height(50);

    $('#btnSubmit').click(function() {
        let $inputText = $(':text').val();
        $('#d1').append('<h2>'+ $inputText + '</h2>');
        $('h2').mouseover(function (){
             $(this).css({'background-color':'blue', 'border-radius':'20px'})
        });
    });

    
    
});