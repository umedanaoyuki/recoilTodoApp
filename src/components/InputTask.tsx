import {useRecoilValue} from "recoil";
import {inputTitleState} from "../states/inputTitleState.ts";

export const InputTask = () => {

        const inputTitle = useRecoilValue(inputTitleState);

        const handleClick = () => {
            console.log(inputTitle);
        }

    return (
        <div>
            <input type="text" className="inputTitle" />
            <button type="button" className="addName" onClick={handleClick}>追加</button>
        </div>
    )
}