import { Component } from "react";
import General from "./General"
import Education from "./Education"

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {edit: true}
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState(prevState => ({
      edit: !prevState.edit
    })); 
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <General edit={this.state.edit}/>
          <Education edit={this.state.edit}/>
          <input type="submit" value="Submit"/>
        </form>
      </div>
    );
  }
}

export default App;
