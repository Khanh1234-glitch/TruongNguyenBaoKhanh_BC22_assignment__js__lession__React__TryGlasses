import React, { Component } from "react";
import dataJson from "./../dataGlasses.json"
export default class Main extends Component {
    state ={
        glassesinfo:{
            "id": 1,
            "price": 30,
            "name": "GUCCI G8850U",
            "url": "./glassesImage/v1.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        }

    }
    renderGlassList=()=>{
        return dataJson.map((glassesItem) => {
            return(
                <>
                {/* <p>{glassesItem.name}</p> */}
                <img onClick={()=>{this.changeGlasses(glassesItem)}} style={{cursor:"pointer"}} className="ml-2 p-2 border border-width-1" width="120px" src={glassesItem.url}/>
                </>
            )
        })
    }
    changeGlasses =(newGlasses)=>{
        this.setState({
            glassesinfo:newGlasses,
        })
    }
  render() {
    const style = {
      top: "61px",
      right: "120px",
    };
    const styleInfo = {
      width:"201px",
      top: "145px",
      left: "269px",
      backgroundColor: "rgba(249,173,123,.5)",
      height:"100px",
      textAlign:"left",
    };
    return (
      <div>
        <div
          style={{
            backgroundImage: "url(./glassesImage/background.jpg)",
            backgroundSize: "100%",
            height: "1000px",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div style={{ backgroundColor: "rgba(0,0,0,.8)", height: "100%" }}>
            <h3
              style={{ backgroundColor: "rgba(0,0,0,.3)" }}
              className="text-center text-light p-5"
            >
              TRY GLASSES APP ONLINE
            </h3>
            <div className="container">
              <div className="row">
                <div className="col-6 mt-5 text-center">
                  <div className="position-relative">
                    <img
                      className="position-absolute"
                      width="200px"
                      src="./glassesImage/model.jpg"
                      alt=""
                    />
                    <img
                      style={style}
                      className="position-absolute "
                      width="100px"
                      src={this.state.glassesinfo.url}
                      alt=""
                    />
                    <div style={styleInfo} className="position-relative">
                      <p className="text-uppercase font-weight-bold text-primary">
                        {this.state.glassesinfo.name}
                      </p>
                      <span style={{fontSize:"9px"}} className=" font-weight-bold ">{this.state.glassesinfo.desc}</span>
                    </div>
                  </div>
                </div>
                <div className="col-6 mt-5 text-center">
                  <img width="200px" src="./glassesImage/model.jpg" alt="" />
                </div>
              </div>
            </div>
            {/* Selected Glasses */}
            <div className="text-center d-flex mt-5 container bg-light justify-content-center">
                {this.renderGlassList()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
