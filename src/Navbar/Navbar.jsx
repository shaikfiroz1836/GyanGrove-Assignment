import React from 'react'
const Navbar = () => {
  return (
    <>
    <nav className='navbar-BookUs'>
        <div className='BookUs-Nav'>
            <div className='BookUs'>
              <a className='Now-a'>BookUsNow</a>
              <p className='Now_marker'>
                  <i id='map_fa' class="fa fa-map-marker" aria-hidden="true"> </i>
                  <span className='span_mum'>Mumbai,India</span>
                  <i id='fa_arrow' class='fa fa-angle-right'></i>
                </p>
            </div>
          <div className='categories'>
            <div className='div_btn'>
              <div>
                <button className='btn-bar'><i id='fa_bars' class='fa fa-bars'></i>Categories</button>
              </div>
            </div>
          </div>
          <div className='Search_Bar'>
             <div>
                  <form>
                    <input type='Search' placeholder='DJI phantom'/>
                    <label className='label_search'><i id='fa_search' class='fa fa-search'></i></label>
                 </form>
              </div>
          </div>
          <div className='Fav'>
            <div className='Fav_One'>
              <button className='fav_Btn_one'>
                <span className='span_one'><i id='fa_love' class='fa fa-heart'></i></span>
                <span className='span_two'>Favorites</span>
                </button>
              <button className='signIn_btn'>
                <span className='span_signIn_one'><i id='fa_love' class='fa fa-user'></i></span>
                <span className='span_signIn_two'>Sign In</span></button>
            </div>
          </div>
        </div>
    </nav>
      
    </>
  )
}

export default Navbar

