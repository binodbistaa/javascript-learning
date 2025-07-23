const x = "Nepal"
let flag = false
 let arr = ['Nepal' ,'India' , 'Japan' , 'Korea' , 'America']
 for( let item of arr){
    if( x == item){
      flag = true;
      break;``
        }    
  }
  if(!flag){
    console.log("not found in array") 
  }
  else{
    console.log(x + " is found in array")
  }
      