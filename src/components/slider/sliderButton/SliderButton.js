import { useState } from 'react';
import './sliderButton.css'
import UploadImg from './uploadImg/UploadImg';

let SliderButton = ( { onAddItemSlider } ) => {
	const [addItemSliderToggle, setAddItemSliderToggle] = useState(false);

	return (
		<div className='divAddItemSliderButton'>
				<form className={addItemSliderToggle ? 'addFormItemSliderOn' :  'addFormItemSliderOff'} onSubmit={(e) => {
					e.preventDefault();
	
					}}>
					<div className='containerFormSlider'>
						<div className='rowBtnClose'>
							<div className='divBtnCloseSlider' onClick={() => {
									setAddItemSliderToggle(false);
								}}>
								<span>x</span>
							</div>
						</div>
						<UploadImg  onAddItemSlider={onAddItemSlider} setAddItemSliderToggle={setAddItemSliderToggle}/>
					</div>
				</form>

				<button className='addItemSlider' onClick={() => {
					addItemSliderToggle ? setAddItemSliderToggle(false) : setAddItemSliderToggle(true);
				}}>+ ДОБАВИТЬ</button>
		</div> 
	)
}

export default SliderButton;