import React from 'react'
import {Chart} from 'react-google-charts'

const DisplayChart=(props)=>{
  const{list}= props
   const result=list.map(ele=>{
   return ([ele['Name (Original Name)'],parseInt(ele['Total Duration (Minutes)']),ele['Name (Original Name)']])
   })


   const data=[
    ['Student Names','Minutes attended',{role:'annotation'}],
    ...result
  ]
  

  return (
    <div className="col-md-5">
      <Chart
         chartType="ColumnChart"
         data={data}
         width="600px"
      height="400px"
        
    

    
      />
   
    </div>
  )
}





export default DisplayChart