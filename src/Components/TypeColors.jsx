import React from 'react'

const TypeColors = ({ pokemon }) => {
    return (
        <>
            {pokemon?.types.map(typeInfo => (
                <li className={`type_pokemon_card type-${typeInfo.type.name}`} key={typeInfo.type.url}>
                    {typeInfo.type.name}
                </li>
            ))}
        </>
    )
}

export default TypeColors
