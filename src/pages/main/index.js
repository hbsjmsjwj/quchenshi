import React,{Component} from 'react';
import axios from 'axios';
import Bigimg from '../../components/main/bigimg.js';
import Fiveimg from '../../components/main/fiveimg.js';
import Timer from '../../components/main/timer.js';
import ImgList from '../../components/main/imgList.js';
import Imgcontent from "../../components/main/imgcontent.js"
import Zhezhao from '../../components/main/zhezhao.js'
import Repetition from '../../components/main/repetition.js'
import Newyear from '../../components/main/newyear.js'
//import Sousuo from '../../components/main/sousuo.js'


//引入轮播组件
//import Swiper from '../../components/main/swiper';

class Main extends Component{
	//设置初始值
	constructor(){
		super();
		this.state = {
			swiperList:[]//轮播图的数据
		}
	}
	componentDidMount(){
		axios.get('aladdin/get_batch_data?codes=["chajian"]&version=&app_channel=wap&plat=wap&access_token=638b4d2db133b04c8afef24e470a4701&device_id=ef62d140-0b0a-11e9-b5c2-5bc7378abcd9').then(res=>{
			this.setState({
				swiperList:res.data.data.chajian.datas
			})
			
		})
	}
	render(){
		return (
			<div>
		
			    <Zhezhao/>
				<Bigimg/>
				<Fiveimg/>
				<Timer/>
				<ImgList/>
				<Imgcontent/>
				
				<Repetition/>
				<Newyear/>
			</div>
		)
	}
}

export default Main;