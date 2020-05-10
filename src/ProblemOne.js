var texto = prompt("ingrese un texto: ")

function contarLetras(letras) {
    letras = letras.replace(/ /g,'');
    var objeto = {}; 
    for(var i in letras){
        objeto[letras[i].toLowerCase()] = ( objeto[letras[i]] || 0 ) + 1; // Incrementamos el valor si el elemento ya existe    
    }
    
    return [objeto].sort((a,b) => b -a);
}

var resultado = contarLetras(texto)
console.log(resultado);