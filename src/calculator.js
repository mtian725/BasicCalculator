

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
    this.toggleEqualOperation = this.toggleEqualOperation.bind(this);
  }

  toggleOperation() {
    const newOp = this.props.op;
    this.props.onClick(newOp);
  }

  toggleEqualOperation() {
    this.props.onClick();
  }

  render () {
    if (this.props.op !== "=") {
      return (
        <button type="button" className={(this.props.currOp === this.props.op) ? "func-selected" : "func"} onClick={this.toggleOperation}>
          {this.props.op}
        </button>
      );
    }
    else {
      return (
        <button type="button" className={(this.props.currOp === this.props.op) ? "func-b-selected" : "func-b"} onClick={this.toggleEqualOperation}>
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
      totalval: "0",
      val: "0",
      hasDec: false,
      operator: "None",
      awaitInput: true,
      isError: false,
    };
    this.clearVal = this.clearVal.bind(this);
    this.toggleParity = this.toggleParity.bind(this);
    this.addHundredths = this.addHundredths.bind(this);
    this.addNum = this.addNum.bind(this);
    this.addDec = this.addDec.bind(this);
    this.calcOp = this.calcOp.bind(this);
    this.equalOp = this.equalOp.bind(this);
  }

  clearVal() {
    if (this.state.val === "0" || !(this.state.awaitInput) || this.state.isError) {
      this.setState({
        totalval: "0",
        val: "0",
        hasDec: false,
        operator: "None",
        awaitInput: true,
        isError: false,
      })
    }
    else if (this.state.operator === "None") { // Only None if and only if no operation has been executed or = has been called
      this.setState({
        totalval: "0",
        val: "0",
        hasDec: false,
      })
    }
    else {
      this.setState({
        val: "0",
        hasDec: false
      });
    }
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
    if (this.state.awaitInput) {
      this.setState({
        val: digit,
        awaitInput: false,
        isError: false,
      });
    }
    else {
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
    if (!(this.state.isError)) {
      if (this.state.awaitInput) {
        this.setState({
          operator: op,
        });
      }
      else {
        let newVal;
        let hasEr = false;

        if (this.state.operator === "+") {
          newVal = String(Number(this.state.totalval) + Number(this.state.val));
        }
        else if (this.state.operator === "/") {
          if (Number(this.state.val) === 0) {
            newVal = "Div By 0";
            hasEr = true;
          }
          else {
            newVal = String(Number(this.state.totalval) / Number(this.state.val));
          }
        }
        else if (this.state.operator === "x") {
          newVal = String(Number(this.state.totalval) * Number(this.state.val));
        }
        else if (this.state.operator === "-") {
          newVal = String(Number(this.state.totalval) - Number(this.state.val));
        }
        else {
          newVal = this.state.val;
        }

        // "Div By 0" when compared in this situation with alwasy return false
        if (newVal > 999999999) {
          newVal = "Overflow"
          hasEr = true;
        }
        if (newVal < -999999999) {
          newVal = "Underflow"
          hasEr = true;
        }

        if (hasEr) {
          this.setState({
            isError: true,
            val: newVal,
            awaitInput: true
          });
        }
        else if (this.state.operator === "+") {
          this.setState({
            operator: op,
            totalval: newVal,
            val: newVal,
            awaitInput: true
          });
        }
        else if (this.state.operator === "/") {
          this.setState({
            operator: op,
            totalval: newVal,
            val: newVal,
            awaitInput: true
          });
        }
        else if (this.state.operator === "x") {
          this.setState({
            operator: op,
            totalval: newVal,
            val: newVal,
            awaitInput: true
          });
        }
        else if (this.state.operator === "-") {
          this.setState({
            operator: op,
            totalval: newVal,
            val: newVal,
            awaitInput: true
          });
        }
        else {
          this.setState({
            operator: op,
            totalval: newVal,
            awaitInput: true
          });
        }
      }
    }
  }

  equalOp() {
    if (!(this.state.isError)) {
      // assuming not doing short hand operation, where = is the terminating operation
      let newVal;
      let hasEr = false;

      if (this.state.operator === "+") {
        newVal = String(Number(this.state.totalval) + Number(this.state.val));
      }
      else if (this.state.operator === "/") {
        if (Number(this.state.val) === 0) {
          newVal = "Div By 0";
          hasEr = true;
        }
        else {
          newVal = String(Number(this.state.totalval) / Number(this.state.val));
        }
      }
      else if (this.state.operator === "x") {
        newVal = String(Number(this.state.totalval) * Number(this.state.val));
      }
      else if (this.state.operator === "-") {
        newVal = String(Number(this.state.totalval) - Number(this.state.val));
      }
      else {
        newVal = this.state.val;
      }

      // "Div By 0" when compared in this situation with alwasy return false
      if (newVal > 999999999) {
        newVal = "Overflow"
        hasEr = true;
      }
      if (newVal < -999999999) {
        newVal = "Underflow"
        hasEr = true;
      }

      if (hasEr) {
        this.setState({
          isError: true,
          val: newVal,
          awaitInput: true
        });
      }
      else if (this.state.operator === "+") {
        this.setState({
          operator: "None",
          val: newVal,
          awaitInput: true
        });
      }
      else if (this.state.operator === "/") {
        this.setState({
          operator: "None",
          val: newVal,
          awaitInput: true
        });
      }
      else if (this.state.operator === "x") {
        this.setState({
          operator: "None",
          val: newVal,
          awaitInput: true
        });
      }
      else if (this.state.operator === "-") {
        this.setState({
          operator: "None",
          val: newVal,
          awaitInput: true
        });
      }
      else { // No operation was selected
        // do nothing
      }
    }
  }

  // keep in mind that some math (division so far) isnt exact and can result in
  // crazy crazy decimals, so that might cause the final value when you do math
  // to be off super small values (ones that get formatted to 0.00000000) still
  // have a value just not visably seen.
  render () {
    console.log("val",this.state.val);
    console.log("totalval",this.state.totalval);
    console.log("hasDec",this.state.hasDec);
    console.log("op",this.state.operator);

    let formattedNum;
    let decVal;

    // if it was in exponential form, convert to decimal
    if (this.state.val.indexOf("e-") > 0) {
      decVal = String(Number(this.state.val).toFixed(11)); // check if 11 works
    }
    else {
      decVal = this.state.val;
    }

    if (decVal.includes("-") && decVal.includes(".")) {
      formattedNum = decVal.substring(0,11); // 9 digits + 1 decimal + 1 sign
    }
    else if (decVal.includes("-") || decVal.includes(".")) {
      formattedNum = decVal.substring(0,10); // 9 digits + 1 decimal/sign
    }
    else {
      formattedNum = decVal.substring(0,9); // 9 digits
    }

    return (
      <div>
        <div className="screen">
          <p className="text">{formattedNum}</p>
        </div>
        <div className="items">
          <SpOp spOp={this.state.val === "0" ? "AC" : "C"} onClick={this.clearVal} />
          <SpOp spOp="+/-" onClick={this.toggleParity} />
          <SpOp spOp="%" onClick={this.addHundredths} />
          <Op op="/" currOp={this.state.operator} onClick={this.calcOp} />

          <Num digit="7" onClick={this.addNum} />
          <Num digit="8" onClick={this.addNum} />
          <Num digit="9" onClick={this.addNum} />
          <Op op="x" currOp={this.state.operator} onClick={this.calcOp} />

          <Num digit="4" onClick={this.addNum} />
          <Num digit="5" onClick={this.addNum} />
          <Num digit="6" onClick={this.addNum} />
          <Op op="-" currOp={this.state.operator} onClick={this.calcOp} />

          <Num digit="1" onClick={this.addNum} />
          <Num digit="2" onClick={this.addNum} />
          <Num digit="3" onClick={this.addNum} />
          <Op op="+" currOp={this.state.operator} onClick={this.calcOp} />

          <Num digit="0" onClick={this.addNum} />
          <Dec onClick={this.addDec}/>
          <Op op="=" currOp={this.state.operator} onClick={this.equalOp} />
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <Calculator />,
  document.getElementById('calculator')
);
