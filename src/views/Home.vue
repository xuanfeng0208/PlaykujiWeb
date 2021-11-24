<template>
  <div id="home">
    <!-- <router-link to="/Kujiset">到設定頁</router-link> -->
    <!-- <h1>選擇頁</h1> -->
    <div id="search_bar">
      <figure>
            <img src="../assets/favicon.png" alt="">
      </figure>
      <h1>玩一番賞模擬器</h1>      
      </div>
    <!-- <router-link to="/Kujiset"> -->
      <div id="flexbox">
        <div class="kuji_list" v-for="item in product" :key="item.id" @click="getProductID(item.id)">
          <div class="kuji_list_imgbox" >
            <figure>
              <img :src="item.pictureUrl" :alt="item.name">
            </figure>
          </div>
          <div>
            <h3> {{ item.name }}</h3>
            <h5>發售日期: {{ item.saleDate.slice( 0 , 10 ) }}</h5>
            <!-- <h5>售價:{{ index }}元</h5> -->
          </div>
        </div>
      </div> 
    <!-- </router-link>  -->
    <!-- <div>廣告</div> -->
    <Footer></Footer>
  </div>
</template>

<script>
import { getData } from '@/api/index.js';
import Footer from '@/component/Footer.vue';
export default {
  name: 'Home',
  components: {
    Footer,
  },
   
  data() {
    return {
      product:[],
    }
  },
  mounted() {
        this.getProduct();
    },
   methods: {
        getProduct(){
            getData().then(res=> {
              this.product=res.data
              // console.log(res)
              // console.log(this.product.data[0].id)
            })
            .catch(error=>{
                console.log(error)
            });
         },
        getProductID(id){
          // this.$router.push("/Kujiset")
          this.$router.push({ path: '/Kujiset', query: {id}})
          // console.log(id)
          // console.log("123")
        },
    },
}

</script>

<style>
#home{
  /* width: 1440px; */
  max-width: 1440px;
  margin: 0 auto;
  /* background: #EEE; */
  /* height: 2000px; */
}
#search_bar{
  background: #eee;
  width: 100%;
  max-width: 1440px;
  height: 50px;
  position:fixed;
  top:0;
  font-size: 30px;
  text-align: center;
  display: flex;
  justify-content:center;
  align-items:center;
}
#search_bar h1{
  font-size: 30px;
}
#flexbox{
  display: flex;
  flex-wrap:wrap; 
  padding: 50px 0 0 0;
}
.kuji_list{
  width: 50%;
  display: flex;
  flex-direction:column;
  transition: all .5s;
  /* margin: 5px; */
}
.kuji_list:hover{
  background: rgba(235, 233, 233, 0.911); 
}
.kuji_list h3,h5{
  text-align:center
}
/* .kuji_list_imgbox{
  width: 66.6%;
} */
.kuji_list_imgbox img{
  width: 100%;
}
@media (max-width: 768px) {
  .kuji_list{
      width: 100%;

  }
}
</style>