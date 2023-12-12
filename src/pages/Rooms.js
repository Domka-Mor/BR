import React,{Suspense,lazy} from 'react';
import Banner from '../components/Banner';
import {Link} from 'react-router-dom';
import VideoRooms from '../components/VideoBanners/VideoRooms';
import NavbarRooms from '../components/Navbars/NavbarRooms';
import ScrollUpButton from "react-scroll-up-button";
import Loader from '../components/Loader';

const RoomContainer = lazy(() => import('../components/RoomsContainer/RoomContainer'));

export default class Rooms extends React.Component {


   render() {
	return (
		<>
		<NavbarRooms/>
		<VideoRooms>
			<Banner title='our rooms'>
				<Link to='/' className='btn-main'>
					return home
				</Link>
			</Banner>
		</VideoRooms>
		<Suspense fallback={<Loader/>}>
			<RoomContainer/>
		</Suspense>
		<ScrollUpButton 
			StopPosition={0}
			ShowAtPosition={150}
			EasingType='easeOutCubic'
			AnimationDuration={500}
			style={{background: 'transparent', outline:'none', fill:'#af9a7d'}}
		/>
		</>
	)
}
}

