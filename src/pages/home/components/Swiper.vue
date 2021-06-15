<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <!-- slides -->
      <swiper-slide v-for ='item of swiperList' :key="item.id">
        <img class="swiper-img" :src="item.imgUrl" alt="">
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data () {
    return {
      swiperOption: {
        loop: true, // 循环
        pagination: '.swiper-pagination' // 小圆点
      },
      swiperList: [{
        id: '0001',
        imgUrl: require('../../../assets/img/t1.png')
      },
      {
        id: '0002',
        imgUrl: require('../../../assets/img/t2.png')
      },
      {
        id: '0003',
        imgUrl: require('../../../assets/img/t3.png')
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
  .wrapper >>> .swiper-pagination-bullet-active
    background: #fff
  .wrapper
    overflow: hidden
    width: 100%
    height: 0
    padding-bottom: 31.25%
    background: #eee
    .swiper-img
      width: 100%
</style>
