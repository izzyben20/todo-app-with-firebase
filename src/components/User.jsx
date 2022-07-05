import logo from './logo.PNG'

const User = () => {
  return (
    <section className='user'>
      <div className='logo'>
        <img src={logo} alt='logo' />
      </div>
      <div className='user-info'>
        <p>izicbenjamin@gmail.com</p>
        <button>Logout</button>
      </div>
    </section>
  )
}

export default User