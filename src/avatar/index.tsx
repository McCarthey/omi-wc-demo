import { WeElement, h, tag } from 'omi'
import 'omim/avatar'
import 'omim/badge'

@tag('dm-avatar')
export default class HelloElement extends WeElement {
    static css = require('./_style.css')

    data = {
        avatarPopover: false
    }

    showAvatarPopover = evt => {
        this.data.avatarPopover = !this.data.avatarPopover
        this.update()
    }

    installed() {}

    render(props) {
        return (
            <div>
                <div
                    id="avatar-wrapper"
                    onMouseEnter={this.showAvatarPopover}
                    onMouseLeave={this.showAvatarPopover}
                >
                    <m-badge content="99">
                        <m-avatar background-color="#87d068">k8s</m-avatar>
                    </m-badge>
                    {/* 头像容器悬浮层 */}
                    <div
                        className="avatar-popover"
                        style={
                            this.data.avatarPopover && {
                                height: '360px'
                            }
                        }
                    >
                        content
                    </div>
                </div>
            </div>
        )
    }
}
