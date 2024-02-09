import Slider from 'react-animated-slider';
import './horizontal.css';

<Slider autoplay={3000}>
	{content.map((item, index) => (
		<div
			key={index}
			style={{ background: `url('${item.image}') no-repeat center center` }}
		>
			<div className="center">
				<h1>{item.title}</h1>
				<p>{item.description}</p>
				<button>{item.button}</button>
			</div>
		</div>
	))}
</Slider>