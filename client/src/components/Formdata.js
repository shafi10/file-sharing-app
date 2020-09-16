import React,{useState} from 'react'
import axios from 'axios'


 const Formdata = () => {

    const [myfile, setMyfile ] =useState('')
    const [url, setUrl] = useState([])
    console.log(myfile)
    console.log(url)
    const onSubmit = async (e)=>{
        e.preventDefault()
        try {
            let formData = new FormData()
            formData.append('myfile',myfile)
        axios.post('/api/files', formData).then(data=> setUrl(data.data) ).catch(err=> console.log(err))
        } catch (error) {
            console.log(error)
        }
             
    }
    return (
        <div className="mt-5 text-center">
         <div>
         <div class="card">
             <div class="card-body">
               <span className="text-warning"><h3> Copy URL And Share:</h3> </span><h3 className="text-info">{url.file}</h3>
           </div>
          </div>
         </div>
        <div className="row mt-5 ">
            <div className="">
            <form onSubmit = {onSubmit} class="form-inline">
                 <div class="form-group">
                 <input type="file" class="form-control-file ml-5 mt-3" onChange={e => setMyfile(e.target.files[0])} />
                 </div>
                 <input type="submit" className="btn btn-primary" value="submit" />
            </form>
            </div>
        </div>
        </div>
    )
}

export default Formdata
