import React, { useState } from 'react'

import Papa from 'papaparse'
import Report from './Report'


const App=(props)=>{
    const[selectedFile,setSelectedFile]=useState([])
    const[participants,setParticipants]=useState([])
    const[isSelected,setIsSelected]=useState(false)


    const handleChange=(e)=>{
        setSelectedFile(e.target.files[0])
    }
    const handleSubmit=(e)=>{
        e.preventDefault()

        Papa.parse(selectedFile,{
            download:true,
            delimiter: ",",
            chunkSize:3,
            header:true,
            complete:function(response){
                setParticipants(response.data)
                setIsSelected(true)
            },
            error:(err)=>{
                alert(err.message)
            }
        })

    }
    return(
        
      <div  className="container">
     <div className="col mt-2 md-2">
       <div> <h1> File Upload + CSV parser </h1></div>
       <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleChange}  accept=".csv,.xlsx,.xls" />
        <input type="submit"  value="upload file"/>
        </form>
        </div>
       <div className="col mt-2">
           <hr/>
        {
       isSelected && <Report  participants={participants}/>
       
       }
       </div>

      </div>
      )
    }

export default App