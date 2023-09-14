// gera um numero alatorio entre 0 e 100

const numero_aleatorio = Math.floor(Math.random() * 100);

alert(numero_aleatorio)

 

const tentativa_input = document.getElementById("tentativa_input")

//refenciando o botão para a "variavel_button"

const verificar_button = document.getElementById("verificar_button")

 

verificar_button.addEventListener("click", function () { //alert("tentativa_input.value") })

 

    if (tentativa_input.value == numero_aleatorio) {

        alert("você acertou!!!")

    }
    if (tentativa_input.value < 0 || tentativa_input.value >100){

        alert ("fora do escopo")
            
        }

    else if (tentativa_input.value > numero_aleatorio) {

        alert("número e maior")

    }

    else if (tentativa_input.value < numero_aleatorio) {

        alert("número e menor")

    }
    


   
    
    

})