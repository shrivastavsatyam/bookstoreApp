import React from 'react'
import List from "../../public/List.json";
import Cards from "./Cards";
import {Link} from "react-router-dom"

function Course() {
  
  return (
    <>
    <div className=" pt-28 max-w-screen-2xl container mx-auto md:px-20 px-4">
      <div className="mt-22 item-center justify-center text-center">
        <h1 className="text-2xl text-4xl">
          we're delighted to have you<span className="text-pink-500">Here!:)</span>
        </h1>
      <p className="mt-12 ">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam temporibus quis ipsa.
         Ullam nostrum suscipit odit minus cum illo accusantium corrupti in libero iusto!
         Adipisci ipsa veniam fugit nihil eos?Lorem ipsum dolor sit amet consectetur adipisicing elit.
         Ullam temporibus quis ipsa.Lorem ipsum dolor sit amet consectetur adipisicing elit.
         Ullam temporibus quis ipsa. adipisicing elit. Ullam temporibus quis ipsa.
      </p>
       <Link to="/">
        <button className=" mt-6 bg-pink-500 text-white px-4 px-2 rounded-md hover:bg-pink-700 duration-300"> 
         Back
        </button>
       </Link>
      </div>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
        {
          List.map((item)=>(
            <Cards key={item.id} item={item} />
          ))
        }
      </div>
    </div>
    </>
    
  )
}

export default Course