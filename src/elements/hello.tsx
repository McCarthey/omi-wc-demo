import { define, WeElement, h } from "omi";

define("hello-element", class extends WeElement {
  onClick = evt => {
    // trigger CustomEvent
    this.fire("abc", { name: "Mc", age: 12 });
    evt.stopPropagation();
  };

  //如果需要在 html 里直接使用 <hello-element></hello-element>，必须声明 propTypes
  static propTypes = {
    msg: String,
    list: Array
  };

  static css = `
      div {
        color: red;
        cursor: pointer;
      }`;

  installed() {
    console.log(this.props);
  }

  render(props) {
    return (
      <div onClick={this.onClick}>
        Hi {props.msg}
        <div>Click Me!</div>
        {props.list.map(item => (
          <a href={item.url} target="_blank">
            {item.name}
          </a>
        ))}
      </div>
    );
  }
});
