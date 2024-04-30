
export default function Button({children, className, onClick}: any) {

  return (
    <button onClick={onClick} className={`bg-amber-400 hover:bg-amber-300 rounded-lg text-lg font-bold p-2 ${className}`}>{children}</button>
  )
}