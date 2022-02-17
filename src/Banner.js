import React from 'react';

import Content from './Content';

import './index.css';
import Popular from './Popular';
function Banner() {
	return (
		<>
			<div className='bg_image'>
				<Content />
				<Popular />
			</div>
		</>
	);
}

export default Banner;
