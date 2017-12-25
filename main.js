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
    $('.students').find('li').remove();
    $('.students').append('<li>' + studentName + '</li>');
};
$('#button2').click(clickedStudent);
