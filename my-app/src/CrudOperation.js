import React, { useRef, useState } from 'react'

const CrudOperation = () => {
    const [listItems, setListItems] = useState([]);
    const [id,setId]=useState(0);
    const [updateValue,setUpdateValue] = useState({});
    const [isEditButton,setIsEditButton] =useState(false);
    const ref = useRef();
    const [value, setValue] = useState({
        fName:"",
        lName:""
    })
    const ShowList = () =>{
        return(
            <>
                {listItems.map((item)=>{
                    console.log(item)
                    
                    return(
                        <li key={item.id} className="d-flex justify-content-evenly align-items-baseline my-2">
                            
                                <span className="col-4">{item.value}</span>
                                <button type="button" className="col-3 btn btn-danger px-3" onClick={() => deleteItem(item.id)}>Delete</button>
                                <button type="button" className="col-3 btn btn-primary px-3" onClick={() => editItem(item.id)}>Edit</button>
                            </li>
                    )
                })}
            </>
        )
    }
    localStorage.setItem('ListNames',  JSON.stringify(listItems) );
    const deleteItem = (id) =>{
        listItems.splice(id,1);
         setListItems([...listItems])
    }
    const editItem = (id) =>{
        const input = document.getElementById("item");
        const editItem = listItems.find((item) => item.id == id);
        console.log(editItem)
        setUpdateValue(editItem);
        input.value = editItem.value;
        setIsEditButton(true);
    }
    const addItem = () =>{
        // const input = document.getElementById("item");
       console.log("ref",ref.current.value)
        const input = ref.current;
        if(input.value){
        setListItems([...listItems,{id:id,value:input.value }])
        setId(id +1);
        input.value = ""
        }
    }
    const updateItem = (id) =>{
        const input = document.getElementById("item");
        listItems.map((item)=>{
            return (
                <React.Fragment>
                    {item.id === id ? item.value = input.value : null}
                </React.Fragment>
            )
        })
        setListItems([...listItems]);
        setUpdateValue({})
        setIsEditButton(false)
        input.value = ""
    }
    // const setLocalStorge = window.localStorage.setItem('listNamea',listItems);
    const data={}
    const handlaChange = (e) =>{
         setValue((val)=>({...val,[e.target.name]:e.target.value}));
        let val = {};
        // setValue((val)=>({
        //     ...val,[ref.current.name] : ref.current.value
        // }))
        // setValue((val)=>({
        //     ...val,[e.target.name]:ref.current.value
        // }))
        // console.log(e.target.value.length)
        // data[e.target.id] = e.target.value; 
        // console.log(data)
    }
    // console.log("values",listItems)
  return (
    <div className="row list-window align-items-center justify-content-center">
    <div className="col-6 list-window-bg border border-1 p-5">
        <div className="input-group">
            {JSON.stringify(value)}
            <input type="text" id="item" name="item" className="form-control" onChange={(e)=>{handlaChange(e)}} ref={ref}/>
            firstName:<input type="text" name="fName" className='form-control' onChange={(e)=>{handlaChange(e)}} />
            lastName:<input type="text" name="lName" className='form-control' onChange={(e)=>{handlaChange(e)}}/>
            {/* <p>your name is:{value}</p> */}
            {isEditButton ? <React.Fragment><button type="button" className="btn btn-info px-3 text-light" onClick={() => updateItem(updateValue.id)}>Update</button>
            {/* <button type="button" className="btn btn-info px-3 text-light" onClick={() => {canceItem()}}>Cancel</button> */}
            </React.Fragment>
                          : <button type="button" className="btn btn-success px-3" onClick={()=>{addItem()}}>Add Item</button>
            }
        </div>
        <div className="display-list border border-1 my-5">
            <ul>
                <ShowList />
                <h1>{data.item}</h1>
            </ul>
        </div>
    </div>
</div>
  )
}

export default CrudOperation