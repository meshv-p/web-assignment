import React, { useEffect } from "react";

export const Navbar = (data) => {
  useEffect(() => {
      console.log(data)
      data && console.log(data)
      data && console.log(data.data.nav_bar)
  }, [data])

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark d-flex justify-content-center">
        <div className="container-fluid d-flex justify-content-center">
         
          <button
            className="navbar-toggler d-block border-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          
            {/* Search bar */}
          <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{marginLeft :'27%'}}>
            <form className="d-flex align-items-center"> 
              <input
                className="form-control me-2"
                type="search"
                placeholder="Enter here"
                aria-label="Search"
                style={{width: '465px'}}
              />
              <button className="btn btn-warning" type="submit" style={{position: 'absolute',right: '39%',padding: '5px 20px', color:"white"}}>
                Search
              </button>
            </form>
          </div>

          {/* Options */}
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link  dot position-relative" aria-current="page" href="/">
                Live Bids <span className="icon-button__badge"></span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                  {/* svg icon */}
                
                  <img src= {
                  data &&
                  data?.data?.nav_bar?.person_icon
                } alt="User" width={25} height={25} />
               


              </a>
            </li>
            <li className="nav-item ">
              <a
                className="nav-link "
                href="/"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Help & Support
              </a>
             
            </li>
            
          </ul>
        </div>
      </nav>
    </>
  );
};
