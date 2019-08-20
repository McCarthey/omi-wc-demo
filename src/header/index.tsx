import { WeElement, h, tag } from 'omi'
import 'omim/icon'

@tag('dm-header')
export default class Header extends WeElement {
    data = {
        showMenu: false
    }

    showMenuList = evt => {
        this.data.showMenu = true
        this.update()
    }

    closeMenuList = evt => {
        this.data.showMenu = false
        this.update()
    }

    toggleMenuList = evt => {
        this.data.showMenu = !this.data.showMenu
        this.update()
    }

    static propTypes = {}

    static css = require('./_style.css')

    installed() {
        console.log(this.css)
    }

    render(props) {
        return (
            <div>
                <header>
                    <div
                        class="menu-trigger"
                        onMouseEnter={this.showMenuList}
                        onClick={this.toggleMenuList}
                    >
                        <m-icon
                            color="#fff"
                            path="M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z"
                        />
                    </div>
                    <div>其他</div>
                </header>
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
                        test
                    </div>
                </div>
            </div>
        )
    }
}
