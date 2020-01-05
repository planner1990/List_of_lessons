import React , { useState  , useRef , useEffect} from 'react';
import { InputContext } from '../../InputContext';
import ShowList from '../showcourse';
import './index.css';

function Form() {

    // input states
    const [name  , setName] = useState('');
    const [time , setTime] = useState(0);
    const nameRef = useRef();

    // counter states
    const [timeCounter , setTimeCounter] =useState(getLocalStorage("timeCounter"));
    const [completeCounter , setCompleteCounter] = useState(0);
    const [notCompleteCounter , setNotCompleteCounter] = useState(0);
    const [allCoure , setAllCourse] = useState(getLocalStorage("allCourse"));
    

    // list states

    const [list , setList] = useState(getLocalStorage("list"));

    // handle submit
     function handleSubmit(e){
         e.preventDefault();
         if(time > 24 || time < 1 ){
            Alert("زمان باید بین 1 الی 24 باشد");
     
            
        
         }else{
               if(timeCounter >= 24 ){
            Alert("بیشتر از 24 ساعت در روز امکان پذیر نیست");
 
                        }else{
                        const newCourse = [...list  , {name , time , condition:false}]
                        setList(newCourse);

                        setTimeCounter(Number(timeCounter) + Number(time));

                        setCompleteCounter(Number(completeCounter) + 1);

                        setAllCourse(Number(allCoure) + 1);
                        setName('');
                        setTime('');
                        nameRef.current.focus();
                        }
    }
        
     }

     // alert 
     function Alert(message){
         
        document.getElementById('alert').style.display = 'inline-block';
        document.getElementById('alert').textContent = message;

         setTimeout(() => {
             document.getElementById('alert').style.display = 'none';
         }, 3000);
     }

     // handle remove
     function removeTr(index){
         const oldList = [...list];
         const newList = oldList.filter((_ , i)=> i !== index);
         setList(newList);
         setTimeCounter( Number(timeCounter) - Number(list[index].time));
         setAllCourse(Number(allCoure) - 1);
         
     }



     useEffect( ()=>{
         saveLocalStorage();
     }
        ,[list]
     )

    
    // save in local storage
     function saveLocalStorage(){
        
         window.localStorage.setItem("list" , JSON.stringify(list));
         window.localStorage.setItem("timeCounter" , JSON.stringify(timeCounter));
         window.localStorage.setItem("allCourse" , JSON.stringify(allCoure));
     }
    
    //get local storage
    function getLocalStorage(value){
       
        return window.localStorage.getItem(value) ? JSON.parse(window.localStorage.getItem(value)):[];
    }

    //handleChangeSelect
    function handleChangeSelect(index){
        const oldList = [...list];
        oldList[index].condition = !oldList[index].condition;

        // complete and not complete course 
        if(oldList[index].condition){
            setCompleteCounter(Number(completeCounter) - 1);
            setNotCompleteCounter(Number(notCompleteCounter  + 1));
        }else{
            setCompleteCounter(Number(completeCounter) + 1);
            setNotCompleteCounter(Number(notCompleteCounter  - 1));
        }
        setList(oldList);
    }
     
    const sendValue = {
        list , 
        removeTr,
        handleChangeSelect
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
                <div className="alert alert-danger" id="alert">
                    {/* alert */} 
                </div>
            </form><hr className="bg-danger "/>
                    <div className=" py-3 bg-secondary bg-light">
                             <h1 className="text-center">لیست دروس</h1>
                    </div>
            
            <div className="badges  my-3 mx-auto">
                         <button id="clock" type="button" className="btn btn-primary">
                         <span  className="badge badge-light mr-2">{timeCounter}</span>
                                کل ساعات مطالعه 
                                        
                        </button>
                        <button type="button" className="btn btn-primary mx-4">
                        <span className="badge badge-light mr-2">{completeCounter}</span>
                                  درس های تمام نشده 
                                        
                        </button>
                        <button type="button" className="btn btn-primary">
                        <span className="badge badge-light mr-2 ">{notCompleteCounter}</span>
                                  درس های تمام شده 
                                        
                        </button>
                        <button type="button" className="btn btn-primary ml-4">
                        <span className="badge badge-light mr-2">{allCoure}</span>
                                     تعداد کل دروس 
                                        
                        </button>
            </div>
            <ShowList/>
        </div>
    </InputContext.Provider>
    )
}

export default Form
