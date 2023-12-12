import React,{Suspense,lazy} from 'react';
import VideoHome from '../components/VideoBanners/VideoHome';
import Banner from '../components/Banner';
import {Link} from 'react-router-dom';
import Navbar from '../components/Navbars/Navbar';
import ScrollUpButton from "react-scroll-up-button";
import Footer from '../components/Footer';
import Loader from '../components/Loader';

const Services = lazy(() => import('../components/Services/Services'));
const AboutUs = lazy(() => import('../components/About/AboutUs'));
const CardCarousel = lazy(() => import('../components/CardCarousel'));
const ReservationInfo = lazy(() => import('../components/ReservationInfo'));

export default function Home(props) {
	return (
		<>
			<Navbar/>
			<VideoHome>
				<Banner title='Beach Resort' subtitle='welcome to our website'>
					<Link to='/rooms' className='btn-main'>
					our rooms
					</Link>
				</Banner>
			</VideoHome>
			<Suspense fallback={<Loader/>}>
				<Services/>
				<CardCarousel/>	
				<ReservationInfo/>
				<AboutUs/>
			</Suspense>
			<ScrollUpButton 
				StopPosition={0}
      			ShowAtPosition={150}
      			EasingType='easeOutCubic'
      			AnimationDuration={500}
				style={{background: 'transparent', outline:'none', fill:'#af9a7d'}}
			/>
			<Footer/>
		</>
	);
}