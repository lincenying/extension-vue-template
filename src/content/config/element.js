import { Button, Dialog, TableColumn, Table, Message, MessageBox } from 'element-ui'

function install(Vue) {
    if (install.installed) {
        return
    }

    Vue.component(Button.name, Button)
    Vue.component(Dialog.name, Dialog)
    Vue.component(TableColumn.name, TableColumn)
    Vue.component(Table.name, Table)

    Vue.prototype.$msgbox = MessageBox
    Vue.prototype.$alert = MessageBox.alert
    Vue.prototype.$confirm = MessageBox.confirm
    Vue.prototype.$prompt = MessageBox.prompt
    Vue.prototype.$message = Message
}
export default install
