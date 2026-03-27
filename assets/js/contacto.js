//Envio Formulario Contacto
    emailjs.init('NfFYBU6akDNmymqe8')
    const btn = document.getElementById('button-contacto');


    document.getElementById('form')
    .addEventListener('submit', function(event) {
    event.preventDefault();

    var params = {
        name: document.getElementById("nombre").value,
        email: document.getElementById("correo").value,
        cellphone: document.getElementById("celular").value,
        message: document.getElementById("mensaje").value,
    };

    const serviceID = 'service_f6vyj4z';
    const templateID = 'template_3ofsmuh';

    emailjs.send(serviceID, templateID, params)
        .then(() => {

            document.getElementById("nombre").value = "";
            document.getElementById("correo").value = "";
            document.getElementById("celular").value = "";
            document.getElementById("mensaje").value = "";

            Swal.fire({
                icon: 'success',
                title: 'Se envió el mensaje',
                timer: 5500,
                showConfirmButton: true
            })
        }, (err) => {
        btn.value = 'Send Email';
        alert(JSON.stringify(err));
        });        
    });


