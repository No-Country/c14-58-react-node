export default function TestFile() {
  const handleImageChange = (e) => {
    const reader = new FileReader();
    console.log(e.target.files);
    const file = e.target.files[0];
    reader.readAsDataURL(file);

    reader.onloadend = () => {
      console.log("base64", reader.result);
    };
  };

  return (
    <div>
      <form>
        <input type="file" onChange={handleImageChange} />
      </form>
    </div>
  );
}
