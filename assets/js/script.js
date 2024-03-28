$(document).ready(function() {
    $('#changeColor').click(function() {
        var color = $('#colorInput').val();
        $('#shape').css('background-color', color);
    });
});
