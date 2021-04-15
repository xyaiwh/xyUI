<template>
  <div class="selector">
      <xy-select-input 
        @changeValue="changeValue" 
        @searchOptions="searchOptions"
        :placeholder="placeholder"
      ></xy-select-input>
      <xy-select-menu
        :menuData="menuData"
        :searchValue="searchValue"
      ></xy-select-menu>
  </div>
</template>

<script>
import xySelectInput from './Input';
import xySelectMenu from './Menu'
export default {
  name: 'xySelector',

  components: {
    xySelectInput,
    xySelectMenu
  },

  props: {
    selectData: {
      type: Array,
      default: ()=>{
        return []
      }
    },
    placeholder: {
      type: String,
      default: '请做出你的选择'
    }
  },

  data() {
    return {
      menuData: [],
      searchValue: ''
    }
  },

  mounted() {
    this.menuData = this.selectData;
  },

  methods: {
    changeValue(value) {
      let trueValue = this.selectData.filter(item => item.text === value)[0].value;
      this.$emit('change', trueValue)
    },

    searchOptions(value) {
      this.searchValue = value;
    }
  },
}
</script>

<style lang="less" scoped>
  .selector {
    position: relative;
    width: 300px;
  }
</style>