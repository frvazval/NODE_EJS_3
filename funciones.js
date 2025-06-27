function sumar (a, b) {
    return a + b;
}

function restar (a, b) {
    return a - b;
}

export function calculadora (a, b, operacion) {
    switch (operacion) {
        case "sumar" :
            return sumar(a, b) 
            break         
        case "restar" :
            return restar(a, b)
            break
    }
    return operacion(a, b)
}

