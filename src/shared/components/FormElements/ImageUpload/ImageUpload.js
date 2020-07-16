import React, { useRef } from 'react';

import Button from '../Button/Button';
import './ImageUpload.css';

const ImageUpload = (props) => {
  const filePickerRef = useRef();

  const pickImageHandler = () => {
    filePickerRef.current.click();
  };

  const pickedHandler = (event) => {
    console.log(event.target);
  };

  return (
    <div className="form-control">
      <input
        style={{ display: 'none' }}
        ref={filePickerRef}
        type="file"
        id={props.id}
        accept=".jpg,.png,.jpeg"
        onChange={pickedHandler}
      />
      <div className={`image-upload ${props.center && 'center'}`}>
        <div className="image-upload__preview">
          <img src="" alt="Preview" />
        </div>
        <Button type="button" onClick={pickImageHandler}>
          PICK IMAGE
        </Button>
      </div>
    </div>
  );
};

export default ImageUpload;
