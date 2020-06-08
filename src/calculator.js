

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
  constructor(props) {
    super(props);
    this.toggleOperation = this.toggleOperation.bind(this);
  }

  toggleOperation() {
    const newOp = this.props.op;
    this.props.onClick(newOp);
  }

  render () {
    if (this.props.op !== "=") {
      return (
        <button type="button" className="func" onClick={this.toggleOperation}>
          {this.props.op}
        </button>
      );
    }
    else {
      return (
        <button type="button" className="func-b" onClick={this.toggleOperation}>
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

    if (curVal[0] === "-") {
      this.setState({
        val: curVal.substring(1, curVal.length)
      });
    }
    else {
      this.setState({
        val: "-" + curVal
      });
    }
  }

  addHundredths() {
    const curVal = this.state.val;
    this.setState({
      val: String(Number(curVal)/100),
      hasDec: (this.state.val.includes("."))
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

  addDec() {
    if (!this.state.hasDec) {
      this.setState({
        val: this.state.val + ".",
        hasDec: true
      });
    }
  }

  calcOp(op) {
    console.log(op);
  }

  // keep in mind that some math (division so far) isnt exact and can result in
  // crazy crazy decimals, so that might cause the final value when you do math
  // to be off super small values (ones that get formatted to 0.00000000) still
  // have a value just not visably seen.
  render () { // figure out how to switch between CA and C and implement CA
    console.log(this.state.val);
    console.log(this.state.hasDec);

    let formattedNum;
    let decVal;

    // if it was in exponential form, convert to decimal
    if (this.state.val.indexOf("e-") > 0) {
      decVal = String(Number(this.state.val).toFixed(10));
    }
    else {
      decVal = this.state.val;
    }

    if (this.state.val.includes("-") && this.state.val.includes(".")) {
      formattedNum = decVal.substring(0,11); // 9 digits + 1 decimal + 1 sign
    }
    else if (this.state.val.includes("-") || this.state.val.includes(".")) {
      formattedNum = decVal.substring(0,10); // 9 digits + 1 decimal/sign
    }
    else {
      formattedNum = decVal.substring(0,9); // 9 digits
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
          <Op op="/" onClick={this.calcOp} />

          <Num digit="7" onClick={this.addNum} />
          <Num digit="8" onClick={this.addNum} />
          <Num digit="9" onClick={this.addNum} />
          <Op op="x" onClick={this.calcOp} />

          <Num digit="4" onClick={this.addNum} />
          <Num digit="5" onClick={this.addNum} />
          <Num digit="6" onClick={this.addNum} />
          <Op op="-" onClick={this.calcOp} />

          <Num digit="1" onClick={this.addNum} />
          <Num digit="2" onClick={this.addNum} />
          <Num digit="3" onClick={this.addNum} />
          <Op op="+" onClick={this.calcOp} />

          <Num digit="0" onClick={this.addNum} />
          <Dec onClick={this.addDec}/>
          <Op op="=" onClick={this.calcOp} />
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <Calculator />,
  document.getElementById('calculator')
);
