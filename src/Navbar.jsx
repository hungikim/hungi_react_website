import './Navbar.css'

export default function Navbar(){
    return (
      <nav>
        <div className='nav-left'>
          <span className='nav-item'>Item1</span>&nbsp;&nbsp;
          <span className='nav-item'>Item2</span>&nbsp;&nbsp;
          <div className='dropdown'>
            <span className='nav-item'>Item3▾</span>
            <div className='dropdown-content'>
              <p className='nav-item'>Item1</p>
              <p className='nav-item'>Item2</p>
            </div>
          </div>
        </div>
        <div className='nav-right'>
          <span className='nav-item'>Item4</span>&nbsp;&nbsp;
          <span className='nav-item'>Contact</span>
        </div>
      </nav>
    )
  }