import Vue from 'vue'
import ElementConfig from './config/element'
import App from './App.vue'
import Test from './components/test.vue'

Vue.use(ElementConfig)

// 通过Chrome插件的API加载字体文件
;(function insertElementIcons() {
    let elementIcons = document.createElement('style')
    elementIcons.type = 'text/css'
    elementIcons.textContent = `
        @font-face {
            font-family: "element-icons";
            src: url('${window.chrome.extension.getURL('fonts/element-icons.woff')}') format('woff'),
            url('${window.chrome.extension.getURL(
                'fonts/element-icons.ttf '
            )}') format('truetype'); /* chrome, firefox, opera, Safari, Android, iOS 4.2+*/
        }
    `
    document.head.appendChild(elementIcons)
})()

const app = (Vue.prototype.$app = new Vue(App).$mount())
document.body.appendChild(app.$el)

const test = (Vue.prototype.$test = new Vue(Test).$mount())
document.body.appendChild(test.$el)
