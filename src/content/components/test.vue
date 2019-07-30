<template>
    <div>
        <el-button @click="handleClick" type="primary">测试按钮</el-button>
    </div>
</template>

<script>
export default {
    name: 'test',
    data() {
        return {}
    },
    methods: {
        handleClick() {
            // this.$msgbox.alert('这是一段内容', '标题名称', {
            //     confirmButtonText: '确定',
            //     callback: action => {
            //         this.$message({
            //             type: 'info',
            //             message: `action: ${action}`
            //         })
            //     }
            // })
            this.$app.toggleTable(true)
        }
    }
}
</script>
