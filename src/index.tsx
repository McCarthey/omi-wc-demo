import { WeElement, render, h, define, tag } from 'omi'
import './hello-omi'
import './index.css'
import * as css from './_index.less'
import * as logo from './logo.svg'
import '@omim/core/text-field'
import '../build/hello'

interface MyAppProps {
    name: string
}

interface MyAppData {
    abc: string
    urlList: any
}

@tag('my-app')
export default class extends WeElement<MyAppProps, MyAppData> {
    static css = css
    constructor() {
        super()
        this.data.urlList = [{ name: 'test', url: 'https://mccarthey.top' }]
    }

    onAbc = (evt: CustomEvent) => {
        this.data.abc = ` by ${evt.detail.name}`
        this.update()
    }

    render(props) {
        return (
            <div class="app">
                <header class="app-header">
                    <img src={logo} class="app-logo" alt="logo" />
                    <h1 class="app-title">Welcome to {props.name}</h1>
                </header>
                <dm-hello msg="test" list={this.data.urlList}></dm-hello>
            </div>
        )
    }
}

render(<my-app name="Omi" />, '#root')
