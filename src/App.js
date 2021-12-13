import './App.css';
import React from "react";
import svg_idea_sketch from './images/idea_sketch.svg';
import svg_Dizayn from './images/Dizayn.svg';
import svg_3D_fail from './images/3D_fail.svg';
import svg_Rend from './images/Rend.svg';
import svg_Animacia from './images/Animacia.svg';
import svg_Polirovka from './images/Polirovka.svg';
import { useState } from 'react';
import Tools from './components/tools/Tools';
import Slider from './components/slider/Slider';


function App() {

	const [tool, setTool] = useState([
		{
			id: Math.random(),
			color: 'orange',
			name: 'Идея Скеч',
			img: svg_idea_sketch,
		},
		{
			id: Math.random(),
			color: 'red',
			name: 'Дизайн',
			img: svg_Dizayn,
		},
		{
			id: Math.random(),
			color: 'blue',
			name: '3D Файл',
			img: svg_3D_fail,
		},
		{
			id: Math.random(),
			color: 'green',
			name: 'Ренд',
			img: svg_Rend,
		},
		{
			id: Math.random(),
			color: 'yellow',
			name: 'Анимация',
			img: svg_Animacia,
		},
		{
			id: Math.random(),
			color: 'violet',
			name: 'Полировка',
			img: svg_Polirovka,
		},
	]);

	const [color, setColor] = useState({
		background: '',
	})

	return (
		<div className="App" style={{backgroundColor: color.background}}>
			
			<Tools tools={tool} changeColor={(backgroundColor) => {
				setColor({background: backgroundColor})
			}} onAddTool={(toolData) => {
				setTool([
					...tool,
					{
						id:Math.random(),
						color: toolData.textColor,
						name: toolData.textName,
						img: toolData.img,
					}
				])
				console.log(toolData)
			}}/>
			<Slider />	
		</div>
	);
}

export default App;

