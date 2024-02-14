import axios from 'axios';
import React, { useEffect, useState } from 'react';
// import {Mdchvernright, Mdchvernleft} from '@mui/icons-material';


const Homelist = ({title, FETCHURL}) => {
    const [moviest, setmoviest]= useState([]);
    useEffect(()=>{
        axios.get(FETCHURL)
        .then((res) => {
      setmoviest(res.data.results);
        })
          
          // setmovies(json.results);
        
        .catch(err => console.error('error:' + err));
      }, [FETCHURL])
      console.log(moviest);

  return (
    <>
      <h1 className='text-blue-200  md:text-2xl p-5'>{title}</h1>
      <div className='relative flex item-center'>
        {/* <div className=''><Mdchvernleft className='text-white rounded-full bg-blue-400 p-4'/> */}
        <div id ={'slider'} className='w-full h-full overflow-x-scroll scroll-smooth whitespace-nowrap scrollbar-hide relative'>
            {moviest.map((items, id)=>(
<div className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[260px] inline-block cursor-pointer transition-transform  relative top-0 left-0 p-2  '>
<img  src={`https://image.tmdb.org/t/p/w500/${items?.backdrop_path}`} className='w-full animate-spin overflow-x-auto h-auto hover:scale-110 block' alt={items?.title}/>

<div className='w-full absolute top-5 left-0 text-white opacity-0 hover:opacity-100 font-bold'>
<p className='h-full text-sm items-center flex justify-center'>{items?.title}</p>
</div>

</div>
            ))}



        </div>
        {/* <Mdchvernright className="h-5 w-5 text-blue-500 right-0 " /> */}
        {/* </div> */}
      </div>
    </>
  );
}


export default Homelist;
