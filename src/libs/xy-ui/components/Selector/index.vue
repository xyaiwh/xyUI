<template>
	<div class="selector">
		<xy-select-input
			@changeValue="changeValue"
			@searchOptions="searchOptions"
			:placeholder="placeholder"
			:value="value"
      :menuData="selectData"
		></xy-select-input>
		<xy-select-menu
			:menuData="selectData"
			:searchValue="searchValue"
		></xy-select-menu>
	</div>
</template>

<script>
import xySelectInput from "./Input";
import xySelectMenu from "./Menu";
export default {
	name: "xySelector",

	components: {
		xySelectInput,
		xySelectMenu,
	},

	props: {
		selectData: {
			type: Array,
			default: () => {
				return [];
			},
		},
		placeholder: {
			type: String,
			default: "请做出你的选择",
		},
		value: {
			type: String,
			default: "123",
		},
	},

	data() {
		return {
			menuData: [],
			searchValue: "",
		};
	},

	mounted() {
		// this.searchValue = this.menuData.filter(item => {
		//   item.value === this.value
		//   })[0].text;
		
	},

	methods: {
		changeValue(value) {
			let trueValue = this.selectData.filter((item) => item.text === value)[0]
				.value;
			this.$emit("input", trueValue);
			this.$emit("change", trueValue);
		},

		searchOptions(value) {
			this.searchValue = value;
		},
	},
};
</script>

<style lang="less" scoped>
.selector {
	position: relative;
	width: 300px;
}
</style>