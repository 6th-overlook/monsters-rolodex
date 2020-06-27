import React, { Component } from 'react'

import './SearchableCards.css'
import CardList from '../card-list/CardList.component'
import SearchBox from '../search-box/SearchBox.component'
export default class SearchableCards extends Component {

    state = {
        monsters: [],
        searchKeyword: ""
    };

    async componentDidMount() {
        const usersResponse = await fetch("https://jsonplaceholder.typicode.com/users")
        const users = await usersResponse.json();
        this.setState({ monsters: users });
    }

    updateFilter = e => {
        this.setState({searchKeyword: e.target.value})
    }

    render() {
        return (
            <div className="searchable-cards">
                <SearchBox placeholder="Search Monsters" handleSearch={this.updateFilter}/>
                <CardList monsters={this.state.monsters} searchArg={this.state.searchKeyword}/>
            </div>
        );
    }
}
