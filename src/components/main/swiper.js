import React,{Component} from 'react';
import { Carousel } from 'antd';
//引入轮播插件
import ReactSwipe from 'react-swipe';
import './swiper.scss';
class Swiper extends Component{
	render(){
		
		
		return (
			 
			
		
				
				
					<Carousel autoplay>
					{
						this.props.swiperList.map((item)=><div key={item.id}><h3>
							<img className="lunbo" src={item.image_url} alt=''/>
						</h3></div>)
						
						
					}
					    
  					</Carousel>
				
				
			
			
		)
	}
}

export default Swiper;


//{
//					this.props.swiperList.map((item)=><div  key={item.id}>
//						<img  src={item.image_url}/>
//					
//					</div>)
//				}