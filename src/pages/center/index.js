import React,{Component} from 'react'
import {Redirect,Link} from 'react-router-dom'
import axios from 'axios'
import {Icon} from 'antd'


import './index.scss'
class Center extends Component{
	constructor(){
		super();
		this.state={
			tokenType:1
		}
	}
	//对于是否已经登录的判断我们放在componentWillMount
	componentDidMount(){
		//token的验证
		axios({
			method:'get',
			url:'http://192.168.2.251:7001/center',
			headers:{
				'Authorization':localStorage['token']
			}
		}).then((res)=>{
			console.log(res);
			if(res.data.code===0){
				//登录状态获取成功
				this.setState({
					tokenType:true
				})
			}else{
				//this.props.history.push('/login')
				this.setState({
					tokenType:false
				})
			}
			console.log(this.state.tokenType);
		})
	}
	
	componentWillUnmount(){
		this.setState=(state,callback)=>{
			return;
		}
	}
	
	logout=()=>{
		localStorage['token']="";
		this.props.history.push('./login');
	}
	
	render(){
		function goBack (){
			window.history.go(-1);
		}
		if(this.state.tokenType){
				return(
			
						<div>
							{/*
							  * <h1>用户中心</h1>
								<Button type="primary" onClick={this.logout}>推出</Button>	
							  * */}
							<div className='topBox'>
								<div className='top1'><Icon type="left" onClick={goBack}/><Icon type="shopping-cart" /></div>
								<img className="touxiang" src='http://image.watsons.com.cn/upload/hahy4f2323.png' alt=''/>
								<span>Jay</span>
								<Link to='/'><div className='home'><Icon type="home" />回到首页<Icon type="right" /></div></Link>
							</div>
							
							<div>
								<div className="dingdan"><span>全部订单</span><Icon className='jiantou' type="right" /></div>
							</div>
							
							<div className='iconlist'>
								<div>
									<Icon type="wallet" />
									<span>待付款</span>
									
								</div>
								<div>
									<Icon type="gift" />
									<span>待发货</span>
								</div>
								<div>
									<Icon type="car" />
									<span>待收货</span>
								</div>
								<div>
									<Icon type="smile" />
									<span>待评价</span>
								</div>
								<div>
									<Icon type="pay-circle" />
									<span>退货</span>
								</div>
							</div>
							
							<div style={{'width':'100%','height':'10px','background':'#F4F4F4'}}></div>
							
							<div className='usually'>
									<span><p>我猜你经常用</p></span>
								<ul>
									<li>
										<span><Icon type="mail" /></span>
										消息
									</li>
									<li>
									<span><Icon type="money-collect" /></span>
										优惠卷
									</li>
									<li>
										<span><Icon type="usergroup-delete" /></span>
										我的拼团
									</li>
									<li>
										<span><Icon type="environment" /></span>
										收货地址
									</li>
									<li>
										<span><Icon type="customer-service" /></span>
										联系客服
									</li>
									<li>
										<span><Icon type="idcard" /></span>
										会员卡
									</li>
									<li>
										<span><Icon type="message" /></span>
										建议反馈
									</li>
									<li>
										<span onClick={this.logout}><Icon type="poweroff" /></span>
										退出登录
									</li>
									<li>
										<span><Icon type="exclamation-circle" /></span>
										关于我们
									</li>
									<li>
										<span><Icon type="lock" /></span>
										隐私政策
									</li>
								</ul>
							</div>
							
							<div className='txt'>
								<p>版权所有鄂ICP备11005814号-10</p>
								<p>粤公网安备 44010402000077号</p>
								<p>广州屈臣氏个人用品商店有限公司</p>
								<p>地址：广州市越秀区东风东路丽丰中心</p>
								
							</div>
							
						</div>
				)
				
		}else{
			return <Redirect to='/login'/>
		}
		
	}
	
	
}

export default Center