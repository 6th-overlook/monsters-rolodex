import React from 'react'
import './SearchBox.css'
import { Input } from 'antd';
export default function SearchBox({ placeholder, handleSearch}) {
    return (
        <div className="search-box">
            <div className="search-bar">
                <Input placeholder={placeholder} onChange={handleSearch}/>
            </div>
        </div>
    )
}
