
(function ($) {
    "use strict";


    /*==================================================================
    [ Focus Contact2 ]*/
    $('.input2').each(function(){
        $(this).on('blur', function(){
            if($(this).val().trim() != "") {
                $(this).addClass('has-val');
            }
            else {
                $(this).removeClass('has-val');
            }
        })
    })



    /*==================================================================
    [ Validate ]*/
    var name = $('.validate-input input[name="name"]');
    var surname = $('.validate-input input[name="surname"]');
    var patronomic = $('.validate-input input[name="patronomic"]');
    var phone = $('.validate-input input[name="phone"]');
    var name_parent = $('.validate-input input[name="name_parent"]');
    var surname_parent = $('.validate-input input[name="surname_parent"]');
    var patronomic_parent = $('.validate-input input[name="patronomic_parent"]');
    var phone_parent = $('.validate-input input[name="phone_parent"]');

    $(document).ready(function(){
      $(phone).mask('0 (000) 000-00-00');
      $(phone_parent).mask("0 (000) 000-00-00");
    })

    $('.validate-form').on('submit',function(){
        var check = true;

        if($(name).val().trim() == ''){ showValidate(name); check=false; }
        if($(surname).val().trim() == ''){ showValidate(surname); check=false; }
        if($(patronomic).val().trim() == ''){ showValidate(patronomic); check=false; }
        if($(phone).val().trim() == ''){ showValidate(phone); check=false; }
        if($(name_parent).val().trim() == ''){ showValidate(name_parent); check=false; }
        if($(surname_parent).val().trim() == ''){ showValidate(surname_parent); check=false; }
        if($(patronomic_parent).val().trim() == ''){ showValidate(patronomic_parent); check=false; }
        if($(phone_parent).val().trim() == ''){ showValidate(phone_parent); check=false; }

        return check;
    });


    $('.validate-form .input2').each(function(){
        $(this).focus(function(){
           hideValidate(this);
       });
    });

    function showValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).addClass('alert-validate');
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).removeClass('alert-validate');
    }



})(jQuery);
