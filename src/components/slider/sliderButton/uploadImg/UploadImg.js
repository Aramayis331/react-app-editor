import React from "react";
import './uploadImg.css'
import ImageUploading from "react-images-uploading";

function UploadImg( {onAddItemSlider, setAddItemSliderToggle } ) {
  const [images, setImages] = React.useState([]);	

  const maxNumber = 5;
  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    // console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };


  return (
    <div className="containerUpload">
      <ImageUploading
        multiple
        value={images}
        onChange={onChange}
        maxNumber={maxNumber}
        dataURLKey="data_url"
      >
        {({
          imageList,
          onImageUpload,
          onImageRemoveAll,
          onImageUpdate,
          onImageRemove,
          isDragging,
          dragProps
        }) => (
          // write your building UI
          <div className="upload__image-wrapper">
          <div className="upload__image-div-btnSlider">
			<button className='btnSlider'
				style={isDragging ? { color: "red" } : null}
				onClick={onImageUpload}
				{...dragProps}
				>
				Добавить картинку
				</button>
				<button className='btnSlider' onClick={onImageRemoveAll}>удалить все изображения</button>
		  </div>
			<div className='divItem'>
			{imageList.map((image, index) => (
              <div key={index} className="image-item">
                <img src={image.data_url} alt="no photo" width="100" />
                <div className="image-item__btn-wrapper">
                  <button className='btnSlider' onClick={() => onImageUpdate(index)}>Обновить</button>
                  <button className='btnSlider' onClick={() => onImageRemove(index)}>Удалить</button>
                </div>
              </div>
            ))}
			</div>
			<div className='divBtnContinue'>
				<button className='btnSlider' onClick={() => {
					onAddItemSlider(images);
					setImages([]);
					setAddItemSliderToggle(false);
				}}>Добавить</button>			
			</div>
          </div>
        )}
      </ImageUploading>
    </div>
  );
}

export default UploadImg;
