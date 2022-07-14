import React  from 'react' ;
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome' ;
import {faThumbsUp, faMessage } from '@fortawesome/free-solid-svg-icons'; 



function Photos ({user_spcific_data}) {
	
	return (
		<div className='containerMainpage' >
		<div className='photos-profile' > 
			<h2>Photos</h2>
			<div className='poster-photos-profile'>
				{
					user_spcific_data?.postes.map((data , index) => {
						if (data.image === '/images/public_img/undefined') {
							return
						}
						return (
							<div className='cart-image' key={index} >
								<img src={data?.image} alt='img' />
								<div className='info'>
									<ul>
										<li onClick={(e) => e.target.style.color !== 'red' ? e.target.style.color =  'red' : e.target.style.color =  'white'} > <span>{data.likes}</span> <FontAwesomeIcon  icon={faThumbsUp} /></li>
										<li><span>0</span><FontAwesomeIcon  icon={faMessage} /></li>
									</ul>
								</div>
							</div>
						)
					})
				}
			</div>
		</div>
		</div>
		)
}

export default Photos ;