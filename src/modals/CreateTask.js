import React, { useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const CreateTask = ({modal, toggle,save}) => {
    const [taskName, setTaskName]=useState('');
    const handleChange=(event)=>{
        const name=event.target.name
        const value=event.target.value
        if(name==="taskName")
        {
            setTaskName(value);
        }
        
    }
    const handleSave=()=>{
        let taskObj={}
        taskObj["Name"]=taskName
        save(taskObj)


    }
    return (
        <Modal isOpen={modal} toggle={toggle} >
        <ModalHeader toggle={toggle}>Create Task</ModalHeader>
        <ModalBody>
            <form >
                <div className="form-group">
                    <input type="text" className="form-control" value={taskName} onChange={handleChange}  name="taskName"/>
                </div>
                

            </form>
          
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={handleSave}>Create</Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
      
    )
}

export default CreateTask
