import React , { useContext } from 'react';
import {InputContext} from '../../InputContext';
import Course from './Course';

function ShowList() {
     const {list , removeTr , handleChangeSelect } = useContext(InputContext);
     
     
    
   
    return (
        <table className="table table-hover  mt-4" id="list">
            <thead className="thead-dark">
                <tr>
                <th>نام درس</th>
                <th>زمان مطالعه</th>
                <th>وضعیت</th>
                <th>حذف</th>
                </tr>
            </thead>
            <tbody>
                      {
                   list.map((us , index)=>{
                    return(

                        <Course changeSelect={handleChangeSelect} key={index} remove={removeTr} index={index} name={us.name} time={us.time} condition={us.condition}/>
                    )})
            }
            </tbody>

        </table>
    )
}

export default ShowList;
