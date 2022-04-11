import React from 'react';

const Context = React.createContext()

function Provider(props){
    const [character, setCharacter] = React.useState([]);
    const [pages, setPages] = React.useState(1)
    return (
        <Context.Provider
            value={{
                character,
                setCharacter,
                pages,
                setPages
            }}
        >
            {props.children}
        </Context.Provider>
    )
}

export  {Context, Provider}