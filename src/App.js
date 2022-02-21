import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import "./App.css"
import ModalPage from './components/ModalPage';




class App extends Component {
  constructor(){
    super()
    this.state={
      actors :[],
      isTheModalOn:false,
      selectedActor:[]

    }
  }

  async componentDidMount(){
    const URL ='https://api.themoviedb.org/3/person/popular?api_key=b476299faf4876eeee6c13a37ea60d0c&language=en'
    
    try {
      
    const resp =  await fetch(URL)
    const data =await resp.json()
    this.setState({actors:data.results})
    

    }catch(err){
      console.log(err)

    }
  

  }

  toggleModal(id){
    this.setState({isTheModalOn:true})
    const selectedActor =  this.state.actors.filter((actor)=> actor.id === id)
    this.setState({selectedActor})
  }

  handalModal = (status) =>{
    this.setState({isTheModalOn:status})
  }
  
  render() {
    const {actors} =this.state
    return (
      <>
      <div className='app'>
        <h1>ACTORS</h1>
        <div className='movies' >
          {actors.map((actor) => {
            const {name,profile_path,id} = actor
            return (
            <div className='actor' onClick={()=>this.toggleModal(id)}>
              <figure>
                <img src={'https://image.tmdb.org/t/p/w500/' + profile_path} className='image-actor'alt='actor' />
              </figure>
              <h3>{name}</h3>
              
              {actor.known_for.map((e)=>{
                return (
                  <h6>
                    {e.title}
                    
                  </h6>


                )

              })}

             
              
              



            </div>
            )
            
          })}

        </div>
        {this.state.isTheModalOn ? <ModalPage handalModal={this.handalModal} dataActor={this.state.selectedActor} /> : null}
      </div>
        
      </>
    );
  }
}

export default App;