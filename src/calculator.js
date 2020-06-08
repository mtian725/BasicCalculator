

class Num extends React.Component {
  constructor (props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  // temp to check that it works
  handleChange() {
    const newNum = this.props.digit;
    this.props.onClick(newNum);
  }

  render () {
    if (this.props.digit !== 0) {
      return (
        <button type="button" className="num" onClick={this.handleChange}>
          {this.props.digit}
        </button>
      );
    }
    else {
      return (
        <button type="button" className="num-z" onClick={this.handleChange}>
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
      val: 0
    };
    this.changeVal = this.changeVal.bind(this);
  }

  //temporary to check to make sure buttons work
  changeVal(newVal) {
      this.setState({
        val: newVal
      });
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

          <Num digit={7} onClick={this.changeVal} />
          <Num digit={8} onClick={this.changeVal} />
          <Num digit={9} onClick={this.changeVal} />
          <Op op="x"/>

          <Num digit={4} onClick={this.changeVal} />
          <Num digit={5} onClick={this.changeVal} />
          <Num digit={6} onClick={this.changeVal} />
          <Op op="-"/>

          <Num digit={1} onClick={this.changeVal} />
          <Num digit={2} onClick={this.changeVal} />
          <Num digit={3} onClick={this.changeVal} />
          <Op op="+"/>

          <Num digit={0} onClick={this.changeVal} />
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
