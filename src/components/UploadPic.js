import React, { useState } from 'react'

export default function UploadPic() {
    const [valueState, setValueState] = useState()
    const [src, setSrc] = useState("https://via.placeholder.com/100")
     const [testen, setTesten] = useState({})
    
     function test(e) {
        e.preventDefault()
        
        setTesten({
            test: URL.createObjectURL(valueState)
        })

        setSrc(URL.createObjectURL(valueState))

        console.log(testen);
    }
 

    const onChange = (event) =>{
        setValueState(event.target.files[0])
        console.log(event.target.files[0]);
    }

  return (
    <>
    <form onSubmit={(e) =>{test(e)}}>
            <label>Upload dit profilbillede her</label>
            <input type={"file"} accept=".png, .jpeg" onChange={onChange} />
            <input type="submit" value="test" />
        </form>
        <img src={src} />
    </>
  )
}
