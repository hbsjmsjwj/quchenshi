import React,{Component} from 'react';
import {Modal} from 'antd'
import './zhezhao.scss'

class Zhezhao extends Component {
 	constructor(){
 		super();
 		this.state={
 			visible:true,
 		}
 	}
 	
 	handleOK=(e)=>{
 		console.log(e);
 		this.setState({
 			visible:false
 		});
 	}
 	
 	handleCancel=(e)=>{
 		this.setState({
 			visible:false
 		})
 	}

	render(){
		return(
			<div>
				 <Modal
		          visible={this.state.visible}
		          onOk={this.handleOk}
		          onCancel={this.handleCancel}
		          footer={null}
		        >
		          <img className="zheimg" src="https://image.watsons.com.cn//upload/6db00343.png" alt=''/>
		        </Modal>
			</div>
		)
	}
}
//ReactDOM.render(<App />, mountNode);
export default Zhezhao;
