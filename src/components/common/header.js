import React,{Component} from 'react';
import {Drawer} from 'antd'

import {NavLink} from 'react-router-dom';
import {Row,Col,Icon} from 'antd';
import './header.scss';

import {withRouter} from 'react-router-dom'
import {Link} from 'react-router-dom'; 



class Header extends Component{
	state={visible:false};
	showDrawer=()=>{
		this.setState({
			visible:true,
		});
		
		
	}
	
	 onClose = () => {
    this.setState({
      visible: false,
    });
  };
	render(){
		
		const pathname=this.props.location.pathname;
		
		return (
			<div>
			{
				pathname==='/'||pathname==='/life'||pathname==='/global'||pathname==='/mask'?
				<div className="qcs-header">
					<div className="qcs-search">
						<Row>
							<Link to="/login"><Col span={4}  ><Icon className="qcs-user" type="user"/></Col></Link>
							<Col span={16}><input className="sousuo" type="text" onClick={this.showDrawer}/></Col>
							<Col span={4}><Icon className="qcs-shopping" type="shopping-cart"/></Col>
							<Drawer
							  
							  placement="right"
					          closable={false}
					    
					          visible={this.state.visible}
							>
							  <div className="in">
							  		<div>
							  		<Icon type="search" />
							  			<input type="text" />
							  		</div>
							  		
							  		<button onClick={this.onClose}>取消</button>
							  </div>
							</Drawer>
						</Row>
					</div>
					<nav className="qcs-menu">
						<ul>
							<li><NavLink exact to="/" activeClassName="active">今日推荐</NavLink></li>
							<li><NavLink to="/mask" activeClassName="active">面膜中心</NavLink></li>
							<li><NavLink to="/life" activeClassName="active">居家生活</NavLink></li>
							<li><NavLink to="/global" activeClassName="active">购全球</NavLink></li>
						</ul>
						
					</nav>
				</div>:''
			}</div>
		)
	}
}

export default withRouter(Header);