$(function(){

$("#fo").validate({   
        rules:{
            email:{
                required:true,
                email:true   
            },
            pass:"required",
            
        },
        messages:{
            email:{
                required:"Please Enter an Email Adress."

            }
        }


    });




});  