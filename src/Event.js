import React from 'react';
import { Link } from 'react-router-dom';

function Event() {
	return (
		<>
			<div className='gap'>
				<div className='container'>
					<div className='row justify-content-center'>
						<div className='col-lg-6'>
							<div className='main_title'>
								<h2>Upcoming Events</h2>
								<p>There is a moment in the life of any aspiring astronomer that it is time to buy that first telescope. It’s be exciting to think about setting up your own viewing station.</p>
							</div>
						</div>
					</div>
					<div className='row'>
						<div className='col-lg-6'>
							<div className='row'>
								<div className='col-lg-12 col-sm-12'>
									<div className='single'>
										<div className='row'>
											<div className='col-lg-6 col-md-5'>
												<div className=''>
													<img src='	https://preview.colorlib.com/theme/edusmart/img/xevent1.jpg.pagespeed.ic.739hlJ_LRE.webp' alt='' />
												</div>
											</div>
											<div className='col-lg-6 col-md-7'>
												<div className=''>
													<p>25 February, 2017</p>
													<h4>
														<Link to='/'>The Universe Through A Child S Eyes</Link>
													</h4>
													<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis nostrum earum, fugiat quis sunt corrupti quisquam ratione fugit vitae ab nisi ut. Saepe aliquam amet </p>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className='col-lg-6'>
							<div className='row'>
								<div className='col-lg-12 col-sm-12'>
									<div className='single'>
										<div className='row'>
											<div className='col-lg-6 col-md-5'>
												<div className=''>
													<img src='	https://preview.colorlib.com/theme/edusmart/img/xevent2.jpg.pagespeed.ic.olHQBsJf1B.webp' alt='' />
												</div>
											</div>
											<div className='col-lg-6 col-md-7'>
												<div className=''>
													<p>25 February, 2017</p>
													<h4>
														<Link to='/'>The Universe Through A Child S Eyes</Link>
													</h4>
													<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis nostrum earum, fugiat quis sunt corrupti quisquam ratione fugit vitae ab nisi ut. Saepe aliquam amet </p>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Event;
