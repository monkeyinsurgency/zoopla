import React, {Component} from 'react';
import Property from '../Properties/Property';

class ResultsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cursor: 0,
      properties: props.properties
    };
  }

  handleKeyPress(e) {
    const {cursor, properties} = this.state;
    // arrow up/down button should select next/previous list element
    if (e.keyCode === 38 && cursor > 0) {
      this.setState(prevState => ({
        cursor: prevState.cursor - 1
      }));
    } else if (e.keyCode === 40 && cursor < properties.length - 1) {
      this.setState(prevState => ({
        cursor: prevState.cursor + 1
      }));
    }
  }

  componentDidMount() {
    document.addEventListener("keypress", this.handleKeyPress.bind(this));
  }

  render() {
    const {cursor, properties} = this.state;
    return (
      <div>
        <input autoFocus={true} className={`d-none`} />
        <ul className={`property-results px-0`} id={"results-list"}>
          {properties.map((item, index) => (
            <Property key={index} {...item} activate={cursor === index ? 'active' : ''} tabIndex={index}
                      onKeyDown={this.handleKeyPress}/>
          ))}
        </ul>
      </div>
    );
  }
}

export default ResultsList;
