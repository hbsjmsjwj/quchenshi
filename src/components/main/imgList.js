import React,{Component} from 'react';
import './imgList.scss';
import axios from 'axios';

//import "./imgList"

class ImgList extends Component {
	constructor(){
		super();
		this.state={
			arr:[],
		}
		
	}
	
	componentDidMount(){
		axios.get("https://h5.watsons.com.cn/activity/specials/info?count=8&code=Home_flashSale__Top_Img&device_id=4155d580-0a4b-11e9-9edf-e355c56a73e5")
		.then((resp)=>{
				
			this.setState({
				arr:resp.data.data.specials_item_v_o_s,
				
				
			})
		console.log(resp)
		})
	}
	
	render(){
		return(
				<div>
						<ul className="rowimgs">{
							this.state.arr.map((item,index)=>{
								return (
										<li key={index}
												style={{"margin":"10px","backgroundColor":"white"}}>
												<img style={{"width":"2.5rem","height":"2.5rem"}}  src={item.image_url} alt=''/>
												<div className="ellipsis">{item.item_short_name}</div >
												<p style={{"display":"flex","justifyContent":"space-around"}}>
													<span>{item.hasOwnProperty("market_price")===false?" ": item.market_price/100}</span>
													<span>{item.promotion_price/100}</span>
												</p>
											</li>
									
								)
								
								
			            
							})
							
						}
						</ul>
						
						<img src="https://image.watsons.com.cn//upload/491f7964.jpg" className="threeimg" alt=''/>
						<img src="https://image.watsons.com.cn//upload/f2a33fb4.gif" className="gifkuanian" alt=''/>
						<img src="https://image.watsons.com.cn//upload/3247a6b0.jpg" className="imgsgroup" alt=''/>
				</div>
		)
	}
}

export default ImgList;