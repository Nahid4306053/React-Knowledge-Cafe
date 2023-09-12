const getlocalstoreTimedata = () =>{
       if(localStorage.getItem('readtime')){
          return JSON.parse(localStorage.getItem('readtime'))             
       }      
       else{
          return [];
       }            
}


 const   savetime = (datas) =>{
     const data = JSON.stringify(datas);               
     localStorage.setItem('readtime',data);                 
 }
 export {getlocalstoreTimedata , savetime};   