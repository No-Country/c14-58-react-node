import { useState } from 'react';

export default function ImageInput() {
  const [imagePreview, setImagePreview] = useState(null);

  const handleImageChange = (e) => {
    const reader = new FileReader();
    const file = e.target.files[0];

    if (file) {
      reader.onload = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setImagePreview(null);
    }
    reader.onloadend = () => {
      console.log("base64", reader.result);
    };
  };

  const handleDrop = (e) => {
    e.preventDefault();

    const file = e.dataTransfer.files[0];
    const reader = new FileReader();

    if (file) {
      reader.onload = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
    reader.onloadend = () => {
      console.log("base64", reader.result);
    };
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <form className='w-full p-0'>
        <input style={{ fontSize: '12px' }} type="file" onChange={handleImageChange} />
      </form>
      <div
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        className='border border-dashed border-gray-300 p-4 text-center cursor-pointer w-full h-40 flex place-items-center'
      >
        {imagePreview ? (
          <img src={imagePreview} alt="Image Preview" className='h-full' />
        ) : (
          <p>Drag and drop an image or select one using the file input.</p>
        )}
      </div>
    </>
  );
}
