<template>
  <div>
    <city-header></city-header>
    <city-search></city-search>
    <city-list></city-list>
  </div>
</template>

<script>
// 组件引入
import CityHeader from './components/Header'
import CitySearch from './components/Search'
import CityList from './components/List'

export default {
  name: 'City',
  // 挂载引入的组件
  components: {
    CityHeader,
    CitySearch,
    CityList
  }
}
</script>

<style lang="stylus" scoped></style>
