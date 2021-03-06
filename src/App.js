import React, { Component } from "react";
import StarWarsCard from "./components/StarWarsCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friendAndFoe from "./friendAndFoe.json";

class App extends Component {
  // Setting this.state.friendAndFoe to the friendAndFoe json array
  state = {
    friendAndFoe,
    score: 0,
    selections: [],
    status: ""
  };

  // shuffle code inspired by @BetonMAN
  ShuffleCharacters = () => {
    const shuffleArray = this.state.friendAndFoe
      .map(a => [Math.random(), a])
      .sort((a, b) => a[0] - b[0])
      .map(a => a[1]);
    this.setState({ friendAndFoe: shuffleArray });
  };

  // handleIncrement increases this.state.count by 1
  handleIncrement = () => {
    // We always use the setState method to update a component's state
    this.setState({ score: this.state.score + 1 });
  };

  // check image
  handleImageClick = id => {
    console.log(id);
    // create array variable

    // check existing array for id to see if it is listed
    if (this.state.selections.indexOf(id) === -1) {
      this.setState({ status: "You guessed correctly" });
      this.ShuffleCharacters();
      this.handleIncrement();
      var imageArray = this.state.selections;
      imageArray.push(id);
      this.setState({ selections: imageArray });
    } else {
      this.setState({ status: "Game Over", score: 0, selections: [] });
    }
  };

  render() {
    return (
      <div className = "top">
        <Title />
        <h3>Score: {this.state.score}</h3>

        <p className="lead">{this.state.status}</p>
        <Wrapper>
          {this.state.friendAndFoe.map(theForce => (
            <StarWarsCard
              imageFunction={this.handleImageClick}
              id={theForce.id}
              key={theForce.id}
              name={theForce.name}
              image={theForce.image}
            />
          ))}
        </Wrapper>
      </div>
    );
  }
}

export default App;
