import {atom} from "recoil";


// グローバル管理
export const inputTitleState = atom<string>(
    {key: "inputTitleState", default: ""}
);