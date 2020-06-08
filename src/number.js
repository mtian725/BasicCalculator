
export class Number extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    return <button type="button" className="num">{this.props.num}</button>
  }
}
