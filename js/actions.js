$( document ).ready(function(){
    
    function crearItem(){
        if($("#valor").val() !== ""){
            var cosas_a_comprar = $("#valor").val();    
            var nuevoItem = $("<li>"+cosas_a_comprar+"</li>");
            $("#list").append(nuevoItem);
            var image = new Image();
            var src = "img/cruz.png";
            image.src = src;
            $(nuevoItem).append(image);
            $("#valor").val("");
        }
    }

    function eliminarItem(){
        $(nuevoItem).remove();
    }

    $("#butn").click(crearItem);
    $(image).click(eliminarItem);
})