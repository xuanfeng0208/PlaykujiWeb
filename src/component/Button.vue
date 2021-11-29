<template>
<div class="btn">
  <router-link :to="RouterData"><p>{{BtnData}}</p></router-link>
  
</div>
  
</template>

<script>
export default {
  props: {
    BtnData: String,
    RouterData:String,
  },
}
</script>

<style>
.btn{
  width: 150px;
  height: 50px;
  background: rgb(231, 59, 59);
  color:black;
  line-height: 50px;
  text-align: center;
  margin: 20px auto;
  font-weight: 700;
}
.btn a{
  color:black;
}
</style>