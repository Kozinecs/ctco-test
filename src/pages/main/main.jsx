import React from "react";

import Form from "../../components/form/form.component";
import Modal from "../../components/modal/modal.component";

import RENDER_DATA from "../../data/data.json";

import "./main.styles.scss";

class MainPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: RENDER_DATA,
    };

    this.handleValueChange = this.handleValueChange.bind(this);
  }

  handleValueChange = (value, itemIndex, subItemIndex) => {
    let newData = this.state.collections;

    newData.widgets[itemIndex].items[itemIndex].items[subItemIndex].value = value;

    this.setState({
      collections: newData,
    });
  };

  setJson = (json) => {
    this.setState({
      collections: json,
    });
  };

  render() {
    const { collections } = this.state;
    return (
      <div className="container">
        <Modal setJson={this.setJson} />
        {collections.widgets.map(({ id, ...formData }) => (
          <Form
            key={id}
            {...formData}
            changeValue={this.handleValueChange}
          />
        ))}
      </div>
    );
  }
}

export default MainPage;
