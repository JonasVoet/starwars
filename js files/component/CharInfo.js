import React, { Component } from 'react'
import Axios from "axios"

class CharInfo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            // So the list does not show yet!
            expanded: false,
            species: []
        }

        this.openInfoBox = this.openInfoBox.bind(this);
        this.closeInfoBox = this.closeInfoBox.bind(this);
    }

    openInfoBox() {
        this.setState({ expanded: !this.state.expanded })
    }

    closeInfoBox() {
        this.setState({ expanded: !this.state.expanded })
    }

    componentDidMount() {
        this.props.charInfo.species.map(url => {
            return Axios.get(url).then(result => {
                this.setState({
                    species: [...this.state.species, result.data]
                });
            });
        });
    }

    render() {
        const info = this.props.charInfo;

        if (!this.state.expanded) {
            return <p className="btn btn-info" onClick={this.openInfoBox}>Show Info</p>
        }
        const species = this.state.species.map(res => {
            return (
                <li key={Math.random()}><h2>Species: {res.name}</h2></li>
            );
        });
        return (
            <div className="character-details">
                <p className="btn btn-danger" onClick={this.closeInfoBox}>Hide Info</p>
                <ul>
                    <li><h2>Gender: {info.gender}</h2></li>
                    <li><h2>Birth year: {info.birth_year}</h2></li>
                    <li><h2>Hair color: {info.hair_color}</h2></li>
                    <li><h2>Eye color: {info.eye_color}</h2></li>
                    <li><h2>Height: {info.height} CM</h2></li>
                    {species}
                </ul>
            </div>
        )
    }
}

export default CharInfo
