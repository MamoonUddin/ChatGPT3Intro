import React  from "react";


export default function Article({ imgUrl, date, text }) {
  return (
    <div className="w-full h-full flex flex-col bg-blue-950">
    <div className="w-full h-full bg-blue-850">
      <img className= "w-full h-full"src={imgUrl} alt="blog_image" />
    </div>
    <div className="flex flex-col justify-between py-4 px-6 h-full ">
      <div>
        <p>{date}</p>
        <h3>{text}</h3>
      </div>
      <p>Read Full Article</p>
    </div>
  </div>
  )
}