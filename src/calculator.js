

class Num extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    if (this.props.digit !== 0) {
      return <button type="button" className="num">{this.props.digit}</button>;
    }
    else {
      return <button type="button" className="num-z">{this.props.digit}</button>;
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
    <button type="button" className="decimal">.</button>
  }
}

class Calculator extends React.Component {
  constructor (props) {
    super(props);
    this.state = { // will change state names to make it work with everything just val for now for testing purposes
      val: 0
    };
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

          <Num digit={7} />
          <Num digit={8} />
          <Num digit={9} />
          <Op op="x"/>

          <Num digit={4} />
          <Num digit={5} />
          <Num digit={6} />
          <Op op="-"/>

          <Num digit={1} />
          <Num digit={2} />
          <Num digit={3} />
          <Op op="+"/>

          <Num digit={0} />
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
