$(document).ready(function(){
    $("#btnsubmit").click(function (){
        var userName=$("#username").val();
        var password=$("#password").val();

        auth(userName,password);
    })


function auth(username,password)
{
    $.ajax
    ({
        type: "GET",
        url: "http://localhost:3000/Users",
        dataType: 'json',
        async: false,
        data: {username: username,password: password} ,
        success: function(data)
        {
            

            console.log(data);
        }
    })
}

})