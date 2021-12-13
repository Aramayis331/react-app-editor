import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './slider.css'
import Slider from "react-slick";
import { useState } from "react";
import item1 from '../../images/images1.jpg';
import item2 from '../../images/images2.jpg';
import item3 from '../../images/images3.jpg';
import item4 from '../../images/images4.jpg';
import item5 from '../../images/images5.jpg';
import item6 from '../../images/images6.jpg';
import item7 from '../../images/images7.jpg';
import SliderButton from "./sliderButton/SliderButton";


let SimpleSlider = () => {
	let settings = {
		dots: false,
		infinite: false,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 1,
		initialSlide: 0,
		responsive: [
		  {
			breakpoint: 1024,
			settings: {
			  slidesToShow: 3,
			  slidesToScroll: 3,
			  infinite: true,
			  dots: false,
			}
		  },
		  {
			breakpoint: 600,
			settings: {
			  slidesToShow: 2,
			  slidesToScroll: 2,
			  initialSlide: 2
			}
		  },
		  {
			breakpoint: 480,
			settings: {
				arrows: false,
				slidesToShow: 1,
				slidesToScroll: 1
			}
		  }
		]
	  };
	
	const [item, setItem] = useState([
		{
			id: Math.random(),
			img: item1,
		},
		{
			id: Math.random(),
			img: item2,
		},
		{
			id: Math.random(),
			img: item3,
		},
		{
			id: Math.random(),
			img: item4,
		},
		{
			id: Math.random(),
			img: item5,
		},
		{
			id: Math.random(),
			img: item6,
		},
		{
			id: Math.random(),
			img: item7,
		},
	])

	
	return (
		<div className='sliderContainer'>
			<SliderButton  onAddItemSlider={(itemSlider) => {
				console.log(itemSlider)
				itemSlider.map((el) => {
					setItem([
						...item,
						{
							id: Math.random(),
							img: el.data_url,
						}
					]);
				})
			}}/>
			<Slider {...settings}>
				{
					item.map((el) => {
						return (
							<div className='divSliderImg' key={el.id}>
								<img src={el.img} className='sliderImg'/>
							</div>
						)
					})
				}
			</Slider>
		</div>
	)
}

export default SimpleSlider;