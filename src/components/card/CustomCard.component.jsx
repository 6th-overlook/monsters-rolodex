import React from 'react'
import { Card } from 'antd'
import './CustomCard.css'
const { Meta } = Card;
export default function CustomCard({monster}) {
    return (
        <div> <Card
            hoverable
            style={{ width: 240 }}
            cover={<img alt="monster" src={`https://robohash.org/${monster.id}?set=set2&size=500x500`} />}
        >
            <Meta title={monster.name} description={monster.email} />
        </Card>
        </div>
    )
}
