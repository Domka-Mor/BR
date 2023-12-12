import React,{useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import Loader from '../components/Loader';


export default function Room({room}) {

	const [visible, setVisible] = useState(false);
	const [cardRef, setCardRef] = useState();

	const{name,slug,images,price} = room;

	useEffect(() => {
	    let observer;

	    if (cardRef && visible !== true) {
	      observer = new IntersectionObserver(
	        (entries) => {
	          entries.forEach((entry) => {
	            if (entry.isIntersecting) {
	              setVisible(entry.isIntersecting);
	              observer.unobserve(cardRef);
	            }
	          });
	        },
	        { threshold: 0.2 }
	      );
	      observer.observe(cardRef);
	    }

	    return () => {
	      if (observer && observer.unobserve) {
	        observer.unobserve(cardRef);
	      }
	    };
  	}, [cardRef, visible]);


	return (
		<article className='room' ref={setCardRef}>
			<div className='img-container'>					
				{visible ?
					<>
						<img src={images[0]} alt='single room'/>						
						<div className='price-top'>
						<h6>${price}</h6>
						<p>per night</p>
						</div>
						<Link to={`/rooms/${slug}`} className='btn-main room-link'>
						Features
						</Link>			
					</>
					:
					<div style={{paddingTop:'3rem'}}>
						<Loader/>
					</div>					
				}	
			</div>			
			<p className='room-info'>{name}</p>
		</article>
	)
}