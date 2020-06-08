

class Num extends React.Component {
  constructor (props) {
    super(props);
    this.appendNum = this.appendNum.bind(this);
  }

  render () {
    if (this.props.digit !== 0) {
      return (
        <button type="button" className="num" onClick={this.appendNum}>
          {this.props.digit}
        </button>
      );
    }
    else {
      return (
        <button type="button" className="num-z" onClick={this.appendNum}>
          {this.props.digit}
        </button>
      );
    }
  }
}

// short for operator
class Op extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    if (this.props.op !== "=") {
      return <button type="button" className="func">{this.props.op}</button>;
    }
    else {
      return <button type="button" className="func-b">{this.props.op}</button>;
    }
  }
}

class SpOp extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    return <button type="button" className="special-func">{this.props.spOp}</button>;
  }
}

class Dec extends React.Component {
  render () {
    return <button type="button" className="decimal">.</button>;
  }
}

class Calculator extends React.Component {
  constructor (props) {
    super(props);
    this.state = { // will change state names to make it work with everything just val for now for testing purposes
      val: "0"
    };
    this.addNum = this.addNum.bind(this);
  }

  addNum(digit) {
    const curVal = this.state.val;
    if (curVal === "0") {
      this.setState({
        val: digit
      });
    }
    else {
      this.setState({
        val: (curVal + digit)
      });
    }
  }

  render () {
    return (
      <div>
        <div className="screen">
          <p>{this.state.val}</p>
        </div>
        <div className="items">
          <SpOp spOp="C" />
          <SpOp spOp="+/-" />
          <SpOp spOp="%" />
          <Op op="/"/>

          <Num digit="7" onClick={this.addNum} />
          <Num digit="8" onClick={this.addNum} />
          <Num digit="9" onClick={this.addNum} />
          <Op op="x"/>

          <Num digit="4" onClick={this.addNum} />
          <Num digit="5" onClick={this.addNum} />
          <Num digit="6" onClick={this.addNum} />
          <Op op="-"/>

          <Num digit="1" onClick={this.addNum} />
          <Num digit="2" onClick={this.addNum} />
          <Num digit="3" onClick={this.addNum} />
          <Op op="+"/>

          <Num digit="0" onClick={this.addNum} />
          <Dec />
          <Op op="="/>
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <Calculator />,
  document.getElementById('calculator')
);
