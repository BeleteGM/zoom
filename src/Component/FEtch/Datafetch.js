import axios from 'axios';
import { useEffect, useState } from 'react';
import Request from '../../Request';


const Datafetch = () => {
  const [movies, setmovies]= useState([]);

  const movie = movies[Math.floor(Math.random() * movies.length)];



  // const fetch = require('node-fetch');

  
useEffect(()=>{
  axios.get(Request.requestpopular)
  .then((res) => {
setmovies(res.data.results);
  })
    
    // setmovies(json.results);
  
  .catch(err => console.error('error:' + err));
}, [])
console.log(movie);

const collapsestring= (string, number)=>{
  if(string?.length>number){
    return  string.slice(0,number) + "...";
  }
  else{
    return string;
  }
}


  return (
    <div className='w-full h-[850px]  top-0 left-0' >
    <div className='w-full h-full bg-gradient-to-r from-black '>  <img src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} className='' alt={movie?.title}/></div>
      
      <div className='absolute top-[20%] h-[550] w-full '>
      <p className=' px-10 py-0 text-white font-bold  text-2xl md:text-5xl'>{movie?.title}</p>
      <button className='bg-emerald-950 text-black-300  m-10 px-6 py-3 rounded'> play</button>
      <button className='px-6 py-3 rounde bg-amber-100'>watch Later</button>
      <div className='px-10 py-0 text-inherit font-bold  text-3xl opacity-30'><p>Relase date: {movie?.release_date}</p></div>
      <p className='w-full text-gray-200 md:max-w-[70%] lg:max-w-[50%] text-center xl-max-w-[35%] ml-10'>{collapsestring(movie?.overview, 221)}</p>
      </div>
    </div>
  );
}

export default Datafetch;
