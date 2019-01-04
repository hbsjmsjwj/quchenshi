import React,{Component} from 'react';
import './fiveimg.scss'

class Fiveimg extends Component{
	render(){
		
		let arr=[
				{image_url: "https://image.watsons.com.cn//upload/d0db965c.jpg"},
				{image_url: "https://image.watsons.com.cn//upload/e0782b63.jpg"},
				{image_url: "https://image.watsons.com.cn//upload/6f7636a4.jpg"},
				{image_url: "https://image.watsons.com.cn//upload/6f7636a4.jpg"}
				
			];
			
		return (

			<div>
					<div className="xiaotu">
					{
						
						arr.map((item,index)=><div key={index} style={{"backgroundImage":"url("+item.image_url+")"}} className="aaa"></div>)
						
					}
						
					</div>
					
					<div className="dbimg">
						<img src="https://image.watsons.com.cn//upload/aa4c293a.jpg" alt=''/>
						<img src="https://image.watsons.com.cn//upload/804ba34f.jpg" alt=''/>
					</div>
			</div>	
			
			
		)
	}
}

export default Fiveimg;
