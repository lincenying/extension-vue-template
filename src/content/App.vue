<template>
    <div class="app-wrap">
        <el-dialog title="提示" :visible.sync="showTable" width="60%">
            <comp-table></comp-table>
            <span slot="footer" class="dialog-footer">
                <el-button @click="showTable = false">取 消</el-button>
                <el-button type="primary" @click="showTable = false">确 定</el-button>
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
        }
    }
}
</script>
