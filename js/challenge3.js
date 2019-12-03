$(document).ready(function(){
    $('form').submit(function(onsubmit){
        var fruit = $('input[name = "fruit"]');
        var year = $('input[name = "standing"]');
        if((fruit.is("checked")) && (year.is("checked"))){
            return true;
        }
        alert("Please pick your favorite fruit and year");
        return false;
    })
})



// ch3form.onsubmit = function() {
//     var fruit = document.querySelectorAll('input[name="fruit"]')
//     for (let i = 0; i < fruit.length;i++){
//         if (fruit[i].checked)
//             return true;
//     }
//     alert("You must pick a fruit!")
//     return false;

    // Advanced Answer
    // if(document.querySelector('input[name="fruit"]:checked'))
    //     return true;
    
    // alert("You must pick a fruit!")
    // return false;
  