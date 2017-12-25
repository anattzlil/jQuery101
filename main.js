
// change the colors according to the text.
$('h1').css('color', 'blue');
$('.red-div').css('color', 'red');
$('li:first-child').css('color', 'green');
$('li:nth-child(2)').css('color', 'pink');
$('#brown-div').css('color', 'brown');
var element = $('h1');
console.log(element);

//alert the value of the input when the user clicks the button.
var input = $('#my-input1');
var clicked = function() {
    alert(input.val());
};
$('#button1').click(clicked);

//add a click handler that captures the value of the input.
//After that, create a new li and append it to the list of .students.
var clickedStudent = function () {
    var studentName = $('#my-input2').val();
    $('.students').append('<li>' + studentName + '</li>');
};
$('#button2').click(clickedStudent);

// var clickName = function() {
//     $('.students').find('li').remove();
// }
// $('li').on('click', clickName);

$(document).on('click', '.students li', function () {
    this.remove();
})
