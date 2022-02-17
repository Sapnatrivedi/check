import React from 'react';

import Bg from './Bg';
import Callingcard from './Callingcard';
import Fanny from './Fanny';

function Popular() {
	return (
		<>
			<div className='gap'>
				<div className='popular lite'>
					<div className='container'>
						<div className='row justify-content-center'>
							<div className='col-lg-6'>
								<div className='main_title'>
									<h2>Popular Courses</h2>
									<p>There is a moment in the life of any aspiring astronomer that it is time to buy that first telescope. It’s exciting to think about setting up your own viewing station.</p>
								</div>
							</div>
						</div>
						<Callingcard />
					</div>
				</div>
				<Bg />
				<Fanny />
			</div>
		</>
	);
}

export default Popular;
