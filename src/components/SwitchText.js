import React from 'react'

class SwitchText extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.edit) {
      return (<input id={this.props.id} type="text" className="switch-text" value={this.props.content} onChange={this.props.handleChange} name={this.props.name}/>)
    } else {
      return(<span>this.props.content</span>)
    }
  }
}

export default SwitchText;