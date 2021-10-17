import React from 'react'
import { useGetTopAnimeQuery } from '../services/animeApi'
import AnimeCards from './AnimeCards'
import Loader from './Loader'

const TopAnime = () => {
    
    const { data, isFetching } = useGetTopAnimeQuery()
    const top = data

    if(isFetching) return <Loader />
    return (
        <div className='py-4'>
            <label className="block text-gray-600 text-xl font-semibold py-2">
                Top Anime
            </label>
            <AnimeCards animeQuery={top?.top} />
        </div>
    )
}

export default TopAnime