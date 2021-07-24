import React, { Component } from "react";
import styles from "./style.module.css";
import axios from "axios";
class PatientList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Data: [],
    };
  }
  componentDidMount() {
    axios
      .get("http://localhost:3001/patentInformation")
      .then((Response) => {
        console.log(Response);
        this.setState({ Data: Response.data });
      })
      .catch((Error) => {
        console.log(Error);
      });
  }
  render() {
    const { Data } = this.state;
    const pataientData = Data.slice(0, 1);
    return (
      <div className={styles.griddisplay}>
        {pataientData.map((el) => (
          <div
            key={el.id}
            style={{
              height: "70vh",
              background: "#FFFFFF",
              boxShadow: " 0 4px 8px 0 rgba(0,0,0,0.2)",
              transition: "0.3s",
            }}
          >
            <div
              style={{
                width: "100%",
                height: "30vh",
                border: "1px solid white",
                backgroundImage: `url(${el.backgroundImage})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            >
              <div
                style={{
                  width: "35%",
                  height: "4vh",
                  border: "1px solid white",
                  borderTopLeftRadius: "10px",
                  borderBottomRightRadius: "20px",
                  float: "left",
                  background: "#21936A",
                }}
              >
                <p
                  style={{
                    color: "#FFFFFF",
                    lineHeight: "7px",
                    fontSize: "11px",
                    fontWeight: "bolder",
                  }}
                >
                  {el.tax}
                </p>
              </div>
              <div
                style={{
                  width: "35%",
                  height: "4vh",
                  border: "1px solid white",
                  borderTopRightRadius: "10px",
                  borderBottomLeftRadius: "20px",
                  float: "right",
                  background: "#E63427",
                }}
              >
                <p
                  style={{
                    color: "#FFFFFF",
                    lineHeight: "7px",
                    fontSize: "11px",
                    fontWeight: "bolder",
                  }}
                >
                  {el.Emergency}
                </p>
              </div>
              <div
                style={{
                  width: "35px",
                  height: "35px",
                  borderRadius: "50%",
                  border: "1px solid white",
                  marginTop: "75%",
                  marginLeft: "40%",
                  background: "#FFFFFF",
                }}
              >
                <img src={el.typeOfEmergency} alt="" />
              </div>
            </div>
            <div
              style={{
                width: "95%",
                height: "7vh",
                border: "1px solid white",
                margin: "auto",
                marginTop: "1%",
              }}
            >
              <p
                style={{
                  lineHeight: "normal",
                  fontWeight: "bold",
                  color: "#OOO",
                }}
              >
                {el.description}
              </p>
            </div>
            <div
              style={{
                width: "50%",
                height: "4vh",
                border: "1px solid white",
                margin: "auto",
                marginTop: "20px",
              }}
            >
              <p style={{ lineHeight: "1px" }}>{el.sharedPerson}</p>
            </div>
            <div
              style={{
                width: "30%",
                height: "4.7vh",
                border: "1px solid gray",
                marginTop: "15px",
                marginLeft: "15%",
                float: "left",
                borderRadius: "20px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src="https://png.pngtree.com/element_our/md/20180626/md_5b321c98efaa6.jpg"
                style={{
                  width: "25px",
                  height: "25px",
                  borderRadius: "50%",
                  marginLeft: "1%",
                }}
              ></img>
              <p style={{ lineHeight: "1px" }}>Share</p>
            </div>
            <div
              style={{
                width: "30%",
                height: "4.7vh",
                border: "1px solid gray",
                marginTop: "15px",
                marginLeft: "10%",
                float: "left",
                borderRadius: "20px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvplkZzQ3Bio6wLq655CmMgVotXWqXp6U8dpRG00XIErCDrV-IzOWE_xejhiF1gFlBFDA&usqp=CAU"
                style={{
                  width: "25px",
                  height: "25px",
                  borderRadius: "50%",
                  marginLeft: "1%",
                }}
              ></img>
              <p style={{ lineHeight: "1px" }}>Share</p>
            </div>
            <div
              style={{
                width: "90%",
                height: "8vh",
                border: "1px solid white",
                clear: "both",
                margin: "auto",
                marginTop: "50px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                  height: "3vh",
                }}
              >
                <p>&#8377;{el.raisedFund}raised</p>
                <p>{el.coverdfund}</p>
              </div>
              <div
                style={{
                  width: "100%",
                  height: "1vh",
                  border: "1px solid white",
                  marginTop: "15px",
                  borderRadius: "5px",
                  background: "#F7F7F7",
                  boxShadow: " 0 4px 8px 0 rgba(0,0,0,0.2)",
                  transition: "0.3s",
                }}
              >
                <div
                  style={{
                    width: `${el.coverdfund}`,
                    backgroundColor: "#21936A",
                    height: "1vh",
                    boxShadow: " 0 4px 8px 0 rgba(0,0,0,0.2)",
                    transition: "0.3s",
                  }}
                ></div>
              </div>
            </div>
            <div
              style={{
                width: "90%",
                height: "7vh",
                border: "1px solid white",
                margin: "auto",
                clear: "both",
                marginTop: "5px",
                borderRadius: "50px",
                backgroundColor: "#FF8502",
              }}
            >
              <h4
                style={{
                  lineHeight: "10px",
                  color: "white",
                  fontWeight: "bolder",
                }}
              >
                DONATE
              </h4>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
export default PatientList;
