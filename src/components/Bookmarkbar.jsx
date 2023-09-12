import React, { useEffect, useState } from 'react'

export default function Bookmarkbar({activeBookmark}) {
   const [post, setpost] = useState([]);    
   const [finalBookmark, setfinalBookmark] = useState([]);    
   useEffect(() => {
    const fetchdata = async () => {
      try {
        const snapshort = await fetch("src/datas.json");
        const finaldata = await snapshort.json();    
        const datas  = finaldata.filter((ele)=>{
          if(activeBookmark.findIndex((eles)=> eles === ele.id ) > -1){
            return ele;
          } 
         })
        setpost(finaldata);
        setfinalBookmark(datas);
      } catch (err) {
        console.log(err);
      }
    };
    fetchdata();
  }, []);


  useEffect(()=>{
    const datas =   post.filter((ele)=>{
      if(activeBookmark.findIndex((eles)=> eles === ele.id ) > -1){
        return ele;
      } 
     })
     setfinalBookmark(datas);
  },[activeBookmark,])   
     
  return (
 
     <div className="bookmark_blogs mt-10">
      <h1 className='text-2xl font-bold text-neutral-900'>Bookmarked Blogs : {activeBookmark.length}</h1>
      <div className='bookmarked_blogs '> 
        {activeBookmark && finalBookmark.map((ele , index)=>{
          const {title} = ele
          return <p key={index} className='my-5 text-lg font-semibold'>{title}</p>
        }) 
        }               
                      
      </div>
      </div>                   
 
  )
}
