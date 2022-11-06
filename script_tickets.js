function calcular() {
    
    var cantidad = Number(document.getElementById("cantidad_tickets").value);
    var categoria = Number(document.getElementById("categoria").value);
    var descuento = 0;
    var precio_ticket = 200;
        
    if(cantidad > 0) {
        switch(categoria) {
            case 1:
                descuento = 0.80; 
                precio_ticket -= descuento * precio_ticket; 
                break;
    
            case 2:
                descuento = 0.50;
                precio_ticket -= descuento * precio_ticket;    
                break;
            
            case 3:
                descuento = 0.15; 
                precio_ticket -= descuento * precio_ticket;    
                break;   
        }

        var total = precio_ticket * cantidad;
        document.getElementById("container-resume").innerHTML = "Total a pagar: " + total + "$";  
       
    } else {
        alert("La cantidad ingresada es incorrecta, cantidad minima de compra: 1 ");        
    }     
}

function reestablecer(){
    document.getElementById("nombre").value = document.getElementById("nombre").ariaPlaceholder;
    document.getElementById("apellido").value = document.getElementById("apellido").ariaPlaceholder;
    document.getElementById("correo").value = document.getElementById("correo").ariaPlaceholder;
    document.getElementById("cantidad_tickets").value = document.getElementById("cantidad_tickets").ariaPlaceholder;
    document.getElementById("categoria").value = document.getElementById("categoria").ariaLabel;
}
