import Button from "./Button"

const ButtonsPanel = ({onHandleClick}) => {
  return (
    <div className="mt-5 flex flex-col gap-2">
        <div className="flex justify-end">
            <Button name="C" onHandleClick={onHandleClick} />
        </div>
        <div className="flex gap-2">
            <Button name="7" onHandleClick={onHandleClick} />
            <Button name="8" onHandleClick={onHandleClick} />
            <Button name="9" onHandleClick={onHandleClick} />
            <Button name="÷" onHandleClick={onHandleClick} operate={true} />
        </div>
        <div className="flex gap-2">
            <Button name="4" onHandleClick={onHandleClick} />
            <Button name="5" onHandleClick={onHandleClick} />
            <Button name="6" onHandleClick={onHandleClick} />
            <Button name="x" onHandleClick={onHandleClick} operate={true} />
        </div>
        <div className="flex gap-2">
            <Button name="3" onHandleClick={onHandleClick} />
            <Button name="2" onHandleClick={onHandleClick} />
            <Button name="1" onHandleClick={onHandleClick} />
            <Button name="-" onHandleClick={onHandleClick} operate={true} />
        </div>
        <div className="flex gap-2">
            <Button name="0" onHandleClick={onHandleClick} />
            <Button name="." onHandleClick={onHandleClick} />
            <Button name="=" onHandleClick={onHandleClick} operate={true} />
            <Button name="+" onHandleClick={onHandleClick} operate={true} />
        </div>
    </div>
  )
}
export default ButtonsPanel