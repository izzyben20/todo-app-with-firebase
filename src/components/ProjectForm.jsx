
const ProjectForm = ({ heading, handleSubmit, value, setValue, setShowModal, confirmButtonText }) => {
  return (
    <form className="projectForm" onSubmit={handleSubmit}>
        <h3>{heading}</h3>
        <input 
            value={value}
            onChange={(e) => setValue(e.target.value)}
            type='text'
            placeholder="project name..."
            autoFocus
        />
        <button
            className="cancel"
            onClick={() => setShowModal(false)}
        >
            cancel
        </button>
        <button
            className="confirm"
        >
            {confirmButtonText}
        </button>
    </form>
  )
}

export default ProjectForm