

function UE(valor){
    var escola = "";
    switch(valor){
        case 1:
            escola = "Agostinho Garcia";
            document.getElementById("fund").value = "";
            document.getElementById("sala").value = "";
            break;
        case 2:
            escola = "Braulio Teixeira";
            document.getElementById("fund").value = "";
            document.getElementById("sala").value = "";
            break;
        case 3:
            escola = "CAIC Professor João Teixeira";
            document.getElementById("fund").value = "";
            document.getElementById("sala").value = "";
            break;

        case 4:
            escola = "José Gonso";
            document.getElementById("fund").value = "";
            document.getElementById("sala").value = "";
            break;
        case 5:
            escola = "Mário Borelli Thomaz";
            document.getElementById("fund").value = "";
            document.getElementById("sala").value = "";
            break;
        case 6:
            escola = "Nadir Zadra Ribaldo";
            document.getElementById("fund").value = "";
            document.getElementById("sala").value = "";
            break;
        case 7:
            escola = "Noraide Mariano";
            document.getElementById("fund").value = "";
            document.getElementById("sala").value = "";
            break;
        case 8:
            escola = "Ruth Barroso Teixeira";
            document.getElementById("fund").value = "";
            document.getElementById("sala").value = "";
            break;
        case 9:
            escola = "Wladimir Salzano";
            document.getElementById("fund").value = "";
            document.getElementById("sala").value = "";
            break;
        default:
            escola = "Digite uma escola válida!";

    }

    document.getElementById("Escola").value = escola;
    console.log(escola);

}

function Ciclo(ciclo){
       
    var sala;
    var fund;
    var teste = document.getElementById("Escola").value;
    switch(ciclo){
        case 1:
            if(teste == "José Gonso" ){
                alert("A unidade escolar selecionada não atende o ciclo 1 do fundamental!\nReveja sua escolha!");
                fund = "";
                sala = "";                
            }else{            
                sala = "1º ano";
                fund = "Fundamental 1";
            }
            break;
        case 2:
            if(teste == "José Gonso" ){
                alert("A unidade escolar selecionada não atende o ciclo 1 do fundamental!\nReveja sua escolha!");
                fund = "";
                sala = "";                
            }else{
                sala = "2º ano";
                fund = "Fundamental 1";
            }
            break;
        case 3:
            if(teste == "José Gonso" ){
                alert("A unidade escolar selecionada não atende o ciclo 1 do fundamental!\nReveja sua escolha!");
                fund = "";
                sala = "";                
            }else{
                sala = "3º ano";
                fund = "Fundamental 1";
            }
            break;
        case 4:
            if(teste == "José Gonso" ){
                alert("A unidade escolar selecionada não atende o ciclo 1 do fundamental!\nReveja sua escolha!");
                fund = "";
                sala = "";                
            }else{
                sala = "4º ano";
                fund = "Fundamental 1";
            }
            break;
        case 5:
            if(teste == "José Gonso" ){
                alert("A unidade escolar selecionada não atende o ciclo 1 do fundamental!\nReveja sua escolha!");
                fund = "";
                sala = "";                
            }else{
                sala = "5º ano";
                fund = "Fundamental 1";
            }
            break;
        case 6:            
            if(teste == "Noraide Mariano" || teste == "Mário Borelli Thomaz" || teste == "José Gonso" ){
                sala = "6º ano";
                fund = "Fundamental 2";
            }
            else{
                alert("A unidade escolar selecionada não atende o ciclo 2 do fundamental!\nReveja sua escolha!");
                fund = "";
                sala = "";                
            }
            
            break;
        case 7:
            if(teste == "Noraide Mariano" || teste == "Mário Borelli Thomaz" || teste == "José Gonso" ){
                sala = "7º ano";
                fund = "Fundamental 2";
            }
            else{
                alert("A unidade escolar selecionada não atende o ciclo 2 do fundamental!\nReveja sua escolha!");
                fund = "";
                sala = "";                
            }
            sala = "7º ano";
            fund = "Fundamental 2";
            break;
        case 8:
            if(teste == "Noraide Mariano" || teste == "Mário Borelli Thomaz" || teste == "José Gonso" ){
                sala = "8º ano";
                fund = "Fundamental 2";
            }
            else{
                alert("A unidade escolar selecionada não atende o ciclo 2 do fundamental!\nReveja sua escolha!");
                fund = "";
                sala = "";                
            }
            break;
        case 9:
            if(teste == "Noraide Mariano" || teste == "Mário Borelli Thomaz" || teste == "José Gonso" ){
                sala = "9º ano";
                fund = "Fundamental 2";
            }
            else{
                alert("A unidade escolar selecionada não atende o ciclo 2 do fundamental!\nReveja sua escolha!");
                fund = "";
                sala = "";                
            }
            break;
        default:
            sala = "";
            fund = "";
            
    }
    document.getElementById("fund").value = fund;
    document.getElementById("sala").value = sala;
}

function limpar(){
    document.getElementById("Escola").value = "";
    document.getElementById("fund").value = "";
    document.getElementById("sala").value = "";
    document.getElementById("Prof").value = "";
    document.getElementById("Numero").value = "";
    document.getElementById("Nome").value = "";
    document.getElementById("Comp").selectedIndex = 0;
}

function estado_btn(id){
    switch(id){
        case "btn_01":
        let flag = 0;
        if(flag == 0){
        document.getElementById(id).style.cssText = 
        'color: rgb(6, 252, 35);'+
        'font-weight: bold;'+
        'text-shadow: 2px 2px 20px rgba(0, 255, 42, 0.9);'+
        'background: #000;'+
        'box-shadow: 1px 5px 9.5px 0.5px rgba(0, 0, 0, 0.8);'+
        'box-shadow: 1.5px 1.5px 10px rgba(0, 254, 47, 0.9);'+
        'margin: 2px 2px 2px 2px;';
        flag = 1;
        }
        if (flag == 1){
            document.getElementById(id).style.cssText =
                'color: rgb(253, 16, 0);'+
                'font-weight: bold;'+
                'text-shadow: 2px 2px 20px rgba(218, 87, 47, 0.9);'+
                'background: #000;'+
                'box-shadow: 1px 5px 9.5px 0.5px rgba(0, 0, 0, 0.8);'+
                'box-shadow: 1.5px 1.5px 10px rgba(218, 87, 47, 0.9);'+
                'margin: 2px 2px 2px 2px;';
                    }
        break;

        case "btn_02":
    
        document.getElementById(id).style.cssText = 
        'color: rgb(6, 252, 35);'+
        'font-weight: bold;'+
        'text-shadow: 2px 2px 20px rgba(0, 255, 42, 0.9);'+
        'background: #000;'+
        'box-shadow: 1px 5px 9.5px 0.5px rgba(0, 0, 0, 0.8);'+
        'box-shadow: 1.5px 1.5px 10px rgba(0, 254, 47, 0.9);'+
        'margin: 2px 2px 2px 2px;';
        break;

        case "btn_03":
    
        document.getElementById(id).style.cssText = 
        'color: rgb(6, 252, 35);'+
        'font-weight: bold;'+
        'text-shadow: 2px 2px 20px rgba(0, 255, 42, 0.9);'+
        'background: #000;'+
        'box-shadow: 1px 5px 9.5px 0.5px rgba(0, 0, 0, 0.8);'+
        'box-shadow: 1.5px 1.5px 10px rgba(0, 254, 47, 0.9);'+
        'margin: 2px 2px 2px 2px;';
        break;

        case "btn_04":
    
        document.getElementById(id).style.cssText = 
        'color: rgb(6, 252, 35);'+
        'font-weight: bold;'+
        'text-shadow: 2px 2px 20px rgba(0, 255, 42, 0.9);'+
        'background: #000;'+
        'box-shadow: 1px 5px 9.5px 0.5px rgba(0, 0, 0, 0.8);'+
        'box-shadow: 1.5px 1.5px 10px rgba(0, 254, 47, 0.9);'+
        'margin: 2px 2px 2px 2px;';
        break;

        case "btn_05":
    
        document.getElementById(id).style.cssText = 
        'color: rgb(6, 252, 35);'+
        'font-weight: bold;'+
        'text-shadow: 2px 2px 20px rgba(0, 255, 42, 0.9);'+
        'background: #000;'+
        'box-shadow: 1px 5px 9.5px 0.5px rgba(0, 0, 0, 0.8);'+
        'box-shadow: 1.5px 1.5px 10px rgba(0, 254, 47, 0.9);'+
        'margin: 2px 2px 2px 2px;';
        break;

        case "btn_06":
    
        document.getElementById(id).style.cssText = 
        'color: rgb(6, 252, 35);'+
        'font-weight: bold;'+
        'text-shadow: 2px 2px 20px rgba(0, 255, 42, 0.9);'+
        'background: #000;'+
        'box-shadow: 1px 5px 9.5px 0.5px rgba(0, 0, 0, 0.8);'+
        'box-shadow: 1.5px 1.5px 10px rgba(0, 254, 47, 0.9);'+
        'margin: 2px 2px 2px 2px;';
        break;

        case "btn_07":
    
        document.getElementById(id).style.cssText = 
        'color: rgb(6, 252, 35);'+
        'font-weight: bold;'+
        'text-shadow: 2px 2px 20px rgba(0, 255, 42, 0.9);'+
        'background: #000;'+
        'box-shadow: 1px 5px 9.5px 0.5px rgba(0, 0, 0, 0.8);'+
        'box-shadow: 1.5px 1.5px 10px rgba(0, 254, 47, 0.9);'+
        'margin: 2px 2px 2px 2px;';
        break;

        case "btn_08":
    
        document.getElementById(id).style.cssText = 
        'color: rgb(6, 252, 35);'+
        'font-weight: bold;'+
        'text-shadow: 2px 2px 20px rgba(0, 255, 42, 0.9);'+
        'background: #000;'+
        'box-shadow: 1px 5px 9.5px 0.5px rgba(0, 0, 0, 0.8);'+
        'box-shadow: 1.5px 1.5px 10px rgba(0, 254, 47, 0.9);'+
        'margin: 2px 2px 2px 2px;';
        break;

        case "btn_09":
    
        document.getElementById(id).style.cssText = 
        'color: rgb(6, 252, 35);'+
        'font-weight: bold;'+
        'text-shadow: 2px 2px 20px rgba(0, 255, 42, 0.9);'+
        'background: #000;'+
        'box-shadow: 1px 5px 9.5px 0.5px rgba(0, 0, 0, 0.8);'+
        'box-shadow: 1.5px 1.5px 10px rgba(0, 254, 47, 0.9);'+
        'margin: 2px 2px 2px 2px;';
        break;

        case "btn_10":
    
        document.getElementById(id).style.cssText = 
        'color: rgb(6, 252, 35);'+
        'font-weight: bold;'+
        'text-shadow: 2px 2px 20px rgba(0, 255, 42, 0.9);'+
        'background: #000;'+
        'box-shadow: 1px 5px 9.5px 0.5px rgba(0, 0, 0, 0.8);'+
        'box-shadow: 1.5px 1.5px 10px rgba(0, 254, 47, 0.9);'+
        'margin: 2px 2px 2px 2px;';
        break;

        case "btn_11":
    
        document.getElementById(id).style.cssText = 
        'color: rgb(6, 252, 35);'+
        'font-weight: bold;'+
        'text-shadow: 2px 2px 20px rgba(0, 255, 42, 0.9);'+
        'background: #000;'+
        'box-shadow: 1px 5px 9.5px 0.5px rgba(0, 0, 0, 0.8);'+
        'box-shadow: 1.5px 1.5px 10px rgba(0, 254, 47, 0.9);'+
        'margin: 2px 2px 2px 2px;';
        break;

        case "btn_12":
    
        document.getElementById(id).style.cssText = 
        'color: rgb(6, 252, 35);'+
        'font-weight: bold;'+
        'text-shadow: 2px 2px 20px rgba(0, 255, 42, 0.9);'+
        'background: #000;'+
        'box-shadow: 1px 5px 9.5px 0.5px rgba(0, 0, 0, 0.8);'+
        'box-shadow: 1.5px 1.5px 10px rgba(0, 254, 47, 0.9);'+
        'margin: 2px 2px 2px 2px;';
        break;

        case "btn_13":
    
        document.getElementById(id).style.cssText = 
        'color: rgb(6, 252, 35);'+
        'font-weight: bold;'+
        'text-shadow: 2px 2px 20px rgba(0, 255, 42, 0.9);'+
        'background: #000;'+
        'box-shadow: 1px 5px 9.5px 0.5px rgba(0, 0, 0, 0.8);'+
        'box-shadow: 1.5px 1.5px 10px rgba(0, 254, 47, 0.9);'+
        'margin: 2px 2px 2px 2px;';
        break;

        case "btn_14":
    
        document.getElementById(id).style.cssText = 
        'color: rgb(6, 252, 35);'+
        'font-weight: bold;'+
        'text-shadow: 2px 2px 20px rgba(0, 255, 42, 0.9);'+
        'background: #000;'+
        'box-shadow: 1px 5px 9.5px 0.5px rgba(0, 0, 0, 0.8);'+
        'box-shadow: 1.5px 1.5px 10px rgba(0, 254, 47, 0.9);'+
        'margin: 2px 2px 2px 2px;';
        break;

        case "btn_15":
    
        document.getElementById(id).style.cssText = 
        'color: rgb(6, 252, 35);'+
        'font-weight: bold;'+
        'text-shadow: 2px 2px 20px rgba(0, 255, 42, 0.9);'+
        'background: #000;'+
        'box-shadow: 1px 5px 9.5px 0.5px rgba(0, 0, 0, 0.8);'+
        'box-shadow: 1.5px 1.5px 10px rgba(0, 254, 47, 0.9);'+
        'margin: 2px 2px 2px 2px;';
        break;

        case "btn_16":
    
        document.getElementById(id).style.cssText = 
        'color: rgb(6, 252, 35);'+
        'font-weight: bold;'+
        'text-shadow: 2px 2px 20px rgba(0, 255, 42, 0.9);'+
        'background: #000;'+
        'box-shadow: 1px 5px 9.5px 0.5px rgba(0, 0, 0, 0.8);'+
        'box-shadow: 1.5px 1.5px 10px rgba(0, 254, 47, 0.9);'+
        'margin: 2px 2px 2px 2px;';
        break;

        case "btn_17":
    
        document.getElementById(id).style.cssText = 
        'color: rgb(6, 252, 35);'+
        'font-weight: bold;'+
        'text-shadow: 2px 2px 20px rgba(0, 255, 42, 0.9);'+
        'background: #000;'+
        'box-shadow: 1px 5px 9.5px 0.5px rgba(0, 0, 0, 0.8);'+
        'box-shadow: 1.5px 1.5px 10px rgba(0, 254, 47, 0.9);'+
        'margin: 2px 2px 2px 2px;';
        break;

        case "btn_18":
    
        document.getElementById(id).style.cssText = 
        'color: rgb(6, 252, 35);'+
        'font-weight: bold;'+
        'text-shadow: 2px 2px 20px rgba(0, 255, 42, 0.9);'+
        'background: #000;'+
        'box-shadow: 1px 5px 9.5px 0.5px rgba(0, 0, 0, 0.8);'+
        'box-shadow: 1.5px 1.5px 10px rgba(0, 254, 47, 0.9);'+
        'margin: 2px 2px 2px 2px;';
        break;

        case "btn_19":
    
        document.getElementById(id).style.cssText = 
        'color: rgb(6, 252, 35);'+
        'font-weight: bold;'+
        'text-shadow: 2px 2px 20px rgba(0, 255, 42, 0.9);'+
        'background: #000;'+
        'box-shadow: 1px 5px 9.5px 0.5px rgba(0, 0, 0, 0.8);'+
        'box-shadow: 1.5px 1.5px 10px rgba(0, 254, 47, 0.9);'+
        'margin: 2px 2px 2px 2px;';
        break;

        case "btn_20":
    
        document.getElementById(id).style.cssText = 
        'color: rgb(6, 252, 35);'+
        'font-weight: bold;'+
        'text-shadow: 2px 2px 20px rgba(0, 255, 42, 0.9);'+
        'background: #000;'+
        'box-shadow: 1px 5px 9.5px 0.5px rgba(0, 0, 0, 0.8);'+
        'box-shadow: 1.5px 1.5px 10px rgba(0, 254, 47, 0.9);'+
        'margin: 2px 2px 2px 2px;';
        break;

        case "btn_21":
    
        document.getElementById(id).style.cssText = 
        'color: rgb(6, 252, 35);'+
        'font-weight: bold;'+
        'text-shadow: 2px 2px 20px rgba(0, 255, 42, 0.9);'+
        'background: #000;'+
        'box-shadow: 1px 5px 9.5px 0.5px rgba(0, 0, 0, 0.8);'+
        'box-shadow: 1.5px 1.5px 10px rgba(0, 254, 47, 0.9);'+
        'margin: 2px 2px 2px 2px;';
        break;

        case "btn_22":
    
        document.getElementById(id).style.cssText = 
        'color: rgb(6, 252, 35);'+
        'font-weight: bold;'+
        'text-shadow: 2px 2px 20px rgba(0, 255, 42, 0.9);'+
        'background: #000;'+
        'box-shadow: 1px 5px 9.5px 0.5px rgba(0, 0, 0, 0.8);'+
        'box-shadow: 1.5px 1.5px 10px rgba(0, 254, 47, 0.9);'+
        'margin: 2px 2px 2px 2px;';
        break;

        case "btn_23":
    
        document.getElementById(id).style.cssText = 
        'color: rgb(6, 252, 35);'+
        'font-weight: bold;'+
        'text-shadow: 2px 2px 20px rgba(0, 255, 42, 0.9);'+
        'background: #000;'+
        'box-shadow: 1px 5px 9.5px 0.5px rgba(0, 0, 0, 0.8);'+
        'box-shadow: 1.5px 1.5px 10px rgba(0, 254, 47, 0.9);'+
        'margin: 2px 2px 2px 2px;';
        break;

        case "btn_24":
    
        document.getElementById(id).style.cssText = 
        'color: rgb(6, 252, 35);'+
        'font-weight: bold;'+
        'text-shadow: 2px 2px 20px rgba(0, 255, 42, 0.9);'+
        'background: #000;'+
        'box-shadow: 1px 5px 9.5px 0.5px rgba(0, 0, 0, 0.8);'+
        'box-shadow: 1.5px 1.5px 10px rgba(0, 254, 47, 0.9);'+
        'margin: 2px 2px 2px 2px;';
        break;

        case "btn_25":
    
        document.getElementById(id).style.cssText = 
        'color: rgb(6, 252, 35);'+
        'font-weight: bold;'+
        'text-shadow: 2px 2px 20px rgba(0, 255, 42, 0.9);'+
        'background: #000;'+
        'box-shadow: 1px 5px 9.5px 0.5px rgba(0, 0, 0, 0.8);'+
        'box-shadow: 1.5px 1.5px 10px rgba(0, 254, 47, 0.9);'+
        'margin: 2px 2px 2px 2px;';
        break;
    }

}
    