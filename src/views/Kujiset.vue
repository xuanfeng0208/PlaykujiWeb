<template>
  <div id="kujiset">
    <Header></Header>
    <div id="mainkuji">
      <picture>
        <img :src="this.product.pictureUrl" alt="">
      </picture>
      <h3>{{this.product.name}}</h3>
      <h5>發售日期: {{ this.product.saleDate }}</h5>
      <p>數量: {{ this.product.count }} 抽</p>
    </div>
    <div class="productAwards">
      <div class="pa_list" v-for="item in product.productAwards" :key="item">
        <div>
          <picture>
            <img :src="item.pictureUrl" :alt="item.name">
          </picture>
        </div>
        <div>
          <p>{{item.award}} {{item.name}}</p><br>
          <p>數量:{{item.count}}</p>
        </div>
      </div>
    </div>
<Button :BtnData="BtnData" :RouterData="RouterData"></Button>
<Footer></Footer>
  </div>
</template>
<script>
import { productID } from '@/api/index.js';
import Header from '@/component/Header.vue';
import Footer from '@/component/Footer.vue';
import Button from '@/component/Button.vue';
export default {
  name: 'Kujiset',
  components: {
    Header,
    Footer,
    Button,
  },
  data() {
    return {
      product:[],
      BtnData:"返回首頁",
      RouterData:"/"
    }
  },
   mounted() {
        this.getProduct();
    },
  methods: {
    getProduct() {
    // console.log(this.$route.query.id) 
    var id = this.$route.query.id
    // console.log(id)
      productID(id).then(res=> {
        // this.product=res.data
        // console.log(this.$route.query.id)
        this.product=res.data
        this.product.saleDate=this.product.saleDate.slice( 0 , 10 )
        // console.log(this.product.productAwards)
        // console.log(this.product.data[0].id)
      })
  }
  // console.log(this.$route.query.id) 
}
  
}
</script>

<style scoped>
#kujiset{
  /* width: 1440px; */
  max-width: 1440px;
  margin: 0 auto;
  background: #EEE;
  /* height: 2000px; */
}
#mainkuji{
  display: flex;
  flex-direction:column;
  justify-content:center;
  text-align: center;
}
#mainkuji img{
  width: 100%;
}
.productAwards{
  display: flex;
  /* flex-direction:column; */
  /* justify-content:center; */
  flex-wrap: wrap;
  text-align: center;
}
.pa_list{
  width: 33.333%;
}
.pa_list p{
  display: inline-block;
}
.pa_list picture{
  /* width: 33.333%; */
}
.pa_list picture img{
  width: 100%;
}
@media (max-width: 768px) {
  .pa_list{
    width: 50%;
  }
}
</style>
