$(document).ready(function(){
 
    $('#changeShapeColor').click(function(){
        var selectedShape = $('#shapeSelect').val();
        var selectedColor = $('#colorSelect').val();
        var shapeElement = $('#shape');
 
        shapeElement.css({
            'border-radius': '',
            'width': '',
            'height': '',
            'border-left': '',
            'border-right': '',
            'border-bottom': '',
            'background-color': ''
        });
     
        if(selectedShape === 'circle') {
            shapeElement.css({
                'border-radius': '50%',
                'width': '100px',
                'height': '100px',
                'background-color': selectedColor
            });
        } else if(selectedShape === 'square') {
            shapeElement.css({
                'border-radius': '0',
                'width': '100px',
                'height': '100px',
                'background-color': selectedColor
            });
        } else if(selectedShape === 'triangle') {
            shapeElement.css({
                'width': '0',
                'border-radius': '0',
                'height': '0',
                'border-left': '50px solid transparent',
                'border-right': '50px solid transparent',
                'border-bottom': '100px solid ' + selectedColor,
                'background-color': 'transparent'
            });
        }else if (selectedShape === 'oval') {
            shapeElement.css({
                'border-radius': '50%',
                'width': '120px',
                'height': '80px',
                'background-color': selectedColor
            });}
 
        changeShapeText();
    });
});
 
function changeShapeText() {
    var selectedShape = $('#shapeSelect').val();
    var shapeText = $('#shapeText');

    if (selectedShape === "circle") {
        shapeText.text("circle selected");
    } else if (selectedShape === "square") {
        shapeText.text("square selected");
    } else if (selectedShape === "triangle") {
        shapeText.text("triangle selected");
    }else if (selectedShape === "oval") {
        shapeText.text("oval selected");
    }
}
