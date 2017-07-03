import React from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import s from './style'; 

const Lobby =  props=>{
	return (
		
			<div>
			{ props.settings &&
	        	Object.keys(props.settings).map((value,index)=>{
 					return <s.usersContainer>
 						<s.userData>{index+1}</s.userData>
 						<s.userData>{props.settings[[value]].name}</s.userData>
 						<s.userData>{props.settings[[value]].location}</s.userData>
 					</s.usersContainer>

	        	})
	        }
	        <h4> <Link to={'/settings'}>Add Player  </Link></h4>
			</div>
		
	)
}

export default connect(state=>(state))(Lobby)