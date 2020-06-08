var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Number = function (_React$Component) {
  _inherits(Number, _React$Component);

  function Number(props) {
    _classCallCheck(this, Number);

    return _possibleConstructorReturn(this, (Number.__proto__ || Object.getPrototypeOf(Number)).call(this, props));
  }

  _createClass(Number, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "button",
        { type: "button", className: "num" },
        this.props.num
      );
    }
  }]);

  return Number;
}(React.Component);

var Calculator = function (_React$Component2) {
  _inherits(Calculator, _React$Component2);

  function Calculator(props) {
    _classCallCheck(this, Calculator);

    var _this2 = _possibleConstructorReturn(this, (Calculator.__proto__ || Object.getPrototypeOf(Calculator)).call(this, props));

    _this2.state = { // will change state names to make it work with everything just num for now for testing purposes
      num: 0
    };
    return _this2;
  }

  _createClass(Calculator, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "div",
          { className: "screen" },
          React.createElement(
            "p",
            null,
            this.state.num
          )
        ),
        React.createElement(
          "div",
          { className: "items" },
          React.createElement(
            "button",
            { type: "button", className: "special-func" },
            "C"
          ),
          React.createElement(
            "button",
            { type: "button", className: "special-func" },
            "+/-"
          ),
          React.createElement(
            "button",
            { type: "button", className: "special-func" },
            "%"
          ),
          React.createElement(
            "button",
            { type: "button", className: "func" },
            "/"
          ),
          React.createElement(Number, { number: "7" }),
          React.createElement(Number, { number: 8 }),
          React.createElement(Number, { number: 9 }),
          React.createElement(
            "button",
            { type: "button", className: "func" },
            "x"
          ),
          React.createElement(Number, { number: 4 }),
          React.createElement(Number, { number: 5 }),
          React.createElement(Number, { number: 6 }),
          React.createElement(
            "button",
            { type: "button", className: "func" },
            "-"
          ),
          React.createElement(Number, { number: 1 }),
          React.createElement(Number, { number: 2 }),
          React.createElement(Number, { number: 3 }),
          React.createElement(
            "button",
            { type: "button", className: "func" },
            "+"
          ),
          React.createElement(
            "button",
            { type: "button", className: "num-z" },
            "0"
          ),
          React.createElement(
            "button",
            { type: "button", className: "decimal" },
            "."
          ),
          React.createElement(
            "button",
            { type: "button", className: "func-b" },
            "="
          )
        )
      );
    }
  }]);

  return Calculator;
}(React.Component);

ReactDOM.render(React.createElement(Calculator, null), document.getElementById('calculator'));