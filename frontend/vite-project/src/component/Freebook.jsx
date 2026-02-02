import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from "./Cards";
import axios from "axios";
import List from "../../public/list.json";

function Freebook() {

    const [books, setBooks] = useState([]);
    const [filteredBooks, setFilteredBooks] = useState([]); 
  // fetch data from backend
  useEffect(() => {
    const fetchBooks = async () => {
      const res = await axios.get("http://localhost:4001/book");
      console.log(res.data);
      setBooks(res.data.data);   // real DB data
    };

    fetchBooks();
  }, []);
  const filterData=books?.filter((data)=> data.category==="Free");

   var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
   }; 

  return (
    <>
    <div className="max-w-screen-2xl mx-auto md:px-20 px-4 ">
       <div>
        <h1 className="font-semibold text-xl pb-2">
            Free offered courses
        </h1>   
         <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus non, autem, enim id doloremque incidunt,
            quasi asperiores quisquam tempora fuga Placeat aliquid nulla itaque! In itaque laboriosam repellat! Quod? !
         </p>
       </div> 
  
    <div>
      <Slider {...settings}>
        {filterData.map((item)=> (
            <Cards item={item} key={item._id}/>
        )) }
      </Slider>

    </div>
   </div>
  </>
 );
}

export default Freebook;

