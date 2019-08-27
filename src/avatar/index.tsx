import { WeElement, h, tag } from 'omi'
import 'omim/avatar'
import 'omim/badge'

@tag('dm-avatar')
export default class HelloElement extends WeElement {
    static css = require('./_style.css')

    static defaultProps = {
        src: '',
        name: 'Admin',
        size: 40,
        color: '#fff',
        bgColor: '#87d068',
        notices: 0
    }

    static propTypes = {
        src: String,
        name: String,
        size: Number,
        color: String,
        bgColor: String,
        notices: Number
    }

    data = {
        avatarPopover: false
    }

    showAvatarPopover = evt => {
        this.data.avatarPopover = !this.data.avatarPopover
        this.update()
    }

    handleLogout = evt => {
        console.log('click logout')
        this.fire
    }

    installed() {}

    render(props) {
        return (
            <div>
                <div
                    className="avatar-wrapper"
                    onMouseEnter={this.showAvatarPopover}
                    onMouseLeave={this.showAvatarPopover}
                >
                    <m-badge
                        content={props.notices > 99 ? '99+' : props.notices}
                    >
                        <m-avatar
                            src={props.src}
                            color={props.color}
                            background-color={props.bgColor}
                        >
                            {props.name}
                        </m-avatar>
                    </m-badge>
                    {/* 头像容器悬浮层 */}
                    <div
                        className="avatar-popover"
                        style={
                            this.data.avatarPopover && {
                                height: '72px',
                            }
                        }
                    >
                        <ul className="avatar-popover-list">
                            <li className="avatar-popover-item">账号信息</li>
                            <li className="avatar-popover-item" onClick={this.handleLogout}>退出登录</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
