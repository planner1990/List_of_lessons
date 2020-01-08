import React from 'react'

function Course({name , index , time , condition , remove , changeSelect}) {
    return (
        
            <tr index={index} key={index}>
                <td>{name}</td>
                <td>{time}</td>
                <td>
                    <button className={`btn btn-block ${condition?'btn-success':'btn-warning'}`} 
                    onClick={()=>changeSelect(index)}>{condition?'خوانده شده ':'خوانده نشده'}</button>
                </td>
                <td  className="text-danger"><i onClick={()=>remove(index)} style={{cursor:'pointer'}} className="fa fa-trash"></i></td>
                
            </tr>
       
    )
}

export default Course;
