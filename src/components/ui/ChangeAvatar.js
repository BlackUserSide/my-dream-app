import React, { createRef, useState } from "react";
import { useRef } from "react";
import ReactCrop from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";
import {
  image64toCanvasRef,
  base64StringtoFile,
  extractImageFileExtensionFromBase64,
  downloadBase64File,
} from "../libs/crops";
export const ChangeAvatar = (props) => {
  const [crop, setCrop] = useState({ aspect: 16 / 9 });
  const [test] = useState({
    imagePrev: createRef(),
  });
  const [tests, setTests] = useState(undefined);
  const [image, setImage] = useState(undefined);
  const fileImp = useRef();
  const focusTextInput = () => fileImp.current.click();
  const handleChange = (cropped) => {
    setCrop(cropped);
  };
  const handleImageLoad = (image) => {
    //console.log(image);
  };
  const handleCropComplete = (crop, pixelCrop) => {
    console.log(pixelCrop);
    const canvasRef = test.imagePrev.current;
    image64toCanvasRef(canvasRef, image, crop);
  };
  const onSelectFile = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const reader = new FileReader();
      reader.addEventListener("load", () => setImage(reader.result));
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  return (
    <>
      <div
        className="bg-lock"
        onClick={() =>
          props.setDataMain((prev) => ({
            ...prev,
            changeAvatarApi: false,
          }))
        }
      ></div>

      {image !== undefined ? (
        <div className="cropper-area">
          <ReactCrop
            src={image}
            crop={crop}
            onChange={handleChange}
            onImageLoaded={handleImageLoad}
            onComplete={handleCropComplete}
            className="crop-wrapper-image"
          />
          <div className="preview-avatar">
            <h1>Предпросмотр</h1>
            <canvas ref={test.imagePrev}></canvas>
          </div>
          <div className="btn-remove-save">
            <button type="button">Сохранить</button>
            <button type="button" onClick={() => setImage(undefined)}>
              Закрыть
            </button>
          </div>
        </div>
      ) : (
        <form className="change-avatar-form">
          <h3>Нажмите что бы добавить фотографию</h3>
          <div className="add-btn" onClick={focusTextInput}></div>
          <input type="file" onChange={onSelectFile} ref={fileImp} />
        </form>
      )}
    </>
  );
};
