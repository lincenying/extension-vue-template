<template>
    <div class="app-wrap">
        <el-dialog title="提示" :visible.sync="showTable" width="60%">
            <comp-table></comp-table>
            <span slot="footer" class="dialog-footer">
                <el-button @click="showTable = false">取 消</el-button>
                <el-button type="primary" @click="handleSubmit">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
import compTable from './components/table.vue'
export default {
    name: 'app',
    components: {
        compTable
    },
    data() {
        return {
            showTable: false
        }
    },
    methods: {
        toggleTable(status) {
            this.showTable = status
        },
        handleSubmit() {
            this.$msgbox.alert('这是一段内容', '标题名称', {
                confirmButtonText: '确定',
                callback: action => {
                    this.showTable = false
                    this.$message({
                        type: 'info',
                        message: `action: ${action}`
                    })
                }
            })
        }
    }
}
</script>
