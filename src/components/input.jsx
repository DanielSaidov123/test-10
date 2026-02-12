
export default function Input({ onChnage , namee}) {

 
  return (
    <>
      <label>
        {namee}:
        <input name={namee} onChange={onChnage} />
      </label>
    </>
  );
}











