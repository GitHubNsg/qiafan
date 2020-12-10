// const host = "http://qiafan.applinzi.com/ThinkAdmin/public/index.php/data/";
// const host = "http://127.0.0.1:8099/index.php/data/";
// const host = "http://127.0.0.1:8888/public/index.php/api/";
// const host = "http://127.0.0.1/index.php/api/";

const host='https://qiafan.applinzi.com/qiafan/public/index.php/api/';

const getSlider = "wxapp/base"; //轮播
const getCate = "category/lists"; //类型
const getGoods = "goods/lists"; // 商品
const detail="goods/detail"; // 商品
const addOrder = "order/buyNow"; // 
const getOrder = "user.order/lists"; // 
const orderDetail = "user.order/detail"; // 
const perfectOrder = "order/perfect"; //  完成订单
const paymentOrder = "user.order/pay"; //  订单下单

const address = "address/lists"; //  地址
const addAddress = "address/add"; //  地址
const delAddress = "address/remove"; //  地址
const stateAddress = "address/state"; //  地址

const getRegion = "address/getRegion"; //区域

const wxSession = "wxapp/session"; //区域
const loginin = "login/in"; //
const register= "login/register"; //

const bindFrom = "center/bindFrom";
const invited = "center/getFrom";
const getUserInfo = "center/get";

const getNewsItem = "news/getItem";
const getNewsComment = "news/getComment";
const getNewsMark = "news/getMark";
const addComment = "news/addComment";




const getMeComment = "news/getComment";
const delComment = "news/delComment";
const addFavor = "news/addCollect";
const delFavor = "news/delCollect";
const getFavor = "news/getCollect";
const addLike = "news/addLike";
const delLike = "news/delLike";
const getLike = "news/getLike";
const getHistory = "news/getHistory";

const addCart = "cart/add";
const getCartList = "cart/lists";
const subCart = "cart/sub";
const deleteCart = "cart/del";
const clearCart = "cart/clear";
 


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
