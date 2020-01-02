import React from 'react'

function Course({name , index , time , condition , remove , changeSelect}) {
    return (
        
            <tr index={index} key={index}>
                <td>{name}</td>
                <td>{time}</td>
                <td>
                    <button className={`btn btn-block ${condition?'btn-success':'btn-warning'}`} 
                    onClick={()=>changeSelect(index)}>{condition?'تمام شده ':'تمام نشده'}</button>
                </td>
                <td onClick={()=>remove(index)} style={{cursor:'pointer'}} className="text-danger"><i className="fa fa-trash"></i></td>
                
            </tr>
       
    )
}

export default Course;
