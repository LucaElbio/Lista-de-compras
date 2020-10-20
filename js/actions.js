$( document ).ready(function(){
    
    function crearItem(){
        if($("#valor").val() !== ""){
            var cosas_a_comprar = $("#valor").val();    
            var nuevoItem = $("<li>"+cosas_a_comprar+"</li>");
            $("#list").append(nuevoItem);
            $(nuevoItem).append("$('<img>',{id:'theImg',src:'..img/cruz.png'})")
            $("#valor").val("");
        }
    }

    function eliminarItem(){
        $(this).remove();
    }

    $("#butn").click(crearItem);
    $(".fas .fa-times").click(eliminarItem);
})