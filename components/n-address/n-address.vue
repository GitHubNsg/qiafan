<template>
	<n-transition ref="pop" :height="500" :maskVal="0.5">
		<view class="btn">
			<view class="btn_item" :style="{color: fStyles.cancelColor}" @click="popDown">{{ fStyles.canceltext }}</view>
			<view class="btn_item" :style="{color: fStyles.confirmColor}" @click="bindSure">{{ fStyles.confirmText }}</view>
		</view>
		<picker-view class="picker" :indicator-style="indicatorStyle" :value="value" @change="bindChange">
			<picker-view-column>
				<view class="item" :style="{'font-size': fStyles.columnFontSize}" v-for="province in provinces" :key="province.code">{{province.name}}</view>
			</picker-view-column>
			<picker-view-column>
				<view class="item" :style="{'font-size': fStyles.columnFontSize}" v-for="city in cities" :key="city.code">{{city.name}}</view>
			</picker-view-column>
			<picker-view-column v-show="districts.length">
				<view class="item" :style="{'font-size': fStyles.columnFontSize}" v-for="district in districts" :key="district.code">{{district.name}}</view>
			</picker-view-column>
		</picker-view>
	</n-transition>
</template>

<script>
	var thus;
	// import { cities, districts, provinces} from './address-data'
	export default {
		/**
		 *  @ fValue 初始value
		 *  @ fStyles 自定义样式
		 */
		props: {
			fValue: {
				type:Array,
				default () {
					return [0,0,0]
				}
			},
			fStyles:{
				type:Object,
				default () {
					return {
						canceltext: '取消',
						confirmText: '确定',
						cancelColor: '#584f54',
						confirmColor:'#32f06b',
						lineBgColor: 'rgba(50,240,107,.1)',
						lineBorColor: '#23a249',
						columnFontSize: '28rpx'
					}
				}
			}
		},
		data() {
			return {
				area:[],
				provinces:[],
				cities: [],
				districts: [],
				value:this.fValue,
				indicatorStyle: `height: ${Math.round(uni.getSystemInfoSync().screenWidth/(750/100))}px; 
					background-color: ${this.fStyles.lineBgColor};
					border-top: 1px solid ${this.fStyles.lineBorColor};
					border-bottom: 1px solid ${this.fStyles.lineBorColor};
					`
			};
		},
		watch: {
			value: {
				handler (nVal,oVal) {
					// console.log('===='+nVal+oVal)
					this.initList (nVal,oVal)
				},
				immediate: true
			}
		},
		created() {
			thus=this;
		this.$net.fetch(function(ret){ 
			thus.area=ret;
			thus.provinces=ret;
			 thus.initList ([0,0,0],[0,0,0])
			
			
		},this.$net.getRegion);	
		},
		
		
		methods: {
			// 弹框显示
			popUp () {
				this.$refs['pop'].show()
			},
			// value 改变事件
			bindChange (e) {
				this.value = e.detail.value
			},
			// 取消
			popDown () {
				this.$refs['pop'].hide()
			},
			// 确定
			bindSure () {
				this.popDown()
				const data = Object.create(null)
				const [pdx,cdx,ddx] = this.value
				data.value = [...this.value]
				data.provinceCode = this.provinces[pdx].id
				data.cityCode = this.cities[cdx].id
				if (this.districts.length) {
					data.districtCode = this.districts[ddx].id
					data.region = `${this.provinces[pdx].name}-${this.cities[cdx].name}-${this.districts[ddx].name}`
					data.regionArr = [ this.provinces[pdx].name, this.cities[cdx].name, this.districts[ddx].name ]
				} else {
					data.districtCode = ''
					data.region = `${this.provinces[pdx].name}-${this.cities[cdx].name}`
					data.regionArr = [ this.provinces[pdx].name, this.cities[cdx].name ]
				}
				 
				this.$emit('up-data',data)
			},
			 
			/**
			 * 初始化数据
			 * @param {Array} newVal 
			 * @param {Array} oldVal
			 */
			initList (newVal,oldVal) {
				let [pIdx,cIdx,dIdx] = newVal
				let opIdx,ocIdx,odIdx
				if (oldVal instanceof Array) {
					[opIdx,ocIdx,odIdx] = oldVal
					if (pIdx !== opIdx) { //更改省份
						this.value = [pIdx,0,0]
					} 
					if (cIdx !== ocIdx) { //更改城市
						this.value = [pIdx,cIdx,0]
					}
				}
				
				if(this.provinces.length==0){
					return;
				}
				
				try{
					
					
					const city =  this.provinces[pIdx].subs
					this.cities = city
					this.districts =  city[cIdx] && city[cIdx].subs || []
				}catch(e){
					//TODO handle the exception
					console.log(e)
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
.btn {
	height: 80rpx;
	display: flex;
	justify-content: space-between;
	align-items: center;
	border-bottom: 1rpx solid #eef0ef;
	
	.btn_item {
		padding: 0 30rpx;
		font-size: 30rpx;
		line-height: 60rpx;
	}
}
.picker {
	width: 100vw;
	height: 400rpx;
	margin-top: 20rpx;
	
	.item {
		display: flex;
		justify-content: center;
		align-items: center;
		text-align: center;
	}
}



</style>
