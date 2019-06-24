$(document).ready(function(){
    $('form').append("<input type='submit' id='btnSubmit' value='Submit' disabled='true'>");

    $('input[type="text"]').change(function() {
       $('#btnSubmit').removeAttr('disabled');
    });

    $('body').append('<div id="d"></div>');

    $('#btnSubmit').click(function() {
        let $inputText = $(':text').text();
       
    });
    
});