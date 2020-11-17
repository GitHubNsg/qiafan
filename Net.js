const host = "http://127.0.0.1:8099"; 

const fetch = (ret,address,param,method='post') => {
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
				ret(res.data);
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
	fetch
}
