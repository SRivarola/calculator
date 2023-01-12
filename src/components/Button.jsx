const Button = ({name, onHandleClick, operate}) => {
  return (
    <button onClick={() => onHandleClick(name)} className={`w-[40px] h-[40px] shadow-md rounded-md ${name === 'C' ? 'bg-[#FF000C] font-semibold text-white rounded-3xl h-[20px] text-sm' : 'bg-white'} ${operate && 'bg-[#FF8900]'}`}>{name}</button>
  )
}
export default Button