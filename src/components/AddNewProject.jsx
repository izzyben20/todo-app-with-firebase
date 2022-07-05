import { useState } from 'react'
import { AiFillPlusSquare } from 'react-icons/ai'
import Modal from './Modal'
import ProjectForm from './ProjectForm'

const AddNewProject = () => {
    const [showModal, setShowModal] = useState(false)
    const [projectName, setProjectName] = useState('')

    const handleSubmit = () => {

    }

  return (
    <div className='addNewProject'>
        <div className='add-button'>
            <span onClick={() => setShowModal(true)}>
                <AiFillPlusSquare />
            </span>
        </div>
        <Modal showModal={showModal} setShowModal={setShowModal}>
            <ProjectForm 
                handleSubmit={handleSubmit} 
                heading='New project'
                value={projectName}
                setValue={setProjectName}
                setShowModal={setShowModal}
                confirmButtonText='+ Add Project'
            />
        </Modal>
    </div>
  )
}

export default AddNewProject