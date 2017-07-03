import React from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';

const Lobby =  props=>{
	return (
		
			<div>
			{ props.UserSettings &&
	        	Object.keys(props.UserSettings).map((value,index)=>{
 					return <s.usersContainer>
 						<s.userData>{index+1}</s.userData>
 						<s.userData>{props.UserSettings[[value]].name}</s.userData>
 						<s.userData>{props.UserSettings[[value]].location}</s.userData>
 					</s.usersContainer>

	        	})
	        }
	        <h4> <Link to={'/UserSettings'}>Add User </Link></h4>
			</div>
		
	)
}

export default connect(state=>(state))(Lobby)