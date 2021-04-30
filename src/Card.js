import React, { Component } from 'react';
import './site.css';




export default class Card extends Component {
    
    render() {
        const profile=this.props;
        
        return (
            <div className="github-profile">
               
                <div className="info">
                     <img src={profile.avatar_url} alt="Person"></img>
                    <div className="name"style={{fontSize:'125%'}}>{profile.name}</div>
                    <div className="company" style={{fontSize:'125%'}}>{profile.company}</div>
                   

                </div>
                
                
               
            </div>
        )
    }
}
