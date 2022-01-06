import { clear } from "@testing-library/user-event/dist/clear";
import React from "react";
import { useEffect, useState } from "react";

class CountDown extends React.Component {
  state = {
    count: 16,
  };
  componentWillUnmount() {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({
        count: this.state.count - 1,
      });
    }, 1000);
  }
  componentDidUpdate(preProps, preState) {
    if (preState.count !== this.state.count && this.state.count === 0) {
      if (this.timer) {
        clearInterval(this.timer);
        // this.props.TimeUp();
      }
    }
  }
  render() {
    return <> {this.state.count} class</>;
  }
}

const NewCountDown = (props) => {
  const [count, setCount] = useState(15);
  useEffect(() => {
    if (count === 0) {
      props.TimeUp();
      return;
    }
    let timer = setInterval(() => {
      setCount(count - 1);
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, [count]);
  return <>{count} hook</>;
};

export { NewCountDown, CountDown };
