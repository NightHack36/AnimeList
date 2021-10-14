import React from 'react'
import { useParams } from 'react-router'
import { useGetAnimeQuery } from '../services/animeApi'

const AnimeDetails = () => {
    const { mal_id } = useParams()
    const { data, isFetching } = useGetAnimeQuery(mal_id)

    const animeDetails = data

    if(isFetching) return 'Loading...'
    console.log(animeDetails)

    return (
        <div>
            <h1 className='text-3xl'>
                {animeDetails.title}
            </h1>
        </div>
    )
}

export default AnimeDetails