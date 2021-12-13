import './elementTool.css';

let ElementTool = ( { tool, changeColor } ) => {
	return (
		<div className='elementTool'> 
			<div className='divimgTool'>
				<img src={tool.img}/>
			</div>
			<span className='btnColor' style={{backgroundColor: tool.color}} onClick={(e) => {
				let backgroundColor = e.target.style.backgroundColor;
				changeColor(backgroundColor);
			}}></span>
			<span className='lineTool' style={{backgroundColor: tool.color}}></span>
			<span className='toolName'>{tool.name}</span>
		</div>
	)
}

export default ElementTool;