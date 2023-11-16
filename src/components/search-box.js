import React, { Component } from "react";
import ReactSearchBox from "react-search-box";

export default class App extends Component {
  data = [
    {
      key: "john",
      value: "John Doe",
    },
    {
      key: "jane",
      value: "Jane Doe",
    },
    {
      key: "mary",
      value: "Mary Phillips",
    },
    {
      key: "robert",
      value: "Robert",
    },
    {
      key: "karius",
      value: "Karius",
    },
  ];

  render() {
    return (
      <ReactSearchBox
        placeholder="Search book collection"
        value="Book"
        data={book.data}
        callback={(record) => console.log(record)}
      />
    );
  }
}