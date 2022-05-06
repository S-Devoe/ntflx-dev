import Image from "next/image"
import { useEffect, useState } from "react"
import {FaPlay} from 'react-icons/fa'
import { Movie } from "../typings"
import {baseUrl} from '../constants/movie'
import { InformationCircleIcon } from "@heroicons/react/solid"
import { useRecoilState } from "recoil"
import { modalState, movieState } from "../atoms/modalAtom"



interface Props{
  netflixOriginals: Movie[]
}

function Banner({netflixOriginals}:Props) {
  const [showModal, setShowModal] = useRecoilState(modalState)
  const [currentMovie, setCurrentMovie] = useRecoilState(movieState)
  const [movie, setMovie] = useState<Movie | null>(null)

  // console.log(currentMovie)
  useEffect(()=>{
    setMovie(netflixOriginals[Math.floor(Math.random() * netflixOriginals.length)])
  },[netflixOriginals])

  return (
    <div className="flex flex-col space-y-2 py-16 md:space-y-4 lg:h-[68vh] lg:justify-end lg:pb-8">
        <div className="absolute top-0 left-0 h-[95vh] w-screen -z-10">
            <Image src={`${baseUrl}${movie?.backdrop_path || movie?.poster_path}`} 
            layout='fill'
            objectFit="cover"/>
        </div>
        <h1 className="text-2xl lg:text-4xl md:text-3xl font-bold">{movie?.title || movie?.name || movie?.original_name}</h1>
        <p className="max-w-sm text-xs text-shadow-md md:max-w-lg md:text-lg lg:max-w-2xl lg:text-1xl">{movie?.overview}</p>
        <div className="flex space-x-3">
          <button className="bannerButton bg-white text-black">
          <FaPlay className="h-4 w-4 text-black md:h-7 md:w-7" />
           Play
          </button>
          <button className="bannerButton bg-[gray]/70"
          onClick={()=>{
            setShowModal(true)
            setCurrentMovie(movie)
          }}>
            More Info
             <InformationCircleIcon className="h-5 w-5 md:h-6 md:w-8"/> 
          </button>
        </div>
    </div>
  )
}
export default Banner