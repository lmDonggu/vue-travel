<template>
    <div class="icons">
        <swiper>
            <swiper-slide v-for="(page, index) of pages" :key="index">
                <div class="icon" v-for="item of page" :key="item.id">
                    <div class="icon-img">
                        <img class="icon-img-content" :src="item.imgUrl" alt="">
                    </div>
                    <p class="icon-desc">{{item.desc}}</p>
                </div>
            </swiper-slide>
        </swiper>
    </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  data() {
    return {
      iconsList: [{
        id: '0001',
        desc: '景点门票',
        imgUrl: require('../../../assets/img/l1.png')
      },
      {
        id: '0002',
        desc: '境内游',
        imgUrl: require('../../../assets/img/l2.png')
      },
      {
        id: '0003',
        desc: '境外游',
        imgUrl: require('../../../assets/img/l3.png')
      },
      {
        id: '0004',
        desc: '酒店',
        imgUrl: require('../../../assets/img/l4.png')
      },
      {
        id: '0005',
        desc: '机场免税',
        imgUrl: require('../../../assets/img/l5.png')
      },
      {
        id: '0006',
        desc: '爬山',
        imgUrl: require('../../../assets/img/l6.png')
      },
      {
        id: '0007',
        desc: '周边景点',
        imgUrl: require('../../../assets/img/l7.png')
      },
      {
        id: '0008',
        desc: '自由行',
        imgUrl: require('../../../assets/img/l8.png')
      },
      {
        id: '0009',
        desc: '特色小吃',
        imgUrl: require('../../../assets/img/l9.png')
      },
      {
        id: '0010',
        desc: '商场',
        imgUrl: require('../../../assets/img/l10.png')
      },
      {
        id: '0011',
        desc: '打车',
        imgUrl: require('../../../assets/img/l11.png')
      }]
    }
  },
  computed: {
    pages () {
      const pages = []
      this.iconsList.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      console.log(pages)
      return pages
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/varibles.styl'
@import '~@/assets/styles/mixins.styl'
.icons >>> .swiper-container
    height: 0
    padding-bottom: 50%
.icons
  margin-top: .1rem
  .icon
      position: relative
      float: left
      width: 25%
      height: 0
      padding-bottom: 25%
      .icon-img
          position: absolute
          top: 0
          right: 0
          bottom: .44rem
          left: 0
          box-sizing: border-box
          padding: .1rem
          .icon-img-content
              display: block
              margin: 0 auto
              height: 100%
      .icon-desc
          position: absolute
          right: 0
          bottom: 0
          left: 0
          height: .44rem
          line-height: .44rem
          text-align: center
          color: $darkTextColor
          ellipsis()
</style>
