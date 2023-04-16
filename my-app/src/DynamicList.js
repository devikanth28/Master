import React, { useState } from "react";

const DynamicList = () => {
    const [listItems, setListItems] = useState([]);
    const [itemId, setItemId] = useState(0);
    const [isEditButton, setIsEditButton] = useState(false);
    const [updateValue, setUpdateValue] = useState({});

    const ShowList = () => {
        return (
            <>
                {listItems.map((item) => {
                    return (
                        <>
                            <li key={item.id} className="d-flex justify-content-evenly align-items-baseline my-2">
                                <span className="col-4">{item.value}</span>
                                <button type="button" className="col-3 btn btn-danger px-3" onClick={() => deleteItem(item.id)}>Delete</button>
                                <button type="button" className="col-3 btn btn-primary px-3" onClick={() => editItem(item.id)}>Edit</button>
                            </li>
                        </>
                    );
                })}
            </>
        );
    }

    const addItem = () => {
        const input = document.getElementById("item");
        setItemId(itemId + 1);
        setListItems([...listItems, {id : itemId, value : input.value}]);
        input.value = "";
    }

    const deleteItem = (id) => {
        listItems.splice(id, 1);
        setListItems([...listItems]);
    }

    const updateItem = (id) => {
        const input = document.getElementById("item");
        listItems.map((item) => {
            if(item.id === id){
                item.value = input.value;
            }
            return null;
        });
        setListItems([...listItems]);
        input.value = "";
        setUpdateValue({});
        setIsEditButton(false);
    }

    const editItem = (id) => {
        const input = document.getElementById("item");
        let editItem =  listItems.find((item) => item.id === id );
        setUpdateValue(editItem);
        input.value = editItem.value;
        setIsEditButton(true);
    }
    const canceItem = () =>{
        setIsEditButton(false);
        const input = document.getElementById("item");
        input.value = ""
    }
    return (
        <>
            <div className="row list-window align-items-center justify-content-center">
                <div className="col-6 list-window-bg border border-1 p-5">
                    <div className="input-group">
                        <input type="text" id="item" name="item" className="form-control" />
                        {isEditButton ? <React.Fragment><button type="button" className="btn btn-info px-3 text-light" onClick={() => updateItem(updateValue.id)}>Update</button>
                        <button type="button" className="btn btn-info px-3 text-light" onClick={() => {canceItem()}}>Cancel</button></React.Fragment>
                                      : <button type="button" className="btn btn-success px-3" onClick={addItem}>Add</button>
                        }
                    </div>
                    <div className="display-list border border-1 my-5">
                        <ul>
                            <ShowList />
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DynamicList;