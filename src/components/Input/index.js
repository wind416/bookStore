import React,{ useEffect, useState }from 'react';
function Input(name,type) {
    const [state, setstate] = useState(name);
    useEffect(()=>{
        function handleChangeInput(){

        }
    })
    return(
        <div>
            <input type={type} value={state} />
        </div>
    )
}
export default Input;