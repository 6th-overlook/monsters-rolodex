import React from 'react'
import './CardList.css'
import CustomCard from '../card/CustomCard.component'


export default function
    CardList({ monsters, searchArg }) {
    const filteredList = monsters.filter((monster) => monster.name.toLowerCase().includes(searchArg.toLowerCase()))
    return (
        <div className="card-list">
            {
                filteredList.map((monster) =>
                    <CustomCard key={monster.id} monster={monster} />
                )
            }
        </div>
    )
}
