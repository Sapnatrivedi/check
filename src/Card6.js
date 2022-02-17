import React from 'react';
import './index.css';
import './App.css';

function Card6(props) {
	console.log(props.icon);
	return (
		<>
			<div className='col-lg-4 col-md-4'>
				<div className='card card4'>
					{/* {props.icon} */}
					<div className='card-body'>
						<div className='row justify-content-center'>
							{/* <RiVipCrownFill size="2rem"/> */}
							<props.icon size='3rem' />
						</div>
						<h6 className='card-title'>{props.tie}</h6>
						<p className='card-text'>{props.para1}</p>
					</div>
				</div>
			</div>
		</>
	);
}

export default Card6;
