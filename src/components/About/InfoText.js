import React from 'react';
import {BsFillEnvelopeOpenFill,BsGeoAlt,BsFillBellFill} from "react-icons/bs";
import Fade from 'react-reveal/Fade';

import Aos from 'aos';
import 'aos/dist/aos.css';

export default class InfoText extends React.Component {

	constructor(props) {
    super(props);
    this.state = 
    { 
    show1: true,
    show2: true,
    show3: true
     };
    this.handleClick1 = this.handleClick1.bind(this);
    this.handleClick2 = this.handleClick2.bind(this);
    this.handleClick3 = this.handleClick3.bind(this);
  	}

  	handleClick1() {
    	this.setState({ show1: !this.state.show1 });
  	}

  	handleClick2() {
    	this.setState({ show2: !this.state.show2 });
  	}

  	handleClick3() {
    	this.setState({ show3: !this.state.show3 });
  	}

  	componentDidMount(){
  		Aos.init({duration: 2000});
  	}


	render() {
	return (
		<>
	  		<div className='itext'>
	  			<div
		          className="btnInfo"
		          onClick={this.handleClick1}
		        >
	          		{ this.state.show1 ? <span className='itext span'><BsGeoAlt/></span> : 
	          		<span className='itext span'><BsGeoAlt/></span>}
        		</div>
	  			<Fade right cascade when={this.state.show1} >
					<article className='itext article' data-aos="fade-right">
						<h6>Address : </h6>
						<p>955 Coast Highway,<br/> Queensland 4221</p>
					</article>
				</Fade>
			</div>
			<div className='itext'>
				<div
		          className="btnInfo"
		          onClick={this.handleClick2}
		        >
		        	{ this.state.show2 ? <span className='itext span'><BsFillBellFill/></span> : 
	          		<span className='itext span'><BsFillBellFill/></span>}
        		</div>
	  			<Fade right cascade when={this.state.show2}>
					<article className='itext article' data-aos="fade-right">
						<h6>Phone : </h6>
						<p>07 5525 5000</p>
					</article>
				</Fade>
			</div>
			<div className='itext'>
				<div
		          className="btnInfo"
		          onClick={this.handleClick3}
		        >
		        	{ this.state.show3 ? <span className='itext span'><BsFillEnvelopeOpenFill/></span> : 
	          		<span className='itext span'><BsFillEnvelopeOpenFill/></span>}
        		</div>
        		<Fade right cascade when={this.state.show3}>
					<article className='itext article' data-aos="fade-right">
						<h6>Email : </h6>
						<p>info@beach-resort.com.au</p>
					</article>
				</Fade>
			</div>
		</>
	)
}
}