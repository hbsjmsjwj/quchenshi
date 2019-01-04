import React,{Component} from 'react';
import axios from 'axios';

import './index.scss';
class List extends Component{
	constructor(){
		super();
		this.state = {
			topImg:'',
			listArr:[],
			page:1,//当前页
			end:false //是否到最后 ，false 还没到最后
			
		}
	}
	componentDidMount(){
		
		axios.get('tms/aladdin/get?code=h5_topfixed_img').then(res=>{
			console.log(res);
			this.setState({
				topImg:res.data.data.datas[0].image_url
				
			})
			
		})
		axios.get('item/ws/group_list?current_page=1&page_size=24&group_id=12983&device_id=20b178f0-0fc0-11e9-8e3d-1ff5ed74673e').then(res=>{
			console.log(res);
			this.setState({
				listArr:res.data.data.item_list
			})
			
		})
		
		//调用滚动事件
		this.Scroll();
	}
	
	Scroll(){
		let _this = this;
		//滚动事件
		window.onscroll = function(){
			//获取滚动高度
			let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
			//获取窗口的可视高度
			let windowHeight = document.documentElement.clientHeight;
			//加载的是第几页
			let count = Math.floor(scrollTop/(windowHeight-50)) + 1;
			
			if(count >1){
				for(let i =2;i<=count; i++){
					if(i>_this.state.page){//判断这一页的数据是否已经获取过了，
						//获取数据
						_this.moreData(i);
						
						//更新当前页
						_this.setState({
							page:_this.state.page+1
						})
						
					}
				}
			}
		}
	}
	
	//获取数据
	moreData(i){
		if(!this.state.end){
			axios.get('item/ws/group_list?current_page='+i+'&page_size=24&group_id=12983&device_id=20b178f0-0fc0-11e9-8e3d-1ff5ed74673e').then(res=>{
				console.log(res);
				//判断是否是最后一页
				if(res.data.data.item_list === undefined){
					this.setState({
						end:true
					})
				}else{
					let oldArr = this.state.listArr;
					let newArr = [];
					newArr = oldArr.concat(res.data.data.item_list);
					console.log(newArr);
					this.setState({
						listArr:newArr
					})
				}
				
				
			})
			
		}	
			
	}
	goBack=()=>{
		this.props.history.go(-1);
		
	}
	
	render(){
		return (
			<div className="list-con">
				<div className="list-top-img"><img  src={this.state.topImg} alt="顶部图片"/></div>
				<h1><span onClick={this.goBack}>{"<"}</span> <span className="list-top-title">新宠精致美肌</span></h1>
				<ul>
				{
					this.state.listArr.map((item,index)=><li key={index}>
						<img src={item.over_image_url} alt={item.item_short_name}/>
					</li>)
				}
				</ul>
				{this.state.end?<div>我是有底线的……</div>:''}
			</div>
		)
	}
}

export default List;