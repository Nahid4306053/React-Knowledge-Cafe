import React, { useState } from 'react'
import Posts from '../components/Posts'
import HomeSidebar from '../components/homeSidebar'
import {getlocalstoredata} from '../Utils/Getlocalstoredata'
import {getlocalstoreTimedata} from '../Utils/getredingtimes'
export default function Home() {
  const [activeBookmark , setactivebookmark] = useState(getlocalstoredata());
  const [readitemID, setreaditemID] = useState(getlocalstoreTimedata());
  const chagesOnBookmark = (datas,readid) =>{
     if(datas !== 0){
      setactivebookmark(datas);
     } 
     else{
         setreaditemID(readid)
     }   
  }   
  return ( 
    <div className="container  mb-20">
      <div className="grid lg:gap-10  grid-cols-12">
        <div className="col-span-12 md:col-span-12 lg:col-span-8">
         <div className="content_part">
          <Posts chagesOnBookmark={chagesOnBookmark}/>
          </div>       
        </div>
        <div className="col-span-12 md:col-span-12 lg:col-span-4"> 
        <div className="sidebar">
          <HomeSidebar readitemID={readitemID} Bookmark={activeBookmark}/>
         </div>     
        </div>
      </div>
    </div>
  )
}
