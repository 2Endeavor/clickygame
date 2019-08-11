import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";



class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
    score: 0,
    selections: [],
    status: ""

  };

  // shuffle code inspired by @BetonMAN
  ShuffleCharacters = () => {
    const shuffleArray = this.state.friends
      .map(a => [Math.random(), a])
      .sort((a, b) => a[0] - b[0])
      .map(a => a[1]);
    this.setState({friends: shuffleArray});
   
  };


    // handleIncrement increases this.state.count by 1
    handleIncrement = () => {
      // We always use the setState method to update a component's state
      this.setState({score: this.state.score + 1 });
    };

  // check image
  handleImageClick=id =>{
    console.log(id);
    // create array variable
    
    // check existing array for id to see if it is listed
    if (this.state.selections.indexOf(id) === -1) {
      this.setState({status: "You guessed correctly"});
      this.ShuffleCharacters()
      this.handleIncrement()
      var imageArray = this.state.selections;
      imageArray.push(id);
      this.setState({selections: imageArray});

    }else{
      this.setState({status: "Game over!",
                    score: 0,
                    selections: []
                     })
    }
  }

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <nav>
          <div className="row">
            {/* <div className="jumbotron jumbotron"> */}
              <h1>Score: {this.state.score}</h1>
              <div className="container">
                {/* <h1 className="display-4">Fluid jumbotron</h1> */}
                <Title>Clicky Game</Title>
                <p className="lead">
                  {this.state.status}
                </p>
              </div>
            {/* </div> */}
          </div>
        </nav>
        <div className="row">
          <div>
            {this.state.friends.map(theForce => (
              <FriendCard
                imageFunction={this.handleImageClick}
                id={theForce.id}
                key={theForce.id}
                name={theForce.name}
                image={theForce.image}

              />
            ))}
          </div>
        </div>
      </Wrapper>
    );
  }
}

export default App;
