import React, { Component } from 'react';
import {connect} from 'react-redux';
import {addToDo} from '../../actions';
import {bindActionCreators} from 'redux';
import Items from './Items';
import s from './style';
class ToDoPage extends Component{

	constructor(props){
		super(props);
		this.state={}
	}
	addToDo(event){ 
		if(event.keyCode === 13){

			this.props.addToDo({"user":this.state.userSelected,"task":event.target.value});
			event.target.value ="";
		}

	}

	render(){
		return <div>
					
			      { 

			      	this.props.settings && 
			      	<div>
			      	<select onChange={(e)=>{this.setState({"userSelected":e.target.value})}} >
			      	<option>--TodoUSer--</option>
			      	 {

			      	 	Object.keys(this.props.settings).map((value,index)=>{
									
									return(<option key={value} >{value}</option>)
								}
								)
			      	 }
			      	</select>
			      	{this.state.userSelected &&
				      	<div>
					   <input type="text" name="myInput" onKeyUp={(event)=>this.addToDo(event)} />
					   </div>
					}
					<s.ListContainer>
						<div>
							<h8>tasks</h8>
							<Items  source="newTask" user={this.state.userSelected}/>
						</div>	
						<div>
							<Items  source="oldTask" user={this.state.userSelected}/>
						</div>	
					</s.ListContainer>
				   </div>
				  }
			   
			    </div>;
			}
}
function mapAction(dispatch){
  return bindActionCreators({addToDo}, dispatch); 
}
export default connect(state=>(state),mapAction)(ToDoPage);