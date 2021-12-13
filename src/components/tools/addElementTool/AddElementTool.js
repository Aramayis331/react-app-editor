import { useState } from 'react';
import svg_AddTool from '../../../images/AddTool.svg';
import './addElementTool.css'
import UploadImgTool from './uploadImgTool/UploadImgTool';

let AddElementTool = ({onAddTool}) => {

	
	const [addTool, setAddTool] = useState(false);

	const [toolData, setToolData] = useState({
		textColor: '',
		textName: '',
		img: '',
	});

	return (
		<div className='containerAddElementTool'>
		<form className={addTool ? 'addToolOn' :  'addToolOff'} onSubmit={(e) => {
			e.preventDefault();
			}}>
			<div className='containerForm'>
				<div className='rowBtnClose'>
					<div className='divBtnCloseSlider' onClick={() => {
							setAddTool(false);
						}}>
						<span>x</span>
					</div>
				</div>
				<UploadImgTool onAddTool={onAddTool} setAddTool={setAddTool} setToolData={setToolData} toolData={toolData}/>
				<div className='divInputTool'>
					<input type='text' value={toolData.textColor} placeholder='Цвет инструмента' onChange={(e) => {
						setToolData({
							...toolData,
							textColor: e.target.value,
						})
					}}/>
				</div>
				<div className='divInputTool'>
					<input type='text' value={toolData.textName} placeholder='Имя инструмента' onChange={(e) => {
						setToolData({
							...toolData,
							textName: e.target.value,
						})
				}}/>
				</div>
				<div className='divBtnContinue'>
					<button onClick={() => {
						setAddTool(false);
						onAddTool(toolData);
						setToolData({
							textColor: '',
							textName: '',
						});
					}}>Добавить</button>
				</div>
			</div>
		</form>
		<div className='divAddElementTool'>
			<div className='divimgaddTool'>
				<img src={svg_AddTool}/>
			</div>
				<div className='divBtnElementTool'>
					<span className='addElementTool' onClick={() => {
						setAddTool(true);
					}}>+</span>
				</div>
				<span className='lineAddTool'></span>
		</div>
	</div>
	)
}
export default AddElementTool;