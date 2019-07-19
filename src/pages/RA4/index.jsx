import React from "react";
import "./style.scss";

class RA4 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ""
    };
  }
  handleInputChange(e) {
    console.log(e.currentTarget)
    console.log(e.target)
    console.log(e)
    console.log(e.persist())
    this.setState({
      name: e.target.value
    });
  }
  render() {
    return (
      <form action="">
        123
        <h2>{this.state.name}</h2>
        <input
          name="someUniqueName"
          type="file"
          className="file"
          value={this.state.someState}
          onChange={(e) =>this.handleInputChange(e)}
        />
      </form>
    );
  }
}

export default RA4;
