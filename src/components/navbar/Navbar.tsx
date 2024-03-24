import './navbar.scss'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="logo">
        <img src="logo.svg" alt="logo" />
        <span>Lama Admin</span>
      </div>
      
      <div className="icons">
        <img src="/search.svg" alt="search-icon" />
        <img src="/app.svg" alt="app-icon" />
        <img src="/expand.svg" alt="expand-icon" />

        <div className="notifications">
          <img src="/notifications.svg" alt="notification-icon" />
          <span>2</span>
        </div>

        <div className="user">
          <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="user-img" />
          <span>Akshay G</span>
        </div>

        <img src="setting.svg" alt="setting-icon" />
      </div>
    </div>
  )
}

export default Navbar
