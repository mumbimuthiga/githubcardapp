import './App.css';
import './site.css';

import axios from 'axios';
import React from 'react';
//const testData=[
//    {
//        name:"Veronica mumbi",
//        avatar_url: "https://avatars.githubusercontent.com/u/40498677?v=4",
//        company: null
//    },
//    {
//        name:"joychristine",
//        avatar_url: "https://avatars.githubusercontent.com/u/57414671?v=4",
//        company: null
//    },
//    {
//        name:"Martin Jansen",
//        avatar_url: "https://avatars.githubusercontent.com/u/5277?v=4",
//        company: "Bauer + Kirch GmbH"
//    }

        
//]




const CardList = (props) => {
    return (
        <div className="CardList">
            {props.profile.map(profile=> <Card {...profile}></Card>)}

            
          
            
        </div>
    )
}
 class Card extends React.Component {
    
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
 class Form extends React.Component {
     state={username:''};
     userInput=React.createRef();
     handleSubmit=async (e)=>{
         e.preventDefault();
         const resp=await
          axios.get(`https://api.github.com/users/${this.state.username}`)
         this.props.onSubmit(resp.data);
         this.setState({username:''});

     }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
        <input type="text"
         placeholder="Github Username" 
         ref={this.userInput}
        onChange={(e=>this.setState({username:e.target.value}))}
        value={this.state.username}
          ></input>
        <button>Add Card</button>

            </form>
        )
 }
}
 class App extends React.Component {
    // constructor(props){
    //     super(props);
    //     this.state={
    //         profile:testData
    //        };
    state={
        profile:[]
    }
    addNewProfile=(profileData)=>{
        this.setState(prevState=>({
            profile:[...prevState.profile,profileData]

        }))

        console.log('App' ,profileData)
    }
     
     render(){
        return (
            <div>
                <div className="header">
                  <h1>The Github Cards App</h1>
        
                </div>
                <Form onSubmit={this.addNewProfile}></Form>
                <CardList profile={this.state.profile}></CardList>
                
                
             
            </div>
          )


     }
    }
        
   export default App;  
   
  


