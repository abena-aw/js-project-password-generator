document.querySelector('button').addEventListener('click', getPassword)

let password= ''

function getPassword(){
    for(i=0; i<8; i++){
        let numOrLetter = Math.random()
        if(numOrLetter <= 0.5){
            let numValue = Math.random()
            if(numValue < 0.1){
                password+='0';
            }else if(numValue>= 0.1 && numValue< 0.2){
                password+='1';
            }else if(numValue>= 0.2 && numValue< 0.3){
                password+='2';
            }else if(numValue>= 0.3 && numValue< 0.4){
                password+='3';
            }else if(numValue>= 0.4 && numValue< 0.5){
                password+='4';
            }else if(numValue>= 0.5 && numValue< 0.6){
                password+='5';
            }else if(numValue>= 0.6 && numValue< 0.7){
                password+='6';
            }else if(numValue>= 0.7 && numValue< 0.8){
                password+='7';
            }else if(numValue>= 0.8 && numValue< 0.9){
                password+='8';
            }else{
                password+='9';
            }
        }else{
            let letters = 'abcdefghijklmnopqrstuvwxyz'
            let letterValue = letters.charAt(Math.floor(Math.random() * 26)) 
            // Math.random is giving me some percentage of 26(like using quartiles/percentiles)//
            // It would be a decimal so Math.floor runs the result to the nearest whole number less than it(result)
            // Finally accessing the character at that percentile with charAt()
            // The whole function can be written just using the code in the main else block
            password+= letterValue;
        }   
    }console.log(password)
    document.querySelector('h3').innerText = password
}
getPassword()