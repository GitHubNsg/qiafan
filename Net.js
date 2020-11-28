const host = "http://qiafan.applinzi.com/ThinkAdmin/public/index.php/data/"; 
const getSlider = "api.data/getSlider";  //轮播
const getCate = "api.goods/getCate";  //类型
const getGoods = "api.goods/getGoods";  // 商品
const addOrder = "api.auth.order/add";  // 
const getOrder = "api.auth.order/get";  // 
const perfectOrder = "api.auth.order/perfect";  //  完成订单
const paymentOrder= "api.auth.order/payment";  //  完成订单

const address = "api.auth.address/get";  //  地址
const addAddress = "api.auth.address/set";  //  地址
const delAddress = "api.auth.address/remove";  //  地址
const stateAddress = "api.auth.address/state";  //  地址

const getRegion="api.goods/getRegion";//区域

const wxSession="api.wxapp/session";//区域
const loginin="api.login/in";//
const bindFrom="api.auth.center/bindFrom";
const invited="api.auth.center/getFrom";
const getUserInfo="api.auth.center/get";

const getNewsItem="api.news/getItem";
const getNewsComment="api.news/getComment";
const getNewsMark="api.news/getMark";
const addComment="api.auth.news/addComment";

const fetch = (ret,address,param,method='get') => {
	console.log(param)
	
	var info=uni.getStorageSync("info");
	var infoJ={};
	try{
		if(info!=undefined){
			  infoJ=JSON.parse(info);
		}
	}catch(  e){
		
	}
	
	
	if(method=='post'&&(infoJ.token==undefined||''==(infoJ.token))){
		
		uni.navigateTo({
			url:'/pages/login/login'
		})
		return;
		
	}
	
	
	
	var header={
		'content-type':'application/x-www-form-urlencoded',
		'token': infoJ.token//'921555d3ce6a3947bf7feae7f2bc719b'//uni.getStorageSync('token')
	}; 
	
	uni.showLoading({
		 
		title:'网络加载中...' 
	})
	
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
			 
			 if(res.data.code==1){
				 ret( (res.data).data);
			 }else{
				 uni.showToast({
				 	title:res.data.info,
					icon:'none'
				 })
			 }
			 
				
			}
			
		},
		fail: (res)=> {
			console.log(res.data);
			
			uni.navigateTo({
				url:'/pages/public/login'
			})
		},complete() {
			
			uni.hideLoading();
			uni.stopPullDownRefresh();
		}
	});

}
export default {
	fetch,
	getSlider,
	getCate,
	getGoods,
	addOrder,
	perfectOrder,
	address,
	getRegion,
	getOrder,
	wxSession,
	loginin,
	invited,
	bindFrom,
	addAddress,
	delAddress,
	stateAddress,
	getUserInfo,
	paymentOrder,
	getNewsItem,
	getNewsComment,
	getNewsMark,
	addComment
}
