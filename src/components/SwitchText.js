import React from 'react'

class SwitchText extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''}
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value})
  }

  render() {
    if (this.props.edit) {
      return (<input type="text" value={this.state.value} onChange={this.handleChange}/>)
    } else {
      return(<span>{this.state.value}</span>)
    }
  }
}

export default SwitchText;