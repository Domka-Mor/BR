import React from 'react';
import Izba from '../../images/Video/izba.mp4';
import IzbaPics from '../../images/room-13.jpg';


export default function VideoRooms({children}) {
	return (
		<div>
			<video loop autoPlay muted playsInline poster={IzbaPics} className='backgroundVideo'>
			  <source src={Izba} type='video/mp4'/>
			  Your browser does not support the video tag.
			</video>
			{children}
		</div>
	)
}