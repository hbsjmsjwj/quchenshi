import React,{Component} from 'react';
import axios from 'axios'
import './timer.scss'

class Timer extends Component{
	constructor(){
		super();
		this.state={
			mytime:[],
			h:'',
			min:'',
			s:'',
			timer:null
		}
		
	}
	
	componentDidMount(){
		axios.get("https://h5.watsons.com.cn/activity/specials/info?count=8&code=Home_flashSale__Top_Img&device_id=4155d580-0a4b-11e9-9edf-e355c56a73e5")
		.then((resp)=>{
			this.setState({
				mytime:resp.data.data,
				
			})
			console.log(resp)
		 		let start=this.state.mytime.now;
				let end=this.state.mytime.specials_time_ranges[0].end;
				let sys_second=end-start;
				setInterval(function time(mytime){
		
					if(sys_second>1000){
							sys_second-=1000;
						
							let hour=Math.floor((sys_second/1000/3600)%24);
							let minute=Math.floor((sys_second/1000/60)%60);
							let second=Math.floor(sys_second/1000%60);
							this.setState({
								h:hour<10?'0'+hour:hour,
								min:minute<10?'0'+minute:minute,
								s:second<10?'0'+second:second,
							})
					}else{
							clearInterval(this.timer);
						
						}
				
				}.bind(this),1000)
				
		})
		
		
		
					
				
		
	}
	
	//组件卸载的时候取消倒计时
	componentWillUnmount(){
		clearInterval(this.timer);
	}
	
				
	
	render(){
				
		
		return (
				
				<div className="timer">
					<div className='timeleft'>
						<span>今日秒杀</span>
						<span>{this.state.h}</span>:
						<span>{this.state.min}</span>:
						<span>{this.state.s}</span>
					</div>
					<div className='timeright'>更多好货{'>'}</div>
					
				</div>
			
			
		)
	}
}

export default Timer;
