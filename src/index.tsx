import { WeElement, render, h, define, tag } from 'omi'
import './hello-omi'
import './index.css'
import * as css from './_index.less'
import '@omim/core/text-field'
import '../build/hello'
import './header'

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
                <dm-header />
                <dm-hello msg="shit" list={this.data.urlList} />
            </div>
        )
    }
}

render(<my-app name="Omi" />, '#root')
