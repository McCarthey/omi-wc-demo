import { WeElement, h, tag } from 'omi'

@tag('dm-hello')
export default class HelloElement extends WeElement {
    onClick = evt => {
        // trigger CustomEvent
        this.fire('abc', { name: 'Mc', age: 12 })
        evt.stopPropagation()
    }

    //如果需要在 html 里直接使用 <dm-hello></dm-hello>，必须声明 propTypes
    static propTypes = {
        msg: String,
        list: Array
    }

    static css = require('./_style.less')

    installed() {
        console.log(this.css)
    }

    render(props) {
        return (
            <div onClick={this.onClick}>
                <h2>Hi {props.msg}</h2>
                <div>Click Me!</div>
                {props.list.map(item => (
                    <a href={item.url} target="_blank">
                        {item.name}
                    </a>
                ))}
            </div>
        )
    }
}
