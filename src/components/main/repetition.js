import React,{Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'; 
import {Icon} from 'antd'
import './imgcontent.scss';

class Repetition extends Component{
	constructor(){
		super();
		this.state={
			myarr:[],
			water:[],
			lipstick:[],
			shampoo:[],
			shaver:[]
		}
		
	};
	
	componentDidMount(){
		axios.get("item/ws/group_list?current_page=1&page_size=24&group_id=12780&device_id=f75d9530-0e87-11e9-afca-a7774d4b6f06")
		.then((resp)=>{
			this.setState({
				myarr:resp.data.data.item_list
			})
		})
		
		axios.get("item/ws/group_list?current_page=1&page_size=24&group_id=12781&device_id=f75d9530-0e87-11e9-afca-a7774d4b6f06")
		.then((resp)=>{
			this.setState({
				water:resp.data.data.item_list
			})
		})
		
		axios.get("item/ws/group_list?current_page=1&page_size=24&group_id=12966&device_id=8c652a00-0ef4-11e9-9ab0-13a2b2d87ab7")
		.then((resp)=>{
			this.setState({
				lipstick:resp.data.data.item_list
			})
		})
		
		axios.get("item/ws/group_list?current_page=1&page_size=24&group_id=12967&device_id=8c652a00-0ef4-11e9-9ab0-13a2b2d87ab7")
		.then((resp)=>{
			this.setState({
				shampoo:resp.data.data.item_list
			})
		})
		axios.get("item/ws/group_list?current_page=1&page_size=24&group_id=12968&device_id=8c652a00-0ef4-11e9-9ab0-13a2b2d87ab7")
		.then((resp)=>{
			this.setState({
				shaver:resp.data.data.item_list
			})
		})
		
	}
	render(){
		return(
			<div>
				<img src="https://image.watsons.com.cn//upload/5d0d63f6.jpg" style={{'width':'100%'}} alt=''/>
				<Link to='/list'><img src="https://image.watsons.com.cn//upload/b8ee0f79.jpg" style={{'width':'100%'}} alt='跳转美肌'/></Link>
				
				<div className="jiubox">
					{
						this.state.myarr.map((item,index)=><div key={index}>
							<img className="jiuimg" src={item.over_image_url} alt=''/>
							<div className="item-name">{item.item_name}</div>
							<div className="bottom">
								<div className="min-price">￥{item.min_price/100}<span>{ item.min_market_price===0?'':'￥'+item.min_market_price/100}</span></div>
								
								<div className="icon-1">
									<Icon className="qcs-shopping1" type="shopping-cart"/>
								</div>
	
							</div>
						</div>)
					}
				</div>
				<img src="https://image.watsons.com.cn//upload/283306f5.jpg" style={{'width':'100%'}} alt=''/>
				
				<div className="jiubox">
					{
						this.state.myarr.map((item,index)=><div key={index}>
							<img className="jiuimg" src={item.over_image_url} alt=''/>
							<div className="item-name">{item.item_name}</div>
							<div className="bottom">
								<div className="min-price">￥{item.min_price/100}<span>{ item.min_market_price===0?'':'￥'+item.min_market_price/100}</span></div>
								
								<div className="icon-1">
									<Icon className="qcs-shopping1" type="shopping-cart"/>
								</div>
	
							</div>
						</div>)
					}
				</div>
				
				<img src="https://image.watsons.com.cn//upload/e9c2df55.jpg" style={{'width':'100%'}} alt=''/>
				
				<div className="jiubox">
					{
						this.state.shampoo.slice(0,6).map((item,index)=><div key={index}>
							<img className="jiuimg" src={item.over_image_url} alt=''/>
							<div className="item-name">{item.item_name}</div>
							<div className="bottom">
								<div className="min-price">￥{item.min_price/100}<span>{ item.min_market_price===0?'':'￥'+item.min_market_price/100}</span></div>
								
								<div className="icon-1">
									<Icon className="qcs-shopping1" type="shopping-cart"/>
								</div>
	
							</div>
						</div>)
					}
				</div>
				
				<img src="https://image.watsons.com.cn//upload/91f5c8c8.jpg" style={{'width':'100%'}} alt=''/>
				
				<div className="jiubox">
					{
						this.state.shaver.map((item,index)=><div key={index}>
							<img className="jiuimg" src={item.over_image_url} alt=''/>
							<div className="item-name">{item.item_name}</div>
							<div className="bottom">
								<div className="min-price">￥{item.min_price/100}<span>{ item.min_market_price===0?'':'￥'+item.min_market_price/100}</span></div>
								
								<div className="icon-1">
									<Icon className="qcs-shopping1" type="shopping-cart"/>
								</div>
	
							</div>
						</div>)
					}
				</div>
				
				
			</div>
			
		)
	}

}

export default Repetition;