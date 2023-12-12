import React from 'react';
import Title from './Title';
import {FaCocktail,FaHiking,FaShuttleVan,FaBeer} from 'react-icons/fa';



export default class Services extends React.Component {

	state={
		services: [
		 {
		 	icon:<FaCocktail/>,
		 	title:'free cocktails',
		 	info: 'Lorem ipsum dolor sit amet consecterur adispspsuif elit. Magni, corpotis!'
		 },
		 {
		 	icon:<FaHiking/>,
		 	title:'Endless Hiking',
		 	info: 'Lorem ipsum dolor sit amet consecterur adispspsuif elit. Magni, corpotis!'
		 },
		 {
		 	icon:<FaShuttleVan/>,
		 	title:'Free shuttle',
		 	info: 'Lorem ipsum dolor sit amet consecterur adispspsuif elit. Magni, corpotis!'
		 },
		 {
		 	icon:<FaBeer/>,
		 	title:'Strongest beer',
		 	info: 'Lorem ipsum dolor sit amet consecterur adispspsuif elit. Magni, corpotis!'
		 }
		]
	}


	render() {
		return (
			<section className='services'>
				<Title title='services'/>
				<div className='services-center'>
					{this.state.services.map((item,index) => {
						return (
							<article key={index} className='service'>
								<span>{item.icon}</span>
								<h6>{item.title}</h6>
								<p>{item.info}</p>
							</article>
						);
					})}
				</div>
			</section> 
		)
	}
}