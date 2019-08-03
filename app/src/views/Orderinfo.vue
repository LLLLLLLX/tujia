<template>
    <div>
        <div class="orderinfo">
            <div class="orderStep">
                <el-steps :active="1" align-center>
                    <el-step title="提交订单"></el-step>
                    <el-step title="支付订单"></el-step>
                    <el-step title="预订成功"></el-step>
                </el-steps>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    
</style>