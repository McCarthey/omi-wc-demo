import { WeElement, render, h, define, tag } from 'omi'
import './index.css'
import * as css from './_index.less'
import './hello'
import './header'
// import '../build/header'
import './avatar'

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
                <dm-header
                    avatarConfig={{
                        src: '',
                        name: 'TsT',
                        size: 50,
                        bgColor: '#ff3000',
                        notices: 8
                    }}
                />
                {/* <dm-hello msg="test" list={this.data.urlList} /> */}
            </div>
        )
    }
}

render(<my-app name="Omi" />, '#root')
