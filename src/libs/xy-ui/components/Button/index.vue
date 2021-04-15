<template>
  <button 
    @click="handleClick"
    :disabled="disabled"
    :class="[
        'my-btn',
        'btn-' + btnStyle,
        size? 'btn-'+size : size,  
        {
            'is-round': round, 
            'is-circle': circle,
            'is-disabled': disabled,
        }
    ]"
  >
      <slot></slot>
  </button>
</template>

<script>
export default {
    name: 'xyButton',
    props:{
        btnStyle:{
            type: String,
            default: 'default'
        },
        size: {
            type: String,
            default: ''
        },
        round: Boolean,
        circle: Boolean,
        disabled: Boolean
    },
    methods:{
        handleClick(e){
            this.$emit('click',e);
        }
    }
}
</script>

<style lang="less">
    .my-btn+.my-btn {
        margin-left: 10px
    }
    .my-btn{
        line-height: 1;
        border: 1px solid #dcdfe6;
        background-color: #fff;
        text-align: center;
        box-sizing: border-box;
        padding: 12px 20px;
        font-size: 14px;
        border-radius: 4px;
        -webkit-user-select: none;
        user-select: none;
        outline: none;
        cursor: pointer;
        &.is-round{
            border-radius: 20px;
            padding: 12px 23px;
        }
        &.is-circle{
            border-radius: 50%;
            padding: 12px;
        }
        &.is-disabled,
        &.is-disabled:hover,
        &.is-disabled:focus{
            background-image: none;
            cursor: not-allowed;
            border-color: #ebeef5;
            background-color: #fff;
            color: #c0c4cc;
        }
        &:hover,
        &:focus{
            color: #409eff;
            border-color: #c6e2ff;
            background-color: #ecf5ff;
        }
    }
    

    .btn-primary{
        color: #fff;
        background-color: #409eff;
        border-color: #409eff;
        &.is-disabled,
        &.is-disabled:hover,
        &.is-disabled:focus{
            color: #fff;
            background-color: #a0cfff;
            border-color: #a0cfff;
        }
        &:hover,
        &:focus{
            background-color: #66b1ff;
            border-color: #66b1ff;
            color: #fff;
        } 
    }


    .btn-success{
        color: #fff;
        background-color: #67c23a;
        border-color: #67c23a;
        &.is-disabled,
        &.is-disabled:hover,
        &.is-disabled:focus{
            color: #fff;
            background-color: #b3e19d;
            border-color: #b3e19d;
        }
        &:hover,
        &:focus{
            background-color: #85ce61;
            border-color: #85ce61;
            color: #fff;
        } 
    }


    .btn-info{
        color: #fff;
        background-color: #909399;
        border-color: #909399;
        &.is-disabled,
        &.is-disabled:hover,
        &.is-disabled:focus{
            color: #fff;
            background-color: #c8c9cc;
            border-color: #c8c9cc;
        }
        &:hover,
        &:focus{
            background-color: #a6a9ad;
            border-color: #a6a9ad;
            color: #fff;
        }
    }


    .btn-warning{
        color: #fff;
        background-color: #e6a23c;
        border-color: #e6a23c;
        &.is-disabled,
        &.is-disabled:hover,
        &.is-disabled:focus{
            color: #fff;
            background-color: #f3d19e;
            border-color: #f3d19e;
        }
        &:hover,
        &:focus{
            color: #fff;
            background-color: #ebb563;
            border-color: #ebb563;
        }
    }

    .btn-danger{
        color: #fff;
        background-color: #f56c6c;
        border-color: #f56c6c;
        &.is-disabled,
        &.is-disabled:hover,
        &.is-disabled:focus{
            color: #fff;
            background-color: #fab6b6;
            border-color: #fab6b6;
        }
        &:hover,
        &:focus{
            color: #fff;
            background-color: #f78989;
            border-color: #f78989;
        }
    }

    .btn-text{
        border: transparent;
        color: #409eff;
        background: transparent;
        padding-left: 0;
        padding-right: 0;
        &:hover,
        &:focus{
            color: #66b1ff;
            border: transparent;
            background: transparent;
        }
    }

    .btn-medium{
        padding: 10px 20px;
        font-size: 14px;
        border-radius: 4px;
        &.is-round{
            padding: 10px 20px;
        }
    }

    .btn-medium{
        padding: 10px 20px;
        font-size: 14px;
        border-radius: 4px;
        &.is-round{
            padding: 10px 20px;
        }
    }
    
    .btn-small{
        padding: 9px 15px;
        font-size: 12px;
        border-radius: 3px;
        &.is-round{
            padding: 9px 15px;
        }
    }
    
    .btn-mini{
        padding: 7px 15px;
        font-size: 12px;
        border-radius: 3px;
        &.is-round{
            padding: 7px 15px; 
        }
    }
</style>