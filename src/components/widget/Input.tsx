export default function Input({
  textArea,
  type,
  placeholder,
  id,
  className,
  innerRef,
  value,
}: any) {
  if (textArea) {
    return (
      <textarea
        placeholder={placeholder}
        id={id}
        cols={15}
        rows={7}
        ref={innerRef}
        value={value}
        className={`py-3 px-5 bg-amber-100 outline-amber-800 shadow-xl ${className}`}
      />
    );
  } else {
    return (
      <input
        type={type}
        placeholder={placeholder}
        id={id}
        ref={innerRef}
        value={value}
        className={`py-3 px-5 bg-amber-100 outline-amber-800 shadow-md ${className}`}
      />
    );
  }
}
