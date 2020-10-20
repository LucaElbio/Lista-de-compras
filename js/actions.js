$( document ).ready(function(){
    
    function crearItem(){
        if($("#valor").val() !== ""){
            var cosas_a_comprar = $("#valor").val();    
            var nuevoItem = $("<li>"+cosas_a_comprar+"</li>");
            $("#list").append(nuevoItem);
            var close_button='<button class="btn btn-eliminar"><i class="fa fa-times"></i></button>'
            
            $(nuevoItem).append(close_button);
            $("#valor").val("");
        }
    }

    function eliminarItem(){
        console.log("borrar cosa")
        $(this).remove();
    }

    $("#butn").click(crearItem);
    $('.btn-eliminar').click(eliminarItem);
})