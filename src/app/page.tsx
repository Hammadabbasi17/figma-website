"use client";
import Image from "next/image";
import { CiSearch } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa";
import { IoIosContact } from "react-icons/io";
import { MdOutlineShoppingCart } from "react-icons/md";
import pic from '../../image/pic.png.png'
export default function Home() {
  return (
    <div>
      <div className="w-full h-[134px] bg-mehndi flex justify-between items-center ">
        <h1 className="text-6xl  ml-[36px] text-white font-Rye font-[400]">Manzzari</h1>
        <form className="flex justify-center ">
          <input className="w-[800px]  p-[10px] rounded-[10px]" type="search" placeholder="Search for Gold Jewellery, Diamond Jewellery and more…">
          
          </input>
            <CiSearch className="text-3xl ml-[-33px] mt-2"/>
        </form>


       <div className="flex gap-6 mr-[36px] text-3xl text-white">
        <FaRegHeart/>
        <IoIosContact/>
        <MdOutlineShoppingCart/>
          </div>
      </div>





    <div className="w-full h-[800px] flex justify-around items-center">
      <div>
        <h1 className="w-[496px] text-black font-[400] text-[40px] font-libre">IMPECCABLE CRAFTSMANSHIP AND FINESSE</h1>
        <h3 className="font-libre w-[550px] h-[130px]  font-[500] text-[20px]">An example of intricate workmanship and detail, elegant necklaces and long and short chains form a part of our desirable collection.</h3>
      <button className="font-libre w-[160px] p-[10px] bg-mehndi text-white">Explore Now</button>
      
      </div>



      <div>
      <Image
      src={pic}
      alt="blur"
      
      />

     
      </div>

    </div>







    </div>
  );
}
