
export default function Light({ onClick, color, status }) {


  return (
    <>
      <div onClick={onClick} className={`col-12  gap-4 m-2 rounded-circle w-50 h-25 ${color} ${status ? 'yellow-shadow' : ''}`}></div>
    </>
  );
}