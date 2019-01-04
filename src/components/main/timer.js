import React,{Component} from 'react';
import axios from 'axios'
import './timer.scss'

class Timer extends Component{
	constructor(){
		super();
		this.state={
			mytime:[],
		}
		
	}
	
	componentDidMount(){
		axios.get("https://h5.watsons.com.cn/activity/specials/info?count=8&code=Home_flashSale__Top_Img&device_id=4155d580-0a4b-11e9-9edf-e355c56a73e5")
		.then((resp)=>{
			this.setState({
				mytime:resp.data.data.specials_time_ranges,
				
			})
			
		})
	}
	
	
	render(){
				var start=this.state.mytime.start;
				var end=this.state.mytime.end;
				
		
		return (
				
				<div className="timer">
					倒计时
						console.log(start)
				</div>
			
			
		)
	}
}

export default Timer;
