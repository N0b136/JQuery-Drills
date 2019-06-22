$(document).ready(function(){
    $('body').prepend("<input type='submit' id='btnSubmit' value='Submit'>");
    $('#btnSubmit').click(function() {
        alert('The button was clicked.')
    });
});