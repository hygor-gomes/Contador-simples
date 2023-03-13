// Para iniciarmos a lógica, precisamos criar uma variável com valor 0.
let count = 0;

// Primeiro criamos uma constante que seleciona o span = 0 no html pelo ID.
const value = document.querySelector('#value');
// Constante utilizada para selecionar todas as classes que contém "btn"
const btns = document.querySelectorAll(".btn");

// A função forEach
btns.forEach(function (btn){
  btn.addEventListener("click", function(e) {
    const styles = e.currentTarget.classList;
    if(styles.contains('decrease')) {
        count--;
    }
    else if(styles.contains('increase')){
        count++;
    }
    else{
        count = 0;
    }
    if(count > 0){
        value.style.color = 'green';
    }
    else if(count < 0){
        value.style.color = 'red';
    }
    if(count === 0){
        value.style.color = 'black';
    }
    value.textContent = count;
  });
});


