const conversionFactor = 0.01;

const IMC_STATUS_DICT= {/*DICIONARIO*/ 
   
    UNDERWEIGTH: 'UNDERWEIGTH',
    REGULAR:'REGULAR',
    OUVERWEIGHT: 'OUVERWEIGHT',
    OBESITY:'OBESITY'
}


function getClassificationDetail(classification){

      switch (classification){
      case IMC_STATUS_DICT.UNDERWEIGTH:
        return'Abaixo do peso';
      case IMC_STATUS_DICT.REGULAR:
           return'Peso normal';
      case IMC_STATUS_DICT.OUVERWEIGHT:
          return'Abaixo do peso';
      case IMC_STATUS_DICT.OBESITY:
          return'Gordo';
      
       default:
        return 'Falha ao classificar o IMC';
}
}

function classificationIMC(imc){/*Estrutura condicional*/ 
    if(imc < 18.5){
    return IMC_STATUS_DICT.UNDERWEIGTH
    }else if(imc >= 18.5 && imc < 25 ){
        return  IMC_STATUS_DICT.REGULAR
    }else if ( imc >= 25 && imc < 30 ){
        return  IMC_STATUS_DICT.OUVERWEIGHT
    }else{
        return IMC_STATUS_DICT.OBESITY
    }
}

function calculateIMC(person){

let height = person.height;
let weight = person.weight;



height*=conversionFactor
let imc = weight / (height * height)
const classification = classificationIMC(imc); 
const classificationDetail = getClassificationDetail(classification)

const result = "O resultado do imc " + imc;
const isHealthy = true




    return {/* retorna Objeto*/ 
        name : person.name,
        imc,
        classification,
        classificationDetail,
        result,
        isHealthy,
    }
}

const person ={
    name: "Boris",
    weight:60,
    height:170,
} 

const person3 ={
    name: "Bia",
    weight:90,
    height:1.88,
} 
const person4 ={
    name: "Bruce",
    weight:60,
    height:150,
}

console.log(calculateIMC(person))
console.log(calculateIMC(person3))
console.log(calculateIMC(person4))