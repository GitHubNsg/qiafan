const host = "http://qiafan.applinzi.com/ThinkAdmin/public/index.php/data/"; 
const getSlider = "api.data/getSlider";  //轮播
const getCate = "api.goods/getCate";  //类型
const getGoods = "api.goods/getGoods";  //类型
const addOrder = "api.auth/order/add";  // 

const fetch = (ret,address,param,method='get') => {
	console.log(param)
	var header={
		'content-type':'application/x-www-form-urlencoded',
		'token':uni.getStorageSync('token')
	}; 
	uni.request({
		url: host+address, //仅为示例，并非真实接口地址。
		data: param, 
		header:header,
		method:method,
		success:  (res)=> {
		
			
			if(res.statusCode!=200){
				uni.navigateTo({
					url:'/pages/public/login'
				})
			}else{
				console.log(res.data);
				ret( (res.data).data);
			}
			
		},
		fail: (res)=> {
			console.log(res.data);
			
			uni.navigateTo({
				url:'/pages/public/login'
			})
		}
	});

}
export default {
	fetch,
	getSlider,
	getCate,
	getGoods,
	addOrder,
}
