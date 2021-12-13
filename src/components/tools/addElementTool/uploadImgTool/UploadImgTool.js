import React from "react";
import ReactDOM from "react-dom";
import './uploadImgTool.css'
import ImageUploading from "react-images-uploading";

function UploadImgTool( { setToolData, toolData } ) {
  const [images, setImages] = React.useState([]);	

  const maxNumber = 1;
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
          <div className="upload__image-div-btn">
			<button className='btnSlider'
				style={isDragging ? { color: "red" } : null}
				onClick={onImageUpload}
				{...dragProps}
				>
				Добавить картинку
				</button>
				<button className='btnSlider' onClick={onImageRemoveAll}>
				удалить все изображения</button>
		  </div>
			<div className='divItem'>
			{imageList.map((image, index) => (
              <div key={index} className="image-itemTool">
                <img src={image.data_url} alt="no photo" width="100" />
                <div className="image-item__btn-wrapper">
                  <button className='btnSlider' onClick={() => onImageUpdate(index)}>Обновить</button>
                  <button className='btnSlider' onClick={() => onImageRemove(index)}>Удалить</button>
                </div>
              </div>
            ))}
			</div>
			<div className='divBtnSaveImages'>
				<button className='btnSliderSaveImages' onClick={() => {
					setToolData({
						...toolData,
						img: images.map( e =>   e.data_url),
					});
					setImages([]);
				}}>Сохранить картинку</button>			
			</div>
          </div>
        )}
      </ImageUploading>
    </div>
  );
}

export default UploadImgTool;
