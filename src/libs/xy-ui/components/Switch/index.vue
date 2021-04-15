<template>
  <div
    :class="[
        'xy-switch',
        isChecked ? 'isChecked':''
    ]"
  >
      <span class="xy-switch-label switch-left" @click="changeIsChecked" v-if="inActiveText">{{inActiveText}}</span>
      <span 
        class="xy-switch-core-before" 
        @click="changeIsChecked"
        :style="{
            backgroundColor: isChecked ? activeColor : inactiveColor
        }"
      ></span>
      <span class="xy-switch-label switch-right" @click="changeIsChecked" v-if="activeText">{{activeText}}</span>
  </div>
</template>

<script>
export default {
    name: 'xySwitch',

    props: {
        activeColor: {
            type: String,
            default: '#409eff'
        },
        inactiveColor: {
            type: String,
            default: '#dcdfe6'
        },
        inActiveText: {
            type: String,
            default: ''
        },
        activeText: {
            type: String,
            default: ''
        }
    },

    data() {
        return {
            isChecked: false
        }
    },

    mounted(){
        this.isChecked = this.$vnode.data.attrs.value;
        this.changeStatus(this.isChecked);
        this.$nextTick(()=>{
            this.$el.querySelector('.xy-switch-core-before').className = 'xy-switch-core';
        })
    },

    methods: {
        changeIsChecked(){
            this.isChecked = !this.isChecked;
            this.changeStatus(this.isChecked)
            this.$emit('change', this.isChecked);
        },
        changeStatus (isChecked){
            let labelLeft = this.$el.querySelector('.switch-left'),
                labelRight = this.$el.querySelector('.switch-right');
            if(isChecked){
                if(this.activeText) labelRight.className += ' is-active';
                if(this.inActiveText) labelLeft.className = 'xy-switch-label switch-left';
            }else{
                if(this.activeText) labelRight.className = 'xy-switch-label switch-right'
                if(this.inActiveText) labelLeft.className += ' is-active';   
            }
        }
    }
    
}
</script>

<style lang="less" scoped>
    .xy-switch {
        user-select: none;
        .xy-switch-label {
            display: inline-block;
            height: 20px;
            line-height: 20px;
            font-size: 14px;
            vertical-align: middle;
            cursor: pointer;
            &.switch-left {
                margin-right: 10px;
            }
            &.switch-right {
                margin-left: 10px;
            }
            &.is-active {
                color: #409eff;
            }
        }
        .xy-switch-core {
            margin: 0;
            position: relative;
            display: inline-block;
            width: 40px;
            height: 20px;
            border-radius: 10px;
            border: 1px solid #dcdfe6;
            vertical-align: middle;
            box-sizing: border-box;
            cursor: pointer;
            &::before{
                content: '';
                width: 16px;
                height: 16px;
                position: absolute;
                top: 1px;
                left: 1px;
                border-radius: 50%;
                background-color: #fff;
                transition: all .3s;
            }
        }

        &.isChecked{
            .xy-switch-core{
                border-color: #409eff;
                &::before{
                    left: 100%;
                    margin-left: -17px;
                }
            }

        }
    }
</style>