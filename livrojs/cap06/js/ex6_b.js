const frm = document.querySelector("form");
const resp1 = document.querySelector("#resp1");
const resp2 = document.querySelector("#resp2");

const numeros = [];

frm.addEventListener("submit", (e) => {
    e.preventDefault();
    const num = frm.inNumero.value;

    if (numeros.includes(num) == true) {
        alert("Esse número já existe no array");
    } else {
        numeros.push(num);
    }
    
    let lista = "";
    lista = "Números: " + numeros;
    resp1.innerHTML = lista;
    frm.reset();
    frm.inNumero.focus();
});

frm.btOrdem.addEventListener("click", () => {
    const copia = [...numeros];

    copia.sort((a, b) => a - b);
    if (numeros.length == 0) {
        alert("Não há números listados");
        return
    }

    let flag = 0;

    for (let i = 0; i < numeros.length; i++) {
        if (copia[i] == numeros[i]) {
            flag++;
        }
    }
    if (flag == numeros.length) {
        resp2.innerHTML = "Os números estão em Ordem crecente";
    } else {
        resp2.innerHTML = "Atenção...os números não estão em ordem crescente";
    }
});
