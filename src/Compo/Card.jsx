import React, { useEffect } from "react";

export const Card = ({ data }) => {
  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div className="row  my-3 border-0 bottom_line" >
      <div className="row">
        <div className="col-8" style={{height:'100%'}}>
          <div className="row">
            <h5 style={{color:'#3e4152'}}>{data && data?.shop_address} Shop</h5>
            <h3 className="ms-4" style={{ color: "#ee8900" }}>
              {" "}
              Rs.
              {data && data?.offer_price}
            </h3>
          </div>
          <div className="row my-2">
            <h6>Delievery & Services</h6>
            {/* with icon and option */}

            <div className="row">
              <div className="icon col-2">
                <img src={data?.express_delivery_icon} alt="" />
              </div>
              <div className="icon col-7  h6 row ">
                <div
                  className="col"
                  style={{ width: "152px", fontSize: "14px" }}
                >
                  <span className="text-muted">Express delivery</span>
                  <h6 className="text-muted" style={{ fontSize: "10px" }}>
                    (delivery in 1 hour)
                  </h6>
                </div>
              </div>
              <div className="icon  col-3  ">
                <img src={data?.check_icon} alt="" />
              </div>
            </div>
            <div className="row">
              <div className="icon col-2">
                <img src={data?.return_option_icon} alt="" />
              </div>
              <div className="icon col-7 h6 row">
                <div
                  className="col"
                  style={{ width: "152px", fontSize: "14px" }}
                >
                  <span className="text-muted">Return Option</span>
                </div>
              </div>
              <div className="icon col-3">
                <img src={data?.check_icon} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="col-4">
            
          {/* have icon and name */}
          <div className="d-flex justify-content-center flex-column  justify-content-center align-items-center ">
            <img
              src={data && data?.shop_image}
              alt="icon"
              width={100}
              height={100}
            />
            <p className="m-2 h6 " style={{fontSize:'14px', color:'#6f717e'}}> {data && data?.shop_name}</p>
          </div>
          
        </div>
      </div>
      
      <div className="my-3 btn-extra">
        <button
          type="button"
          class="btn btn-primary"
          style={{ backgroundColor: "#229bc6" }}
        >
          {/* icon */}
          <img
            src={data?.extra_offer_icon}
            alt=""
            className="me-2"
          />
          Extra Offer
        </button>
        <div className="row my-2">
          <span className="text-muted">{data?.product_name}</span>
        </div>
        <div className="row">
          {/* Center button */}
          <div className="d-flex justify-content-center">
            <button
              type="button"
              class="btn btn-primary my-4"
              style={{ backgroundColor: "#ee8900", border: 0 }}
            >
              Buy Now
            </button>
          </div>
        </div>

        {/* alternative pro. */}
        <div className="row" style={{maxWidth:'100%'}}>
          <span>Alternate Products</span>
          <div class="card mb-3 mx-3" style={{margin:0,padding:0}}>
            <div class="row g-0">
              <div class="col-4">
                <img
                  src="https://aksh21.pythonanywhere.com/media/photo.png"
                  class="img-fluid rounded-start h-100"
                  alt="..."
                />
              </div>
              <div class="col-8">
                <div class="card-body" style={{ paddingLeft: '0px',
// paddingRight: '0',
// paddingTop: '0'
}}
>
                  <h5 class="card-title " style={{fontSize:'10px'}}>{data?.alternate_product_details
                      ?.product_name}</h5>
                  <p class="card-text d-flex" style={{ alignItems:'center'}}>
                    {/* icon */}
                    <img
                width={20}
                        src={   
                            data?.alternate_product_details
                            ?.online_price_icon
                        }
                        alt=""
                        className="me-2"
                    />
                    {/* cross rs price */}
                    <span className="text-muted card_text" style={{fontSize:'11px'}}>
                        <del>Rs.
                            {data?.alternate_product_details
                            ?.online_price}
                        </del>
                    </span>
                    {/* rs price */}
                    <span style={{color:"#ee8900", fontWeight:'bold',fontSize:'20px'}} className="card_text_1"> Rs.
                        {data?.alternate_product_details
                        ?.offer_price}
                    </span> <button
              type="button"
              class="btn btn-primary ms-3 btn-sm "
              style={{ backgroundColor: "#ee8900", border: 0 }}
            >
              Order Now
            </button>

                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div
              style={{
                borderLeft: "1px solid #ccc1c1",
                height: "76%",
                position: "relative",
                top: "11%",
              }}
            /> */}
    </div>
  );
};
