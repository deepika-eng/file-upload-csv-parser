import React ,{useState}from 'react'

import SearchComponent from './SearchComponent'
import DisplayChart from './DisplayChart'
import ReportTable from './ReportTable'

const Report = (props) =>{
    const {participants} = props
    const[student,setStudent] =useState('')
    console.log(participants)

   const hostDetails = participants.find((file) => {
               return file.Guest === 'No'
   })

   const  hostName = hostDetails['Name (Original Name)']
  

     const time=`${hostDetails['Total Duration (Minutes)']} minutes(${Math.floor(hostDetails['Total Duration (Minutes)']/60)} hour ${hostDetails['Total Duration (Minutes)']%60} minutes)`
   
    const handleChange=(e)=>{
      const result=e.target.value
      setStudent(result)
    }

    const selectedStudent=()=>{
      const result=participants.filter(ele=>{
        return ele['Name (Original Name)'].toLowerCase().includes(student) || ele['User Email'].toLowerCase().includes(student)
      })
      return result
    }

    return(
        
            <div className="mb-3">
              <div className="row">
                <div className="col-md-6">
              
                <h1>Report</h1>
                <h2>Host Name-{hostName}</h2>
                <h2>Total participants - {participants.length}</h2>
                <h2>Duration - {time} </h2>
                  </div>
                  <div className="col- md-6">
                <SearchComponent   handleChange={handleChange} student={student}/>
              { /* <ReportTable participants={participants}/>*/}

               </div>
            </div>
            <div className="row">
              <div className="col-md-6">
            
               <ReportTable list={selectedStudent()}/>


                  </div>
                  <div className="col-md-6">
                    <DisplayChart list={participants}/>
        
               
        </div>
        </div>
        </div>
            
    
    )
}

export default Report