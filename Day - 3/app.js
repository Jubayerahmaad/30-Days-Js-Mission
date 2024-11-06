// // For loop

// for(let i = 0; i < 10; i++){
//     console.log(i);
// }

// // while loop 

// let i = 5;

// while(i < 10){
//     console.log('hello word');
//     i++;
// }

// // Oparetors 

// let a = 10;
// let b = 11;

// if(a === b){
//     console.log('Its Confirm');
// }else{
//     console.log('No Its Not Confirm');
// }


let day;

switch (new Date().getDate()) {
    case 0:
        day = 'Sunday';
        
        break;
    case 1:
        day = 'Monday';
        break;
    case 2:
        day = 'Thurday';
        break;     
     case 3:
       day = 'Wedesday';
        break; 
     case 4:
        day = 'Thusday';
        break; 
     case 5:
        day = 'Friday';
        break; 
     case 6:
        day = 'Saturday';
        break; 

    default:
        break;
}

document.getElementById('demo').innerHTML = 'Today  is' + " "+ day;