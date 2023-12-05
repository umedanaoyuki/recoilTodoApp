import {useRecoilState } from "recoil";
import {inputTitleState} from "../states/inputTitleState.ts";
import react from "@vitejs/plugin-react";
import React from "react";

export const InputTask = () => {

        const inputTitle = useRecoilState(inputTitleState);

        const handleClick = () => {
            console.log(inputTitle);
        }

        const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            console.log(e);
        }

    return (
        <div>
            <input type="text" className="inputTitle" onChange={onChange}/>
            <button type="button" className="addName" onClick={handleClick}>追加</button>
        </div>
    )
}