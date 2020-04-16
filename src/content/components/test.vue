<template>
    <div>
        <el-button @click="handleClick" type="primary">测试按钮Test</el-button>
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
            console.log(1111111)
            this.$app.toggleTable(true)
        }
    }
}
</script>
