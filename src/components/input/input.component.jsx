import React from "react";

import "./input.styles.scss";

class Input extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "",
      symbol: this.props.symbol
        ? this.props.symbol.toUpperCase() === "EUR"
          ? "€ "
          : ""
        : "",
      precision: this.props.precision,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  parseValue = (value, withState = false) => {
    if (this.props.type === "currency") {
      if (this.state.precision) {
        if (withState) {
          this.setState({
            value: parseFloat(value).toFixed(this.state.precision),
          });
        } else {
          return parseFloat(value);
        }
      } else {
        if (withState) {
          this.setState({ value: parseInt(value) });
        } else {
          return parseInt(value);
        }
      }
    } else {
      if (withState) {
        this.setState({ value: value });
      } else {
        return value;
      }
    }
  };

  componentDidMount() {
    this.parseValue(this.props.value, true);
  }

  render() {
    return (
      <div className="our-input">
        <label htmlFor="">{this.props.label}</label>
        <div className="input-field-sign">
          <i className="sign">{this.props.symbol === "EUR" ? "€" : ""}</i>
          <input
            type="text"
            required={this.props.required}
            style={!this.props.symbol ? { paddingLeft: 8 } : null}
            onChange={(event) => this.setState({ value: event.target.value })}
            value={this.state.value}
            onBlur={(event) => {
              this.parseValue(event.target.value, true);
              this.props.changeValue(
                event.target.value,
                this.props.itemIndex,
                this.props.subItemIndex
              );
            }}
          />
        </div>
      </div>
    );
  }
}

export default Input;
