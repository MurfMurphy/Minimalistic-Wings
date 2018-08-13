$(document).ready(function(){


    $.ajax({
        type: 'GET',
        url: 'http://www.redbullshopus.com/products.json',

        success: function(response){
            var result = response.products
            for(i=0; i < result.length; i++){
            $('#productInfo').append("<div class='productName'>" + result[i].title + "</div>");
            $('#productInfo').append("<div class='photos'>" + "<img src=" + result[i].images[0].src + ">" + "</div>");
            $('#productInfo').append("<div class='blurb'>" + result[i].body_html + "</div>");
            }
        }
    })
})

            // $.each(response.products, function(product) {

            // })