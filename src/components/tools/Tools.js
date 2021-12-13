import ElementTool from './elementTool/ElementTool';
// import svg_AddTool from '../../images/AddTool.svg';
import './tools.css'
import AddElementTool from './addElementTool/AddElementTool';

let Tools = ( { tools, changeColor, onAddTool } ) => {
	return (
		<div className='tools'>
			{tools.map((el) => {
				return <ElementTool key={el.id} tool={el} changeColor={changeColor}/>
			})}
			<AddElementTool onAddTool={onAddTool}/>
		</div>
	)
}

export default Tools;