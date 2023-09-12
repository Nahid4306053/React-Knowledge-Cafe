import React, { useState , useEffect } from 'react'
import Bookmarkbar from './Bookmarkbar'

export default function HomeSidebar({readitemID ,Bookmark}) {
  const [post, setpost] = useState([]);    
  const [totalspentTime, settotalspentTime] = useState([]);    
  useEffect(() => {    
   const fetchdata = async () => {
     try {
       const snapshort = await fetch("src/datas.json");
       const finaldata = await snapshort.json();    
       const datas  = finaldata.filter((ele)=>{
         if(readitemID.findIndex((eles)=> eles === ele.id ) > -1){
           return ele;
         } 
        })
        const totlatime = datas.reduce((a,b)=>{
        const time = parseInt(b.post_readtime)
         return a + time 
       },0)
       setpost(finaldata);
       settotalspentTime(totlatime); 
         
     } catch (err) { 
       console.log(err);
     }
   };    
   fetchdata(); 
 }, []); 
  

 useEffect(()=>{  
   const datas = post.filter((ele)=>{
     if(readitemID.findIndex((eles)=> eles === ele.id ) > -1){
       return ele;
     } 
    })
    const totlatime = datas.reduce((a,b)=>{
      const time = parseInt(b.post_readtime)
       return a + time 
     },0)
     settotalspentTime(totlatime);
 },[readitemID,])    
 

  return ( 
    <div className="bookmark mt-10">
    <div style={{border:'3px solid #6047EC'}} className=" spent_time border-2 rounded-lg p-sm ">
     <h1 className='text-2xl font-bold  text-center  text-[#6047EC]'>Spent time on read : {totalspentTime} min</h1>
    </div>   
    <Bookmarkbar activeBookmark={Bookmark}/>  
    </div>
 
  )
} 
