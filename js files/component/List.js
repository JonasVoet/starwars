import React, { Component } from "react";
import CharInfo from "./CharInfo";

class List extends Component {
    render() {
        const people = this.props.people;

        return (
            <div className="grid-container">
              {
              people.map((p) => {
                  return (
                    <div className="person-names" key={p.url}>
                      <h3 className="char-name">{p.name}</h3> 
                      <CharInfo charInfo={p} /> 
                    </div>
                  )
                })
              }
            </div>
            );
        }
      }
      
      export default List; 