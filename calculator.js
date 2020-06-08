var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Calculator = function (_React$Component) {
  _inherits(Calculator, _React$Component);

  function Calculator() {
    _classCallCheck(this, Calculator);

    return _possibleConstructorReturn(this, (Calculator.__proto__ || Object.getPrototypeOf(Calculator)).apply(this, arguments));
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
            "something"
          )
        ),
        React.createElement(
          "div",
          { className: "items" },
          React.createElement(
            "button",
            { type: "button", className: "temp-button" },
            "1"
          ),
          React.createElement(
            "button",
            { type: "button", className: "temp-button" },
            "2"
          ),
          React.createElement(
            "button",
            { type: "button", className: "temp-button" },
            "3"
          ),
          React.createElement(
            "button",
            { type: "button", className: "temp-button" },
            "4"
          ),
          React.createElement(
            "button",
            { type: "button", className: "temp-bottom-a" },
            "5"
          ),
          React.createElement(
            "button",
            { type: "button", className: "temp-bottom-b" },
            "6"
          ),
          React.createElement(
            "button",
            { type: "button", className: "temp-bottom-b" },
            "7"
          )
        )
      );
    }
  }]);

  return Calculator;
}(React.Component);

ReactDOM.render(React.createElement(Calculator, null), document.getElementById('calculator'));