

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
  render () {
    if (this.props.op !== "=") {
      return (
        <button type="button" className="func" onClick={this.props.onClick}>
          {this.props.op}
        </button>
      );
    }
    else {
      return (
        <button type="button" className="func-b" onClick={this.props.onClick}>
          {this.props.op}
        </button>
      );
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
      val: "0",
      prev: "None",
      hasDec: false,
      operator: "None"
    };
    this.clearVal = this.clearVal.bind(this);
    this.toggleParity = this.toggleParity.bind(this);
    this.addHundredths = this.addHundredths.bind(this);
    this.addNum = this.addNum.bind(this);
    this.addDec = this.addDec.bind(this);
    this.calcOp = this.calcOp.bind(this);
  }

  clearVal() {
    this.setState({
      val: "0",
      hasDec: false,
    });
  }

  toggleParity() {
    const curVal = this.state.val;
    const newVal = String(Number(curVal) * -1);

    if (("-" + curVal) !== newVal) {
      this.setState({
        val: newVal + "."
      });
    }
    else {
      this.setState({
        val: newVal
      });
    }
  }

  addHundredths() {
    const curVal = this.state.val;
    this.setState({
      val: String(Number(curVal)/100),
      hasDec: true
    });
  }

  addNum(digit) {
    const curVal = this.state.val;
    const absVal = String(Math.abs(Number(curVal)));
    if ((!this.state.hasDec && absVal.length === 9) ||
        (this.state.hasDec && absVal.length === 10)) {
      // do nothing
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
  // Has a weird bug where if at 9 digits you add a decimal point and change to
  // negative, hasDec will stay as true, meaning that you can't add another
  // decimal point ever again but it doens't matter appart from visually
  // because they would not be able to anyways

  // actually scratch that it is an error
  addDec() {
    if (!this.state.hasDec) {
      this.setState({
        val: this.state.val + ".",
        hasDec: true
      });
    }
  }

  calcOp() {

  }

  render () { // figure out how to switch between CA and C and implement CA
    console.log(this.state.val);
    console.log(this.state.hasDec);

    const absVal = Math.abs(Number(this.state.val));
    const number = Number(this.state.val);
    const hasDeci = this.state.hasDec;
    let formattedNum;
    if (number < 0 && hasDeci) {
      formattedNum = "-" + String(absVal).substring(0,10);
    }
    else if (number >= 0 && hasDeci) {
      formattedNum = String(absVal).substring(0,10);
    }
    else if (number < 0 && !hasDeci) {
      formattedNum = "-" + String(absVal).substring(0,9);
    }
    else {
      formattedNum = String(absVal).substring(0,9);
    }

    return (
      <div>
        <div className="screen">
          <p>{formattedNum}</p>
        </div>
        <div className="items">
          <SpOp spOp="C" onClick={this.clearVal} />
          <SpOp spOp="+/-" onClick={this.toggleParity} />
          <SpOp spOp="%" onClick={this.addHundredths} />
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
          <Op op="+" onClick={this.calcOp} />

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
