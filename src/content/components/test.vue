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
            this.$app.toggleTable(true)
        }
    }
}
</script>
