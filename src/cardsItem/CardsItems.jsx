import axios from 'axios';
import React from 'react';
import MyCards from '../Cards/MyCards';
import useGetAPI from '../hooks';
import { Context } from '../Context';
import { Button, Row, Col } from 'react-bootstrap';
import './cardsItems.css'
const CardsItems = () => {
    useGetAPI()
    const [disabled, setDisabled] = React.useState(false)
    const [disabledBack, setDisabledBack] = React.useState(true)

    const {
        character,
        pages,
        setCharacter,
        setPages
    } = React.useContext(Context)

    React.useEffect(() => {
        if ( character.info?.pages == pages) {
            setDisabled(true)
        } 
        if(pages == 1){
            setDisabledBack(true)
        }
    }, [pages]);
    


    async function siguiente() {
        setDisabled(true)
        setDisabledBack(true)


        if (character.info.next != null) {
            const response = await axios(character.info.next)

            setCharacter(response.data)
            setPages(pages + 1);
            setTimeout(() => {
                setDisabledBack(false)
                setDisabled(false)
            }, 2000);
        }
    }

    async function atras() {

        if (character.info.prev != null) {
            setDisabled(true)
            setDisabledBack(false)
            const response = await axios(character.info.prev)

            setCharacter(response.data)
            setPages(pages - 1)
            setTimeout(() => {
                setDisabled(false)
                setDisabledBack(true)
            }, 2000);
        }

    }
    return (
        <React.Fragment>
            <div className="buttons">
                <Button disabled={disabledBack} className="bg-success borderz" onClick={atras}>Atras</Button>
                <h1 className="color-title">Rick And Morty</h1>
                <Button disabled={disabled} className="bg-success border" onClick={siguiente}>Siguiente</Button>
            </div>
            <div className="cards">
                {character.results?.map((character) => (
                    <MyCards
                        character={character}
                        key={character.id}
                    />
                        )
                    )
                } 
            </div>
        </React.Fragment>
    );
}

export default CardsItems;