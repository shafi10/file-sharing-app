import React,{useState, useEffect} from 'react'
import axios from 'axios'

 const Download = (props) => {
   const [value, setValue] = useState([])
    console.log(value.download)
    console.log(value)
   useEffect(() =>{
       const getData =  async () =>{
            const {data} = await axios.get(`/files/${props.match.params.uuid}`)
            setValue(data)
       }
       getData()
   },[])

   const getDownload = () =>{
    window.open(value.download);
   }
   
    return (
        <div className="mt-5">
            <div class="card">
              <h5 class="card-header">File Name: {value.fileName}</h5>
              <div class="card-body">
                 <h6 class="card-title">File Size: {value.fileSize} kb</h6>
              <h5>Download file</h5>
            <button onClick={getDownload} className="btn btn-primary">Download</button>
            </div>
           </div>
            
        </div>
    )
}

export default Download
