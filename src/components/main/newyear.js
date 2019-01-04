import React,{Component} from 'react'
import axios from 'axios'

class Newyear extends Component{
	constructor(){
		super();
		this.state={
			year:[],
			list:[]
		}
		
	};
	
	componentDidMount(){
//		axios.get("topic/data/T20190102104814096?device_id=8c652a00-0ef4-11e9-9ab0-13a2b2d87ab7")
//		.then((resp)=>{
//			console.log(resp);
//			this.setState({
//				year:resp.data
//			})
//		
//		})
		axios.get("aladdin/get_batch_data?codes=[%22new_header%22,%22new_Home_topBig_forcase_180105_1%22,%22new_Home_4navs_180105_1%22,%22new_Home_coupon_180105_4%22,%22Home_pingo_170505_5%22,%22Home_AboveTopic_activity_170505_7%22,%22Home_TopicCase_170505_7%22,%22Home_CategaryNavs_170505_7%22]&version=&app_channel=wap&plat=wap&access_token=&device_id=0c9e1e90-0f20-11e9-99e2-09baf25c674a")
		.then((resp)=>{
			this.setState({
				list:resp.data.data.Home_TopicCase_170505_7.datas
			})
		})
	}
	
	
	render(){
		if(this.state.year){
		}
//				<img src={this.state.year[12].content.bg.image}/>
	
		return(
			<div>
				{/*{
					this.state.year !=''?(
						<div>
							{
								<div>
									<img src='https://image.watsons.com.cn//upload/49c535e1.jpg' style= {{'width':'100%','height':'auto'}}/>
									<img src='https://image.watsons.com.cn//upload/87f8d31c.jpg' style= {{'width':'100%','height':'auto'}}/>
									<img src='https://image.watsons.com.cn//upload/8c3676f5.jpg' style= {{'width':'100%','height':'auto'}}/>
								
																		
								</div>
							}
						</div>
					):''
					
					
				}*/}
				
				{
								<div>
									<img src='https://image.watsons.com.cn//upload/49c535e1.jpg' style= {{'width':'100%','height':'auto'}} alt=''/>
									<img src='https://image.watsons.com.cn//upload/87f8d31c.jpg' style= {{'width':'100%','height':'auto'}} alt=''/>
									<img src='https://image.watsons.com.cn//upload/8c3676f5.jpg' style= {{'width':'100%','height':'auto'}} alt=''/>
								
																		
								</div>
							}
				
				{
					this.state.list.map((item,index)=><img src={item.image_url} key={index} style= {{'width':'100%','height':'auto'}} alt=''/>)

				}

			</div>
		)
	}
}

export default Newyear