

class Num extends React.Component {
  constructor (props) {
    super(props);
    this.appendNum = this.appendNum.bind(this);
  }

  appendNum() {
    const newNum = this.props.digit;
    this.props.onClick(newNum);
  }

  render () {
    if (this.props.digit !== "0") {
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
  render () {
    return (
      <button type="button" className="special-func" onClick={this.props.onClick}>
        {this.props.spOp}
      </button>
    );
  }
}

class Dec extends React.Component {
  render () {
    return (
      <button type="button" className="decimal" onClick={this.props.onClick}>
        .
      </button>
    );
  }
}

class Calculator extends React.Component {
  constructor (props) {
    super(props);
    this.state = { // will change state names to make it work with everything just val for now for testing purposes
      val: "0"
    };
    this.clearVal = this.clearVal.bind(this);
    this.toggleParity = this.toggleParity.bind(this);
    this.addNum = this.addNum.bind(this);
    this.addDec = this.addDec.bind(this);
  }

  clearVal() {
    this.setState({
      val: "0",
      hasDec: false
    });
  }

  toggleParity() {
    const curVal = this.state.val;
    this.setState({
      val: String(Number(curVal) * -1)
    });
  }

  addNum(digit) {
    const curVal = this.state.val;
    const absVal = Math.abs(curVal);
    if ((absVal.length === 9) || (this.state.hasDec && absVal.length === 10)) {
      //this.setState({ //do nothing
      //  val: curVal,
      //  hasDec: false
      //});
      //see if things go wrong
    }
    else if (curVal === "0") {
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

  addDec() {
    if (!hasDec) {
      this.setState({
        val: this.state.val + ".",
        hasDec: true
      });
    }
  }

  render () {
    console.log(this.state.val);
    console.log(this.state.hasDec);
    return (
      <div>
        <div className="screen">
          <p>{this.state.val}</p>
        </div>
        <div className="items">
          <SpOp spOp="C" onClick={this.clearVal}/> // figure out how to switch between CA and C and implement CA
          <SpOp spOp="+/-" onClick={this.toggleParity}/>
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
          <Dec onClick={this.addDec}/>
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
