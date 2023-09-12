import React from "react";

export default function PostCard({ timeids ,handelReadingtime , bokkmareked ,addBookmark , contents}) {
   const {id , cover_img , author_name , author_img , post_date , post_readtime , title , description , hashtags } = contents;
    const date = new Date(post_date);
    const datenum = date.getDate();
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const datemonth = months[date.getMonth()]
    const pastime = (Math.floor((new Date() - date) / (1000 * 3600 * 24)));

   return (
    <div className="card mt-10 bg-base-100 ">
      <figure className="px-10  rounded-xl h-[400px]  pt-10">
        <img
          src={cover_img ? cover_img : "https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"}
          alt="Shoes"
          className="rounded-xl "
        />  
      </figure> 
      <div className="card-body w-full  px-[0px]">
        <div className="deatils  flex justify-between w-full items-center ">
          <div className="author flex items-center">
          <div className="avatar"> 
           <div className="w-14 rounded-full">
             <img src={author_img ? author_img : "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"} />
           </div>
         </div>      
          <div className="auth_details ml-2">
           <h1 className="auth_name text-xl capitalize text-neutral-900 font-bold">{author_name}</h1>  
           <p className="postdate capitalize font-semibold text-neutral-400">{datenum+datemonth} {'('+pastime + " Days ago"+")"}</p>       
          </div>     
          </div> 
          <div>
            <div className=" reading_time text-xl text-neutral-400 flex"><p>
            {post_readtime} read</p> <p onClick={()=>addBookmark(id)} className={`font-semibold cursor-pointer ${bokkmareked.findIndex((eles)=> eles === id) !== -1 ? "text-[#581c87]" : "text-neutral-400"}  ml-2`}>{bokkmareked.findIndex((eles)=> eles === id) !== -1 ? "Bookmarked" : "Bookmark"} <i  className={`  fa-regular  fa-bookmark`}></i></p>
          </div>   
         </div>
        </div> 
        <div className="card_content">
         <h1 className="card_title text-5xl mt-4  text-neutral-900 font-bold">{title}</h1>  
         <p className="desc mt-7 leading-7">{description.slice(0,400)+"..."}</p>
         <div className="hastags text-neutral-500 flex gap-5 text-lg mt-6">
           {
            hashtags.map((ele , index)=>{
             return <span key={index}>{"#"+ele}</span>   
            })
          }                                     
         </div> 
          <a onClick={()=>handelReadingtime(id)} className="font-semibold cursor-pointer underline mt-5 block text-xl text-[#581c87]"> {console.log(id , timeids , timeids.findIndex((eles)=> eles === id))}{ timeids.findIndex((eles)=> eles === id) !== -1 ? "UnMark as read" : "Mark as read"  } </a>
         </div>
      </div>
    </div> 
  );
}
