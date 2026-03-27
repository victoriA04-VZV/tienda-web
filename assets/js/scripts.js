jQuery('document').ready(function($){

    //carrito-menu en la pagina productos
    var carritoMenuBtn=$('.car'),
    carritomenu=$('.dropdown-menu');
    
    carritoMenuBtn.click(function(){
            if(carritomenu.hasClass('show')){
                carritomenu.removeClass('show');
            }else{
                carritomenu.addClass('show');
            }
        });
    
    });

//productos
let imagenes = document.querySelectorAll('.card-img');
let modal = document.querySelector('#modal');
let img = document.querySelector('#modal-img');
let boton = document.querySelector('#modal-boton');

for(let i = 0; i<imagenes.length;i++){
    imagenes[i].addEventListener('click',function(e){
        modal.classList.toggle("modal-open");
        let src = e.target.src;
        img.setAttribute("src",src);
    });
}