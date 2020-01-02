import React , { useState  , useRef , useEffect} from 'react';
import { InputContext } from '../../InputContext';
import ShowList from '../showcourse';
import './index.css';

function Form() {

    // hooks for inputs
    const [name  , setName] = useState('');
    const [time , setTime] = useState(0);
    const nameRef = useRef();

    // all counter
    const [timeCounter , setTimeCounter] =useState(0);
    const [nameCounter  , setNameCounter] = useState(0);
    const [conditionCounter , setConditionCounter] = useState(0);

    

    // input list

    const [list , setList] = useState(getLocalStorage());

    // handle submit
     function handleSubmit(e){
         e.preventDefault();
         if(time > 24 || time < 1 ){
             alert("وقت باید بین 1 تا 24 باشد");
             return;
         }
        const newCourse = [...list  , {name , time , condition:false}]
        setList(newCourse);
        setNameCounter((ps)=>ps+ 1);
        setTimeCounter((ps)=>Number(ps) + Number(time));
        
        setName('');
        setTime('');
        nameRef.current.focus();
        
        
     }

     // handle remove
     function removeTr(index){
         const oldList = [...list];
         const newList = oldList.filter((_ , i)=> i !== index);
         setList(newList);
         
     }

     useEffect( ()=>{
         saveLocalStorage();
     }
        ,[list]
     )

    
    // save in local storage
     function saveLocalStorage(){
        
         window.localStorage.setItem("list" , JSON.stringify(list));
     }
    
    //get local storage
    function getLocalStorage(){
       
        return window.localStorage.getItem("list") ? JSON.parse(window.localStorage.getItem("list")):[];
    }

    //handleChangeSelect
    function handleChangeSelect(index){
        const oldList = [...list];
        oldList[index].condition = !oldList[index].condition;
        setList(oldList);
    }
     
    const sendValue = {
        list , 
        removeTr,
        handleChangeSelect
    }

    
    // all time 
    let counter = 0
    function handleAllTime(){
        
        const alltime = list.map(
            (li)=>{
                counter = li.time
            }
        )
    }
   

     
    return (
    <InputContext.Provider value={sendValue}>
        <div>
            <form onSubmit={handleSubmit} className="form-inline " id="add">
                
                <div className="form-group px-1">نام درس
                <input ref={nameRef} required type="text"  className="form-control ml-2"
                  onChange={(e)=>setName(e.target.value)} 
                  value={name}
                /></div>

                <div className="form-group px-1">زمان مطالعه(ساعت)
                <input required type="number"  className="form-control ml-2"
                onChange={(e)=>setTime(e.target.value)} 
                value={time}
                /></div>
                <button className="btn btn-block btn-success mt-4 mb-2">اضافه کردن به لیست</button>
            </form><hr className="bg-danger "/>
                    <div className=" py-3 bg-secondary bg-light">
                             <h1 className="text-center">لیست دروس</h1>
                    </div>
            
            <div className="badges  my-3 mx-auto">
                         <button type="button" className="btn btn-primary">
                         <span className="badge badge-light mr-2">{timeCounter}</span>
                                کل ساعات مطالعه 
                                        
                        </button>
                        <button type="button" className="btn btn-primary mx-4">
                        <span className="badge badge-light mr-2">{timeCounter}</span>
                                  درس های تمام شده 
                                        
                        </button>
                        <button type="button" className="btn btn-primary">
                        <span className="badge badge-light mr-2">{timeCounter}</span>
                                  درس های تمام نشده 
                                        
                        </button>
            </div>
            <ShowList/>
        </div>
    </InputContext.Provider>
    )
}

export default Form
