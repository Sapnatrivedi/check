import React from 'react';
import './index.css';
import Event from './Event';
function Register() {
	return (
		<>
			<div className='popular1'>
				<div className='bg_image2'>
					<div className='gap1'>
						<div className='container'>
							<div className='row align-items-center'>
								<div className='col-lg-7'>
									<div className='row clock_sec1'>
										<div className='col-lg-12'>
											<h1>Register Now</h1>
											<p>There is a moment in the life of any aspiring astronomer that it is time to buy that first telescope. It’s exciting to think about setting up your own viewing station.</p>
										</div>
										<div className='col clock_sec'>
											<h1>29</h1>
										</div>
										<div className='col clock_sec'>
											<h1>29</h1>
										</div>
										<div className='col clock_sec'>
											<h1>29</h1>
										</div>
										<div className='col clock_sec'>
											<h1>29</h1>
										</div>
									</div>
								</div>
								<div className='col-lg-4 my-md-5 offset-lg-1'>
									<div className='register_form'>
										<h3>Courses for free</h3>
										<p>It is high time for learning</p>
										<form>
											<div className='row'>
												<div className='col-lg-12'>
													<input name='name' placeholder='Your Name' required='' type='text' />
													<input name='name' placeholder='Your phone number' required='' type='text' />
													<input name='Email' placeholder='Your Email Address' required='' type='text' />
												</div>
												<div className='col-lg-12 text-center'>
													<button className='primary-btn'>Submit</button>
												</div>
											</div>
										</form>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Event />
		</>
	);
}

export default Register;
