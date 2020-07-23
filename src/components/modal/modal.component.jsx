import React from "react";

import "./modal.styles.scss";

class Modal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      link: "",
      data: "",
    };
  }

  toggleModal = (event) => {
    event.preventDefault();
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };

  inputValue = (event) => {
    this.setState({
      link: event.target.value,
    });
  };

  fetchJSON = (event) => {
    event.preventDefault();
    fetch(this.state.link)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.props.setJson(data);
        this.setState({
          data: data,
        });
      })
      .catch((err) => console.log(err));
  };


  render() {
    return (
      <div>
        <button className="fetch-button" onClick={this.toggleModal}>
          Fetch JSON
        </button>
        {this.state.isOpen && (
          <div className="modal">
            <div className="modal-content">
              <button className="btn-close" onClick={this.toggleModal}>Close</button>
              <form onSubmit={this.fetchJSON}>
                <label>Input link to fetch JSON</label>
                <input
                  type="text"
                  onChange={this.inputValue}
                  value={this.state.link}
                />
                <button type="submit">Fetch</button>
              </form>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Modal;
