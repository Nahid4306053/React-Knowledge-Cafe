const getlocalstoredata = () =>{
       if(localStorage.getItem('bookmarkItem')){
          return JSON.parse(localStorage.getItem('bookmarkItem'))             
       }      
       else{
          return [];
       }            
}


 const   saveTobookmark = (datas) =>{
     const data = JSON.stringify(datas);               
     localStorage.setItem('bookmarkItem',data);                 
 }

 export {getlocalstoredata , saveTobookmark};