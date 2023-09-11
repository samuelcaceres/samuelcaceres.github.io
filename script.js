const CALCULAR = document.getElementById('calcular');
const ERROR = document.getElementById('error');
const FLU = document.getElementById('flu');
const MAN = document.getElementById('man');
const SC1500 = document.getElementById('sc1');
const SC2000 = document.getElementById('sc2');
const HOLLIDAY = document.getElementById('metodo1');
const SUPERFICIE = document.getElementById('metodo2');



function calcFlujo(peso){

    
    let pesoAuxiliar = peso;
    let mantenimiento = 0;
    
    if (pesoAuxiliar>20){
        let aux = pesoAuxiliar-20;
        mantenimiento += aux*20;
        pesoAuxiliar -= aux;
    } 
    if (pesoAuxiliar>10){
        let aux = pesoAuxiliar-10;
        mantenimiento += aux*50;
        pesoAuxiliar -= aux;
    }  
    mantenimiento += pesoAuxiliar*100;

    let flujo = mantenimiento / 24
    flujo = Math.ceil(flujo)

    return flujo;
}

function calcSuperficieCorporal(peso){
    peso = parseFloat(peso);
    calculo = ((peso * 4) + 7) / (peso + 90)
    return calculo
}

CALCULAR.addEventListener('click', () => {
    const DATO = document.getElementById('peso').value
    //validamos que se cargue un dato:
    if (DATO > 0 && DATO <= 30){
        ERROR.style.display = 'none'

        document.getElementById('resultado1').style.display = 'none';
        document.getElementById('resultado2').style.display = 'none';
        
        let flujo = calcFlujo(DATO);
        let mantenimiento = flujo*1.5;

        HOLLIDAY.innerHTML = 'Método Holliday-Segar';
        FLU.innerHTML = 'Mantenimiento = ' + flujo + ' cc/hr';
        MAN.innerHTML = 'm+m/2 = ' + mantenimiento + ' cc/hr';
        FLU.style.display = 'block';
        MAN.style.display = 'block';
        HOLLIDAY.style.display = 'block';

        document.getElementById('resultado1').style.display = 'block';
    } 
    else if(DATO > 30){
        ERROR.style.display = 'none'

        document.getElementById('resultado1').style.display = 'none';
        document.getElementById('resultado2').style.display = 'none';

        let superficieCorporalNormal = calcSuperficieCorporal(DATO);
        console.log(superficieCorporalNormal);
        let superficieCorporal1500 = superficieCorporalNormal * 1500;
        superficieCorporal1500 = superficieCorporal1500.toFixed(2);
        let superficieCorporal2000 = superficieCorporalNormal * 2000;
        superficieCorporal2000 = superficieCorporal2000.toFixed(2);

        SUPERFICIE.innerHTML = 'Método por Superficie Corporal';
        SC1500.innerHTML = 'Superficie Corporal x 1500 = ' + superficieCorporal1500;
        SC2000.innerHTML = 'Superficie Corporal x 2000 = ' + superficieCorporal2000;
        
        SUPERFICIE.display = 'block';
        FLU.style.display = 'block';
        MAN.style.display = 'block';

        document.getElementById('resultado2').style.display = 'block';
    }else {
        ERROR.style.display = 'block';
        FLU.style.display = 'none';
        MAN.style.display = 'none';

        document.getElementById('resultado1').style.display = 'none';
        document.getElementById('resultado2').style.display = 'none';
    }
})
 