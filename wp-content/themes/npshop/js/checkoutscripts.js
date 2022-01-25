//update order total price on updated_checkout event
(function($) {
    $(document).ready(function(){
        /*updated_checkout event*/
        $(document.body).on('updated_checkout', function(){
            /*Make an AJAX call on updated_checkout event*/
            $.ajax({
                type:       'POST',
                url:        custom_values.ajaxurl,
                data:       {action:'update_cart_total_price'},
                success:    function( result ) {
                    console.info(result);
                    if(result.success){
                        $("#cart-total-price").html(result.cartTotal);
                    }
                    else{
                        $("#cart-total-price").html('');
                    }
                }
            });

            $.ajax({
                type:       'POST',
                url:        custom_values.ajaxurl,
                data:       {action:'update_share_cart_link'},
                success:    function( result ) {
                    console.info(result);
                    if(result.success){
                        $(".share-cart").html(result.shareCartlink);
                    }
                    else{
                        $(".share-cart").html('');
                    }
                }
            });
            
        });
    });
})(jQuery);