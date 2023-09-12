import React, { useEffect, useState } from "react";
import PostCard from "./PostCard";
import {getlocalstoredata , saveTobookmark} from '../Utils/Getlocalstoredata'
import {getlocalstoreTimedata , savetime} from '../Utils/getredingtimes'
export default function Posts({chagesOnBookmark}) {
  const [bookmarkdata  , setbookmarkdata] = useState(getlocalstoredata());
  const [timeids  , setimeIDs] = useState(getlocalstoreTimedata());
  const [post, setpost] = useState([]);
  const addBookmark = (id)=>{
   const dats = getlocalstoredata();
   const index = dats.findIndex((eles)=> eles === id)
   if(index !== -1){
     dats.splice(index,1);
     saveTobookmark(dats);
     setbookmarkdata(getlocalstoredata())
     chagesOnBookmark(dats , 0)
   }
   else{ 
        dats.push(id);
        saveTobookmark(dats);
        setbookmarkdata(getlocalstoredata()) 
        chagesOnBookmark(dats , 0)
   }
  }
  const handelReadingtime = (id) =>{
    const dats = getlocalstoreTimedata();
    const index = dats.findIndex((eles)=> eles === id)
    if(index !== -1){
      dats.splice(index,1);
      savetime(dats);
      setimeIDs(getlocalstoreTimedata())
      chagesOnBookmark(0 , dats)
    }
    else{ 
         dats.push(id);
         savetime(dats);
         setimeIDs(getlocalstoreTimedata())
         chagesOnBookmark(0 , dats)
    }
  }
  useEffect(() => {
    const fetchdata = async () => {
      try {
        const snapshort = await fetch("src/datas.json");
        const finaldata = await snapshort.json();
        setpost(finaldata);
      } catch (err) {
        console.log(err);
      }
    };
    fetchdata();
  }, []);


  return ( 
    <>
      <div className="lg:h-screen lg:overflow-auto lg:custom-scrollbar ">
      { 
       post.length > 0 ? 
       post.map((ele , index)=>{
        return  <PostCard timeids={timeids}  handelReadingtime={handelReadingtime}  bokkmareked={bookmarkdata}  addBookmark={addBookmark}  contents={ele} key={index}/>            
       })    
       : ''             
      }
      </div>
    </>
  );
}
