import React from 'react'
import './TitlePane.css'
import {Divider, Typography} from 'antd'

export default function TitlePane({ title }) {
    return (
        <div className="title-pane">
            <div className="title">
                {title}
            </div>
                
            <Divider className="black-divider" />
        </div>
    )
}
