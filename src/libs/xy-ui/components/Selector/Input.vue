<template>
  <div class="selectInput">
      <label 
        class="placeholder" 
        :style="{
          display: inputValue ? 'none' : 'block'
        }"
      >{{placeholder}}</label>
      <input 
        type="text" 
        class="input" 
        @input="searchOptions"
        :value="inputValue"
      >
      <span class="iconfont icon-down"></span>
  </div>
</template>

<script>
export default {
  name: 'xyInput',
  props: {
    placeholder: String,
    value: {
      type: String,
      default: ''
    },
    menuData: {
      type: Array,
      default(){
        return []
      }
    }
  },
  data() {
    return {
      inputValue: ''
    }
  },
  mounted() {
    this.inputValue = this.menuData.filter(item => item.value === this.value)[0] ? this.menuData.filter(item => item.value === this.value)[0].text : this.value;
    this.init()
  },
  methods: {
    init(){
      let oSelectInput = this.$el,
          oPlaceHolder = oSelectInput.querySelector('.placeholder'),
          oInput = oSelectInput.querySelector('.input'),
          oIcon = oSelectInput.querySelector('.iconfont'),
          oMenuGroup = this.$parent.$children[1].$el;
      oInput.addEventListener('focus',()=>{
        oPlaceHolder.style.display = 'none';
        oIcon.className = 'iconfont icon-search';
        oMenuGroup.className = 'select-menu show';
      },false)

      oInput.addEventListener('blur', ()=>{
        if(oInput.value.length === 0){
          oPlaceHolder.style.display = 'block';
        }
        oIcon.className = 'iconfont icon-down';
        oMenuGroup.className = 'select-menu hide';
      },false)

      oMenuGroup.addEventListener('mousedown',(e)=>{
        this.inputValue = e.target.innerText;
        this.$emit('changeValue', e.target.innerText)
      })
    },
    searchOptions(e){
      this.$emit('searchOptions', e.target.value)
    }
  }
}
</script>

<style lang="less">
  .selectInput{
    position: relative;
    width: 100%;
    height: 38px;
    
    .input{
      padding-left: 10px;
      width: 100%;
      height: 38px;
      font-size: 16px;
      background-color: rgba(0, 0, 0, 0);
      box-sizing: border-box;
      border-radius: 5px;
      outline: none;
      border: 1px solid #999;

      &:focus{
        border-color: #1890ff;
        box-shadow: 0 0 3px #1890ff;
      }
      
    }
    .placeholder{
      position: absolute;
      left: 10px;
      top: 8px;
      z-index: -1;
      color: #ccc;
    }

    .iconfont {
      position: absolute;
      display: block;
      width: 30px;
      height: 100%;
      line-height: 38px;
      text-align: center;
      top: 0;
      right: 0;
      
    }
  }

</style>