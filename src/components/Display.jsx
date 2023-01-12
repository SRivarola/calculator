const Display = ({value}) => {

  const truncateValue = () => {
    if(value === 0){
      return 0
    }  
    if(value.length < 13){
      return Number(value).toLocaleString('en-US')
    } else {
      const newValue = Number(value.slice(0,12)).toLocaleString('en-US')
      return newValue
    }
  }

  return (
    <div className="w-[100%] h-[40px] bg-black rounded-lg font-orbitron font-semibold flex items-center justify-end text-[#06EBFF] px-3 truncate text-clip overflow-hidden">
        {truncateValue()}
    </div>  
  )
}
export default Display