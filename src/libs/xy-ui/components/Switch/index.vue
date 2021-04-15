<template>
  <div
    :class="[
        'xy-switch',
        value ? 'isChecked':''
    ]"
  >
      <span 
        :class="[
            'xy-switch-label',
            'switch-left',
            value ? '' : 'is-active'
        ]" 
        @click="changeIsChecked" 
        v-if="inActiveText"
      >{{inActiveText}}</span>

      <span 
        class="xy-switch-core-before" 
        @click="changeIsChecked"
        :style="{
            backgroundColor: value ? activeColor : inActiveColor
        }"
      ></span>
      <span 
        :class="[
            'xy-switch-label',
            'switch-right',
            value ? 'is-active' : ''
        ]" 
        @click="changeIsChecked" 
        v-if="activeText"
      >{{activeText}}</span>
  </div>
</template>

<script>
export default {
    name: 'xySwitch',
    props: {
        value: {
            type: Boolean,
            default: false
        },
        activeColor: {
            type: String,
            default: '#409eff'
        },
        inActiveColor: {
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
        return {}
    },

    mounted(){
        console.log(this);
        this.$nextTick(()=>{
            this.$el.querySelector('.xy-switch-core-before').className = 'xy-switch-core';
        })
    },

    methods: {
        changeIsChecked(){
            this.$emit('input', !this.value);
            this.$emit('change', !this.value);
        },
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