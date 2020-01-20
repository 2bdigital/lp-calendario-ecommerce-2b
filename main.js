    setInterval(function(){  

        if($("#ajax-loader-calendario-2020-e-commerce-28f49c29cdd788ef4f3d").is(':visible')){
        $("body").addClass("open_modal");        
       if (innerWidth>999) {
        window.open(
            'https://www.agencia2bdigital.com/calendario2b/2b_calendario-2020.pdf',
            'download_window' 
          );
          $("input").val("");
          $("#cf_submit-calendario-2020-e-commerce-28f49c29cdd788ef4f3d").val("baixar");
       }else {
        window.location.href='https://www.agencia2bdigital.com/calendario2b/2b_calendario-2020.pdf','download_window';
       }
        }
        }, 200);

        /* close */
        $("#close_modal").click(function(){
            $("body").removeClass("open_modal");
        });

        $(window).load(function(){
            $("input").val("");
            $("#cf_submit-calendario-2020-e-commerce-28f49c29cdd788ef4f3d").val("baixar");
        });
        