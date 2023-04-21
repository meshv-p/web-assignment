import React, { useEffect } from "react";

export const Navbar = (data) => {
  useEffect(() => {
      console.log(data)
      data && console.log(data)
      data && console.log(data.data.nav_bar)
  }, [data])

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
        <div className="container-fluid d-md-flex row  d-sm-block">
         
          <button
            className="navbar-toggler d-block border-0 col col-sm-1"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          

            
          <div class="collapse navbar-collapse ms-0 col-11 row" id="navbarSupportedContent" 
          // style={{marginLeft: '401px'}}
          >
     
       {/* Search bar */}
       <div className="collapse navbar-collapse col-8 justify-content-center" id="navbarSupportedContent" 
      //  style={{maxWidth: '465px'}}
       >
            <form className="d-flex seachbar align-items-center" 
              style={{
                  background:'white',
                  padding:3,
                  borderRadius:'3px',
                  width:'45%'
              }}
            > 
              <input
                className="form-control me-2"
                type="search"
                placeholder="Enter here"
                aria-label="Search"
                // style={{width: '465px'}}
                style={{
                    backgroundColor:'transparent',
                    border:0
                }}
              />
              <button className="btn btn-warning" type="submit" 
              // style={{position: 'absolute',right: '39%',padding: '5px 20px', color:"white"}}
              >
                Search
              </button>
            </form>
          </div>
     
     
     {/* Options */}
     <ul className="navbar-nav col-4 gap-4 align-items-center nav_bar" 
    //  style={{marginLeft:'318px'}}
     >
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

           

          
        </div>
      </nav>
    </>
  );
};
