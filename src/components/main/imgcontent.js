import React,{Component} from 'react';
import './imgcontent.scss';
import {Icon} from 'antd'
import axios from 'axios';

class Imgcontent extends Component{
	constructor(){
		super();
		this.state={
			arrs:[]
		}
		
	};
	
	componentDidMount(){
		axios.get("item/ws/group_list?current_page=1&page_size=24&group_id=12779&device_id=cdb40df0-0e2c-11e9-8d5d-89e2fb93ba1c")
		.then((resp)=>{
			this.setState({
				arrs:resp.data.data.item_list
			})
		})
		
	}
	
	render(){
		return(
			<div className="jiubox">
				{
					this.state.arrs.map((item,index)=><div key={index}>
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
		)
	}
}

export default Imgcontent;