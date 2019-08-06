import { WeElement, render, h, define, tag } from "omi";
import "./hello-omi";
import "./index.css";
import * as css from "./_index.less";
import * as logo from "./logo.svg";
import "@omim/core/text-field";
import "./elements/hello";

interface MyAppProps {
  name: string;
}

interface MyAppData {
  abc: string;
  urlList: any;
}

@tag("my-app")
export default class extends WeElement<MyAppProps, MyAppData> {
  static css = css;
  constructor() {
    super();
    this.data.urlList = [{ name: "test", url: "https://mccarthey.top" }];
  }

  onAbc = (evt: CustomEvent) => {
    this.data.abc = ` by ${evt.detail.name}`;
    this.update();
  };

  render(props) {
    return (
      <div class="app">
        <header class="app-header">
          <img src={logo} class="app-logo" alt="logo" />
          <h1 class="app-title">Welcome to {props.name}</h1>
        </header>
        {this.data.abc}
        <hello-omi onAbc={this.onAbc} msg="Omi" />
        <hello-element onAbc={this.onAbc} msg="WeElement" list={this.data.urlList} />
        <m-text-field label="test" />
      </div>
    );
  }
}

render(<my-app name="Omi" />, "#root");
