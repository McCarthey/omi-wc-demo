import { WeElement, h, tag } from 'omi'
import 'omim/icon'
import '../avatar'

@tag('dm-header')
export default class Header extends WeElement {
    static defaultProps = {
        avatarConfig: {
            src: '',
            name: 'K8s',
            size: 40,
            color: '#fff',
            bgColor: '#87d068',
            notices: 0
        }
    }

    static propTypes = {
        avatarConfig: {
            src: String,
            name: String,
            size: Number,
            color: String,
            bgColor: String,
            notices: Number
        }
    }

    static css = require('./_style.css')

    data = {
        showMenu: false,
        timer: null,
        listData: [
            {
                icon: 'icon',
                name: 'Kubedash',
                link: 'http://192.168.1.17:30880/dashboard'
            },
            {
                icon: 'icon',
                name: 'Kubedash',
                link: 'http://192.168.1.17:30880/dashboard'
            }
        ]
    }

    showMenuList = evt => {
        this.data.timer = setTimeout(() => {
            this.data.showMenu = true
            this.update()
        }, 500)
    }

    closeMenuList = evt => {
        this.data.showMenu = false
        clearTimeout(this.data.timer)
        this.update()
    }

    toggleMenuList = evt => {
        this.data.showMenu = !this.data.showMenu
        clearTimeout(this.data.timer)
        this.update()
    }

    installed() {}

    render(props) {
        return (
            <div>
                <header>
                    {/* 侧边栏触发按钮 */}
                    <div
                        class="menu-trigger"
                        onMouseEnter={this.showMenuList}
                        onMouseLeave={() => clearTimeout(this.data.timer)}
                        onClick={this.toggleMenuList}
                    >
                        <m-icon
                            color="#fff"
                            path="M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z"
                        />
                    </div>
                    {/* 头像组件（包含头像悬浮框） */}
                    <dm-avatar {...props.avatarConfig} />
                </header>

                {/* 侧边栏 */}
                <div class="sidebar-container">
                    <div
                        class="sidebar-bg"
                        onClick={this.closeMenuList}
                        style={
                            this.data.showMenu && {
                                visibility: 'visible',
                                opacity: 1
                            }
                        }
                    />
                    <div
                        class="sidebar-content"
                        style={
                            this.data.showMenu && {
                                width: '280px'
                            }
                        }
                    >
                        <ul className="sidebar-menu-wrapper">
                            {this.data.listData.map(item => (
                                <li className="sidebar-menu-item">
                                    <span className="sidebar-menu-icon">
                                        <i>{item.icon}</i>
                                    </span>
                                    <a href={item.link} target="_blank">
                                        <span className="sidebar-menu-text">
                                            {item.name}
                                        </span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
