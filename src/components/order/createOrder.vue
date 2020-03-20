<template>
    <div>
        <el-steps :active="1" finish-status="success" simple style="margin-top: 20px">
            <el-step title="拍下商品" ></el-step>
            <el-step title="等待送达" ></el-step>
            <el-step title="确认收货" ></el-step>
        </el-steps>
    </div>
</template>
<script>
export default {

}
</script>

<style scoped>
.el-steps {
    width: 70%;
    margin: auto;
    height: 30px;
}
</style>
