var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Num = function (_React$Component) {
  _inherits(Num, _React$Component);

  function Num(props) {
    _classCallCheck(this, Num);

    return _possibleConstructorReturn(this, (Num.__proto__ || Object.getPrototypeOf(Num)).call(this, props));
  }

  _createClass(Num, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "button",
        { type: "button", className: "num" },
        this.props.num
      );
    }
  }]);

  return Num;
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
          React.createElement(Num, { num: 7 }),
          React.createElement(Num, { num: 8 }),
          React.createElement(Num, { num: 9 }),
          React.createElement(
            "button",
            { type: "button", className: "func" },
            "x"
          ),
          React.createElement(Num, { num: 4 }),
          React.createElement(Num, { num: 5 }),
          React.createElement(Num, { num: 6 }),
          React.createElement(
            "button",
            { type: "button", className: "func" },
            "-"
          ),
          React.createElement(Num, { num: 1 }),
          React.createElement(Num, { num: 2 }),
          React.createElement(Num, { num: 3 }),
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