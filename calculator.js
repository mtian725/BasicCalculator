var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Num = function (_React$Component) {
  _inherits(Num, _React$Component);

  function Num(props) {
    _classCallCheck(this, Num);

    var _this = _possibleConstructorReturn(this, (Num.__proto__ || Object.getPrototypeOf(Num)).call(this, props));

    _this.appendNum = _this.appendNum.bind(_this);
    return _this;
  }

  _createClass(Num, [{
    key: "appendNum",
    value: function appendNum() {
      var newNum = this.props.digit;
      this.props.onClick(newNum);
    }
  }, {
    key: "render",
    value: function render() {
      if (this.props.digit !== "0") {
        return React.createElement(
          "button",
          { type: "button", className: "num", onClick: this.appendNum },
          this.props.digit
        );
      } else {
        return React.createElement(
          "button",
          { type: "button", className: "num-z", onClick: this.appendNum },
          this.props.digit
        );
      }
    }
  }]);

  return Num;
}(React.Component);

// short for operator


var Op = function (_React$Component2) {
  _inherits(Op, _React$Component2);

  function Op(props) {
    _classCallCheck(this, Op);

    var _this2 = _possibleConstructorReturn(this, (Op.__proto__ || Object.getPrototypeOf(Op)).call(this, props));

    _this2.toggleOperation = _this2.toggleOperation.bind(_this2);
    return _this2;
  }

  _createClass(Op, [{
    key: "toggleOperation",
    value: function toggleOperation() {
      var newOp = this.props.op;
      this.props.onClick(newOp);
    }
  }, {
    key: "render",
    value: function render() {
      if (this.props.op !== "=") {
        return React.createElement(
          "button",
          { type: "button", className: "func", onClick: this.toggleOperation },
          this.props.op
        );
      } else {
        return React.createElement(
          "button",
          { type: "button", className: "func-b", onClick: this.toggleOperation },
          this.props.op
        );
      }
    }
  }]);

  return Op;
}(React.Component);

var SpOp = function (_React$Component3) {
  _inherits(SpOp, _React$Component3);

  function SpOp() {
    _classCallCheck(this, SpOp);

    return _possibleConstructorReturn(this, (SpOp.__proto__ || Object.getPrototypeOf(SpOp)).apply(this, arguments));
  }

  _createClass(SpOp, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "button",
        { type: "button", className: "special-func", onClick: this.props.onClick },
        this.props.spOp
      );
    }
  }]);

  return SpOp;
}(React.Component);

var Dec = function (_React$Component4) {
  _inherits(Dec, _React$Component4);

  function Dec() {
    _classCallCheck(this, Dec);

    return _possibleConstructorReturn(this, (Dec.__proto__ || Object.getPrototypeOf(Dec)).apply(this, arguments));
  }

  _createClass(Dec, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "button",
        { type: "button", className: "decimal", onClick: this.props.onClick },
        "."
      );
    }
  }]);

  return Dec;
}(React.Component);

var Calculator = function (_React$Component5) {
  _inherits(Calculator, _React$Component5);

  function Calculator(props) {
    _classCallCheck(this, Calculator);

    var _this5 = _possibleConstructorReturn(this, (Calculator.__proto__ || Object.getPrototypeOf(Calculator)).call(this, props));

    _this5.state = { // will change state names to make it work with everything just val for now for testing purposes
      val: "0",
      prev: "None",
      hasDec: false,
      operator: "None"
    };
    _this5.clearVal = _this5.clearVal.bind(_this5);
    _this5.toggleParity = _this5.toggleParity.bind(_this5);
    _this5.addHundredths = _this5.addHundredths.bind(_this5);
    _this5.addNum = _this5.addNum.bind(_this5);
    _this5.addDec = _this5.addDec.bind(_this5);
    _this5.calcOp = _this5.calcOp.bind(_this5);
    return _this5;
  }

  _createClass(Calculator, [{
    key: "clearVal",
    value: function clearVal() {
      this.setState({
        val: "0",
        hasDec: false
      });
    }
  }, {
    key: "toggleParity",
    value: function toggleParity() {
      var curVal = this.state.val;

      if (curVal[0] === "-") {
        this.setState({
          val: curVal.substring(1, curVal.length)
        });
      } else {
        this.setState({
          val: "-" + curVal
        });
      }
    }
  }, {
    key: "addHundredths",
    value: function addHundredths() {
      var curVal = this.state.val;
      this.setState({
        val: String(Number(curVal) / 100),
        hasDec: this.state.val.includes(".")
      });
    }
  }, {
    key: "addNum",
    value: function addNum(digit) {
      var curVal = this.state.val;
      var absVal = String(Math.abs(Number(curVal)));
      if (!this.state.hasDec && absVal.length === 9 || this.state.hasDec && absVal.length === 10) {
        // do nothing
      } else if (curVal === "0") {
        this.setState({
          val: digit
        });
      } else {
        this.setState({
          val: curVal + digit
        });
      }
    }
  }, {
    key: "addDec",
    value: function addDec() {
      if (!this.state.hasDec) {
        this.setState({
          val: this.state.val + ".",
          hasDec: true
        });
      }
    }
  }, {
    key: "calcOp",
    value: function calcOp(op) {
      console.log(op);
    }

    // keep in mind that some math (division so far) isnt exact and can result in
    // crazy crazy decimals, so that might cause the final value when you do math
    // to be off super small values (ones that get formatted to 0.00000000) still
    // have a value just not visably seen.

  }, {
    key: "render",
    value: function render() {
      // figure out how to switch between CA and C and implement CA
      console.log(this.state.val);
      console.log(this.state.hasDec);

      var formattedNum = void 0;
      var decVal = void 0;

      // if it was in exponential form, convert to decimal
      if (this.state.val.indexOf("e-") > 0) {
        decVal = String(Number(this.state.val).toFixed(12)); // check if 11 works
      } else {
        decVal = this.state.val;
      }

      if (this.state.val.includes("-") && this.state.val.includes(".")) {
        formattedNum = decVal.substring(0, 11); // 9 digits + 1 decimal + 1 sign
      } else if (this.state.val.includes("-") || this.state.val.includes(".")) {
        formattedNum = decVal.substring(0, 10); // 9 digits + 1 decimal/sign
      } else {
        formattedNum = decVal.substring(0, 9); // 9 digits
      }

      return React.createElement(
        "div",
        null,
        React.createElement(
          "div",
          { className: "screen" },
          React.createElement(
            "p",
            null,
            formattedNum
          )
        ),
        React.createElement(
          "div",
          { className: "items" },
          React.createElement(SpOp, { spOp: "C", onClick: this.clearVal }),
          React.createElement(SpOp, { spOp: "+/-", onClick: this.toggleParity }),
          React.createElement(SpOp, { spOp: "%", onClick: this.addHundredths }),
          React.createElement(Op, { op: "/", onClick: this.calcOp }),
          React.createElement(Num, { digit: "7", onClick: this.addNum }),
          React.createElement(Num, { digit: "8", onClick: this.addNum }),
          React.createElement(Num, { digit: "9", onClick: this.addNum }),
          React.createElement(Op, { op: "x", onClick: this.calcOp }),
          React.createElement(Num, { digit: "4", onClick: this.addNum }),
          React.createElement(Num, { digit: "5", onClick: this.addNum }),
          React.createElement(Num, { digit: "6", onClick: this.addNum }),
          React.createElement(Op, { op: "-", onClick: this.calcOp }),
          React.createElement(Num, { digit: "1", onClick: this.addNum }),
          React.createElement(Num, { digit: "2", onClick: this.addNum }),
          React.createElement(Num, { digit: "3", onClick: this.addNum }),
          React.createElement(Op, { op: "+", onClick: this.calcOp }),
          React.createElement(Num, { digit: "0", onClick: this.addNum }),
          React.createElement(Dec, { onClick: this.addDec }),
          React.createElement(Op, { op: "=", onClick: this.calcOp })
        )
      );
    }
  }]);

  return Calculator;
}(React.Component);

ReactDOM.render(React.createElement(Calculator, null), document.getElementById('calculator'));