<template>
	<div id="app">
		11111
		2222
		3333
		4444
		<div class="xy-ui-button">
			<div class="btn-row">
				<xy-button>默认按钮</xy-button>
				<xy-button btnStyle="primary">主要按钮</xy-button>
				<xy-button btnStyle="success">成功按钮</xy-button>
				<xy-button btnStyle="info">信息按钮</xy-button>
				<xy-button btnStyle="warning">警告按钮</xy-button>
				<xy-button btnStyle="danger">危险按钮</xy-button>
			</div>
			<div class="btn-row">
				<xy-button round>默认按钮</xy-button>
				<xy-button btnStyle="primary" round>主要按钮</xy-button>
				<xy-button btnStyle="success" round>成功按钮</xy-button>
				<xy-button btnStyle="info" round>信息按钮</xy-button>
				<xy-button btnStyle="warning" round>警告按钮</xy-button>
				<xy-button btnStyle="danger" round>危险按钮</xy-button>
			</div>
			<div class="btn-row">
				<xy-button round disabled>默认按钮</xy-button>
				<xy-button btnStyle="primary" round disabled>主要按钮</xy-button>
				<xy-button btnStyle="success" round disabled>成功按钮</xy-button>
				<xy-button btnStyle="info" round disabled>信息按钮</xy-button>
				<xy-button btnStyle="warning" round disabled>警告按钮</xy-button>
				<xy-button btnStyle="danger" round disabled>危险按钮</xy-button>
			</div>
			<div class="btn-row">
				<xy-button round>默认按钮</xy-button>
				<xy-button btnStyle="primary" round size="medium">主要按钮</xy-button>
				<xy-button btnStyle="success" round size="small">成功按钮</xy-button>
				<xy-button btnStyle="info" round size="mini">信息按钮</xy-button>
			</div>
		</div>

		<div class="container">
			<carousel
				:autoPlay="true"
				:duration="2000"
				:hasDot="true"
				:hasDirector="true"
			>
				<car-item v-for="(item, index) of carData" :key="index">
					<img :src="require(`${item.src}`)" />
				</car-item>
			</carousel>
		</div>

		<div class="dialog-row">
			<xy-button btnStyle="text" @click="dialogVisible = true">
				打开dialog
			</xy-button>
			<xy-dialog
				:titleText="titleText"
				:visible.sync="dialogVisible"
				:width="500"
				:borderRadius="10"
			>
			</xy-dialog>
		</div>

		<div class="star-row">
		<xy-star
			:size="30"
			@click="getStarNum"
		/>
		</div>

		<div class="magnifier-row">
			<xy-magnifier 
				:imgSrc="imgSrc"
			>	
			</xy-magnifier>
		</div>
		<div class="select-row">
			<xy-selector
				v-model="selectValue"
				:selectData="selectData"
				:placeholder="placeholder"
				@change="selectClick"
			></xy-selector>
		</div>

		<div class="switch-row">
			<xy-switch
				v-model="value"
				@change="changeClick"
				inActiveText="林允儿"
				activeText="nene"
			></xy-switch>
			<xy-switch
				v-model="value"
				@change="changeClick"
				activeColor='green'
				inActiveColor='red'
				inActiveText="林允儿"
				activeText="nene"
			></xy-switch>
		</div>

		<p style="height: 500px">

		</p>
	</div>
</template>

<script>
import carData from "@/data/CarouselData.js";
import selectData from '@/data/SelectData.js'
export default {
	name: "App",
	data() {
		return {
			btnText: "primary按钮",
			carData: carData,
			dialogVisible: false,
			titleText: "提示",
			btnGroupShow: true,
			imgSrc: 'chengguo6.jpg',
			selectData: selectData,
			placeholder: '请做出你的选择',
			value: true,
			selectValue: 'java'
		};
	},
	mounted() {},
	methods: {
		changeHandle(str) {
			console.log(str);
		},
		comfirm() {
			console.log("comfirm");
		},
		close() {
			console.log("close");
		},
		changeVisible() {
			this.dialogVisible = false;
		},
		getStarNum(num) {
			console.log(num);
		},
		selectClick(value) {
			console.log(value,this.selectValue);
		},
		changeClick(value) {
			console.log(value);
		}
	},
};
</script>

<style lang="less">
.xy-ui-button {
	padding: 8px 15px;
	border: 1px solid #ccc;
	.btn-row {
		margin: 10px auto;
	}
}
.container {
	width: 500px;
	height: 380px;
	margin: 50px auto;
}
.dialog-row{
	text-align: center;
}
.star-row{
  text-align: center;
}

.magnifier-row{
	width: 300px;
	margin: 20px auto;
}
.select-row{
	width: 300px;
	margin: 20px auto;
	padding: 20px 0;
}
.switch-row{
	width: 300px;
	margin: 20px auto;
	padding: 20px 0;
}
</style>
