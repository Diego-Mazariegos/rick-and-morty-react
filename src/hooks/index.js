import React from 'react';
import axios from 'axios';
import {Context} from '../Context/index';
const API = 'https://rickandmortyapi.com/api/character/'

const useGetAPI = () => {
    const {
        character,
        setCharacter
    } = React.useContext(Context)

    React.useEffect(() => {
        async function getData() {
            const response = await axios(API);
            setCharacter(response.data)
        }

        getData()
    }, [])

    return character;
}

export  default useGetAPI;
