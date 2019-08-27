import { WeElement, render, h, define, tag } from 'omi'
import './index.css'
import './hello/index.tsx'
import './header/index.tsx'
// import '../build/header'
import './avatar/index.tsx'

interface MyAppProps {
    name: string
}

interface MyAppData {
    abc: string
    urlList: any
}

@tag('my-app')
export default class extends WeElement<MyAppProps, MyAppData> {
    static css = require('./index.css')
    constructor() {
        super()
        this.data.urlList = [{ name: 'test', url: 'https://mccarthey.top' }]
    }

    onAbc = (evt: CustomEvent) => {
        this.data.abc = ` by ${evt.detail.name}`
        this.update()
    }

    logout = () => {
        console.log('test')
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
                    onLogout={this.logout}
                />
                {/* <dm-hello msg="test" list={this.data.urlList} /> */}
            </div>
        )
    }
}

render(<my-app name="Omi" />, '#root')
