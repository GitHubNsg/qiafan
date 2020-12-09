// const host = "http://qiafan.applinzi.com/ThinkAdmin/public/index.php/data/";
// const host = "http://127.0.0.1:8099/index.php/data/";
// const host = "http://127.0.0.1:8888/public/index.php/api/";
const host = "http://127.0.0.1/index.php/api/";

// const host='https://qiafan.applinzi.com/qiafan/public/index.php/api/';

const getSlider = "wxapp/base"; //轮播
const getCate = "category/lists"; //类型
const getGoods = "goods/lists"; // 商品
const detail="goods/detail"; // 商品
const addOrder = "order/buyNow"; // 
const getOrder = "user.order/lists"; // 
const orderDetail = "user.order/detail"; // 
const perfectOrder = "auth.order/perfect"; //  完成订单
const paymentOrder = "auth.order/payment"; //  完成订单

const address = "auth.address/get"; //  地址
const addAddress = "auth.address/set"; //  地址
const delAddress = "auth.address/remove"; //  地址
const stateAddress = "auth.address/state"; //  地址

const getRegion = "goods/getRegion"; //区域

const wxSession = "wxapp/session"; //区域
const loginin = "login/in"; //
const register= "login/register"; //

const bindFrom = "auth.center/bindFrom";
const invited = "auth.center/getFrom";
const getUserInfo = "auth.center/get";

const getNewsItem = "news/getItem";
const getNewsComment = "news/getComment";
const getNewsMark = "news/getMark";
const addComment = "auth.news/addComment";




const getMeComment = "auth.news/getComment";
const delComment = "auth.news/delComment";
const addFavor = "auth.news/addCollect";
const delFavor = "auth.news/delCollect";
const getFavor = "auth.news/getCollect";
const addLike = "auth.news/addLike";
const delLike = "auth.news/delLike";
const getLike = "auth.news/getLike";
const getHistory = "auth.news/getHistory";

const addCart = "auth.cart/add";
const getCartList = "auth.cart/lists";
const subCart = "auth.cart/sub";
const deleteCart = "auth.cart/del";
const clearCart = "auth.cart/clear";
 


const fetch = (ret, address, param, method = 'get') => {
	console.log(param)

	var info = uni.getStorageSync("info");
	var infoJ = {};
	try {
		if (info != undefined) {
			infoJ = JSON.parse(info);
		}
	} catch (e) {

	}


	if (method == 'post' && (infoJ.token == undefined || '' == (infoJ.token))) {

		uni.navigateTo({
			url: '/pages/login/login'
		})
		return;

	}

	if(param==null){
		param={};
	}
	param['wxapp_id']=10001;


	var header = {
		'content-type': 'application/x-www-form-urlencoded',
		'token': infoJ.token //'921555d3ce6a3947bf7feae7f2bc719b'//uni.getStorageSync('token')
	};

	uni.showLoading({

		title: '网络加载中...'
	})

	uni.request({
		url: host + address, //仅为示例，并非真实接口地址。
		data: param,
		header: header,
		method: method,
		success: (res) => {


			if (res.statusCode != 200) {
				uni.navigateTo({
					url: '/pages/public/login'
				})
			} else {

				if (res.data.code == 1) {
					ret((res.data).data);
				} else {
					uni.showToast({
						title: res.data.msg,
						icon: 'none'
					})
				}


			}

		},
		fail: (res) => {
			console.log(res.data);

			uni.navigateTo({
				url: '/pages/public/login'
			})
		},
		complete() {

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
	addComment,
	getMeComment,
	delComment,
	addFavor,
	delFavor,
	getFavor,
	addLike,
	delLike,
	getLike,
	getHistory,
	addCart,
	getCartList,
	subCart,
	deleteCart,
	clearCart,
	register,
	detail,
	orderDetail

}
