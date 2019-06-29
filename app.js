$(document).ready(function(){
    $('form').append("<input type='button' id='btnSubmit' value='Submit' disabled='true'>");

    $('input[type="text"]').change(function() {
       $('#btnSubmit').removeAttr('disabled');
    });

   // $('<div id="d1"></div>').insertAfter('form');

    $('<ul></ul>').insertAfter('form');

    $('#btnSubmit').click(function() {
        let $inputText = $(':text').val();
        /* $('#d1').append('<h2>'+ $inputText + '</h2>');
        $('h2').mouseover(function (){
             $(this).css({'background-color':'blue', 'border-radius':'20px'})
        }); */
        $('ul').append('<li>' + $inputText +'</li>');
        $('li').click(function() {
            let rndCl1 = Math.floor(Math.random() * 255);
            let rndCl2 = Math.floor(Math.random() * 255);
            let rndCl3 = Math.floor(Math.random() * 255);
            $(this).css('color','rgb('+ rndCl1+ ','+rndCl2+','+rndCl3+')');
        });
        $('li').dblclick(function() {
            $(this).remove();
        })
    });

    
    
});