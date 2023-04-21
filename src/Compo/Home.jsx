import React from "react";
import { Card } from "./Card";

export const Home = ({ data }) => {
  return (
    <>
      <header className="bg-white  py-5">
        <div className="container p-5 hero">
          <div className="h1 text-center ">
            <b>{data && data?.heading?.heading}</b>
          </div>
          <div className="h5 mt-4 text-center">
            {data && data?.heading?.sub_heading}
          </div>
        </div>
      </header>

      {/* card */}
      <div className="container-fluid " style={{ backgroundColor: "#fafafa" }}>
        <div className="row">
          <div className="col-sm-8  bottom_line" style={{ backgroundColor: "#fafafa" }}>
            <div
              class="card mb-3 md-8"
              style={{
                border: 0,
                maxWidth: "100%",
                backgroundColor: "#fafafa",
              }}
            >
              <div class="row g-0">
                <div class="col-md-4">
                  <img
                    src={data?.main_product?.main_product_svg}
                    class="img-fluid rounded-start"
                    alt="Icon"
                  />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">
                      {data?.main_product?.product_title}
                    </h5>
                    <p class="card-text">
                      {data?.main_product?.product_pipeline}
                    </p>
                    <div className="d-flex">
                      <img
                        src={data?.main_product?.online_price_icon}
                        alt="icon"
                      />
                      <p className="ms-2">{data?.main_product?.online_price}</p>
                    </div>
                    <div className="qty">
                      <p className="d-inline-block">
                        Qty: {data?.main_product?.quantity}
                      </p>
                    </div>
                    <p class="card-text">
                      <a href="/" class="text-dark">
                        All details
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4 d-flex col-sm-8">
            <div className="d-none d-md-block"
              style={{
                borderLeft: "1px solid #ccc1c1",
                height: "76%",
                position: "relative",
                top: "11%",
              }}
            />

            <div
              class="card p-2"
              style={{ width: "18rem", backgroundColor: "#fafafa", border: 0 }}
            >
              <div class="card-body">
                <h2 class="card-title">
                  Status
                  <img
                    src={data?.main_product?.status_icon}
                    alt=""
                    className="p-2"
                  />
                </h2>
                <h6 class="card-subtitle mb-2 text-secondary">
                  Time Remaining
                </h6>
                <h3 class="card-text" style={{ color: "#ff4a48" }}>
                  {data?.main_product?.time_remaining} minutes
                </h3>

                {/* bids */}
                <div className="bids mt-5">
                  <div className="d-flex">
                    <span className="text-muted h5">
                      BIDS PLACED
                      <span
                        className="m-1 d-inline-block heading6"
                        style={{
                          borderLeft: "2px solid rgb(218, 218, 218)",
                          height: "96%",
                          position: "relative",
                          top: "42%",
                          display: "inline-block",
                        }}
                      />
                      <span  style={{color:'lightgreen', fontWeight:'bold'}}>
                      {data?.main_product?.bid_placed}
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
                        
          {/* cards go */}
          <div className="px-3 px-md-4   mt-5 px-sm-3 ">
            <div className="row gx-2" style={{maxWidth:'100%'}}>

                        {
                            data?.bids?.map((item,idx)=>{
                                return(
                                    <div className="col  col-sm-6 col-md-auto col-lg-6 col-xxl ms-2 side_line " style={{borderRight: idx !==2 ? '1px solid #e9e9e9' : '' }}>
                                        <Card data={item} />
                                    </div>
                                )
                            })
                        }


                {/* <div className="col">
          <Card  data={data} /> 
                </div>



                <div className="col">
          <Card  data={data} /> 

                </div>
                <div className="col">
          <Card  data={data} /> 

                </div> */}
            </div>
          </div>
    </>
  );
};
