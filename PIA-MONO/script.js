document.addEventListener('DOMContentLoaded', () => {
    const registerButton = document.getElementById('registerButton');
    const exitButton = document.getElementById('exitButton');
    const inputField = document.getElementById('Matricula');
    const modal = document.getElementById('myModal');
    const modalText = document.getElementById('modalText');
    const span = document.getElementsByClassName('close')[0];

    inputField.addEventListener('input', () => {
        inputField.value = inputField.value.replace(/[^0-9]/g, ''); 
        //regex replace https://stackoverflow.com/questions/2555059/javascript-regular-expressions-replace-non-numeric-characters
    });

    registerButton.addEventListener('click', () => {
        const inputValue = inputField.value;
        const isSevenNumbers = /^\d{7}$/.test(inputValue);

        if (isSevenNumbers) {
            
            modalText.textContent = 'Bienvenido Ezequiel';
            //PRUEBA
            modal.style.display = 'block';
            exitButton.disabled = false;
        } else {
            alert('Por favor, ingresa exactamente 7 números.');
            exitButton.disabled = true;
        }
    });

   
    span.onclick = closeModal;
    window.onclick = (event) => {
        if (event.target == modal) {
            closeModal();
        }
    };

    

    //cerar modall
    function closeModal() {
        modal.style.display = 'none';
    }

    
    exitButton.addEventListener('click', () => {
        const matricula = inputField.value;
        //modalText.textContent = `Matrícula ingresada: ${matricula}`;
        modalText.textContent = 'Saliendo Ezequiel'
        modal.style.display = 'block';
    });

    
   // document.getElementById('closeModal').addEventListener('click', closeModal);
});

const hora = new Date
console.log(hora)
