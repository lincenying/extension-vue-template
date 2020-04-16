import { Button, Card } from 'element-ui'
import Vue from 'vue'
import AppComponent from './App/App.vue'

Vue.component('app-component', AppComponent)

Vue.use(Card)
Vue.use(Button)

// eslint-disable-next-line no-new
new Vue({
    el: '#app',
    render: createElement => {
        return createElement(AppComponent)
    }
})
