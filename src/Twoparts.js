import React from 'react';
import { IoLanguage } from 'react-icons/io5';
import { BsLaptop } from 'react-icons/bs';
import { GiBookmarklet } from 'react-icons/gi';
import './index.css';
function Twoparts() {
	return (
		<>
			<div className='row mt-md-5'>
				<div className='col-lg-6 mt-5'>
					<div className='row'>
						<div className='col-lg-4 col-md-4 '>
							<div class='back_ground text-center make-zag'>
								<IoLanguage size='2rem' />
								<h4>Language</h4>
							</div>
						</div>
						<div className='col-lg-4 col-md-4 text-center'>
							<div class='back_ground text-center'>
								<IoLanguage size='2rem' />
								<h4>Business</h4>
							</div>
						</div>
						<div className='col-lg-4 col-md-4 text-center'>
							<div class='back_ground text-center make-zag '>
								<GiBookmarklet size='2rem' />
								<h4>Literature</h4>
							</div>
						</div>
					</div>
					<div className='row'>
						<div className='col-lg-4 col-md-4 text-center '>
							<div class='back_ground text-center make-zag  '>
								<BsLaptop size='2rem' />
								<h4>Software</h4>
							</div>
						</div>
						<div className='col-lg-4 col-md-4  text-center'>
							<div class='back_ground text-center mar2'>
								<IoLanguage size='2rem' />
								<h4>Design</h4>
							</div>
						</div>
						<div className='col-lg-4 col-md-4 text-center make-zag'>
							<div class='back_ground text-center make-zag '>
								<IoLanguage size='2rem' />
								<h4>Coaching</h4>
							</div>
						</div>
						<div className='offset-lg-4 col-lg-4 col-md-4 col-sm-6 col-12 text-center'>
							<div class='back_ground text-center mar2'>
								<IoLanguage size='2rem' />
								<h4>Language</h4>
							</div>
						</div>
					</div>
				</div>
				<div className='col-lg-6 mt-5'>
					<div className='row justify-content-lg-center'>
						<div className='col-lg-8'>
							<h2>Over 2500 Courses from 5 Platform</h2>
							<p>There is a moment in the life of any aspiring astronomer that it is time to buy that first telescope. It’s exciting to think about setting up your own viewing station. In the life of any aspiring astronomer that it is time to buy that first telescope. It’s exciting to think about setting up your own viewing station.</p>

							<p>It’s exciting to think about setting up your own viewing station. In the life of any aspiring astronomer that it is time to buy that first telescope exciting is time to buy that first.</p>
							<button type='button' className='but2'>
								EXPLORE COURSES
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Twoparts;
