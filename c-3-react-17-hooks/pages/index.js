import React, { useState } from "react";

const InputElement = () => {
    const [inputText, setInputText] = useState("");
    const [historyList, setHistoryList] = useState([]);

    const onChangeHandler = ({target}) => {
        setInputText(target.value);
        setHistoryList([...historyList, target.value]);
    };

    return (<>
        <input type="text"
               placeholder="Enter some text"
               value={inputText}
               onChange={onChangeHandler}
        />
        <br/>
        <span>{inputText}</span>
        <hr/><br/>
        <ul>
            {historyList.map((record) => <li>{record}</li> )}
        </ul>
    </>);
};

export default InputElement;
