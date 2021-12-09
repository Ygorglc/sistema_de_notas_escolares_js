/* Algoritmo que transforma as notas do sistema numérico para sistema de notas em caracteres tipo A B C

de 90 para cima = A
entre 80 - 89   = B
entre 70 - 69   = C
entre 60 - 69   = D
menor que 60    = F

*/

let score = 100

function getScore(score){

    let scoreA = score >= 90 && score <= 100
    let scoreB = score >= 80 && score <= 89
    let scoreC = score >= 70 && score <= 79
    let scoreD = score >= 60 && score <= 69
    let scoreF = score < 60  && score > 0 

    if(scoreA){
        console.log("O aluno tirou A")
    } else if(scoreB){
        console.log("O aluno tirou B")
    } else if(scoreC){
        console.log("O aluno tirou C")
    } else if(scoreD){
        console.log("O aluno tirou D")
    } else if(scoreF){
        console.log("O aluno tirou F")
    }else {
        console.log("Nota não atribuida")
    }

}

getScore(score)
getScore(85)
getScore(74)
getScore(63)
getScore(57)
getScore(-1)