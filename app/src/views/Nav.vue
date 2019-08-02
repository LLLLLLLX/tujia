<template>
    <div class="">
        <div class="navbar navbar-expand-md bg-dark navbar-dark">
            <!-- 1.最前面不折叠的菜单项 -->
            <a href="#" class="navbar-brand d-md-none"></a>
            <img src="../assets/tujia-logo.png"></img>
            <!-- 2.在超小屏下出现的按钮 -->
            <!-- 按钮上有三条线 -->
            <!-- 是折叠区域的激发按钮 -->
            <button class="navbar-toggler" data-toggle="collapse" data-target="#content">
                <!-- 按钮上的三条横线 -->
                <span class="navbar-toggler-icon"></span>
            </button>
            <!-- 3.折叠的导航 -->
            <div id="content" class="collapse navbar-collapse">
                <ul class="navbar-nav">
                    <li class="nav-item ml-5">
                        <router-link to="Index"><a class="nav-link" active>首页</a></router-link>
                    </li>
                    <li class="nav-item ml-5">
                        <a href="#" class="nav-link">发现</a>
                    </li>
                    <li class="nav-item ml-5">
                        <a href="#" class="nav-link">关于我们</a>
                    </li>
                </ul>
            </div>
            <div id="msg">
                <router-link to="Login"><a href="#" class="logo">登录</a></router-link>
                <router-link to="Register"><a href="#" class="reg">注册</a></router-link>
            </div>
        </div> 
   </div>
</template>
<script>
export default {
    methods: {
        toLogin(){
            this.$router.push({path:'/Login'});
            sessionStorage.removeItem("uname");
        }
    },
    mounted() {
        //console.log(sessionStorage.getItem("uname"));
        if(sessionStorage.getItem("uname")){
        //2:登录成功
        var str = `欢迎回来 ${sessionStorage.getItem("uname")} `;
        str += `<a href="http://localhost:8080/#/Login" class="test-one">退出</a>`;
        //获取显示元素
        var msg = document.getElementById("msg");
        msg.innerHTML = str;
   }
  }
}
</script>
<style scoped>
.reg{
    margin-left:10px;
}
a{
    color:#fff;
}
a:hover{
    color:#999;
}
#msg{
    color:#fff;
}
</style>