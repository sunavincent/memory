
$(document).ready(function(){
    $('#itemImage').change(function(){
        var src = $(this).find('option:selected').attr('data-img');
        $('img#changeImage').attr('src',src);
    });


const user = JSON.parse(localStorage.getItem('user'));

if(user){
    //fill the profile input area 
    $('#username').val(user.username);
    $('#email').val(user.email);
} else {
    // no data 
    window.location.href='login.html'
}














})
