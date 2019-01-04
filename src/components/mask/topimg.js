import React,{Component} from 'react'
import {Icon} from 'antd'
import './topimg.scss' 

class Topimg extends Component {
	render(){
		return(
				<div>
					<img src="https://image.watsons.com.cn//upload/b0f61e4e.jpg" alt='' style={{'width':'100%','height':'auto'}}/>
					<div className="lipinbox">
						<div className="bg">
							<div className="content">
								<div className="txt">登录查看抢购资格</div>
								<div>
									抢购资格可用于购买本活动优惠价商品<Icon type="question-circle" theme="filled" />
								</div>
							</div>
						</div>
					</div>
					
					<div className="tejia">
						<div className='left'>
							<div>特价面膜抢购</div>
							<span>每款最多限购3件</span>
						</div>
						<div className='right'>
							<img src='//asset.watsons.com.cn/act/static/images/mask-center/f32ab5c224e50c8935e6b23ec.png' alt=''/>
						</div>
					</div>
					
				</div>
				
			
		)
	}
}
export default Topimg 