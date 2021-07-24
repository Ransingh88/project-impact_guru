import styles from "./style.module.css";
import { useState } from "react";
import PatientList from "./PatientList";
export function FundRaiser() {
  return (
    <div className={styles.mainCont} style={{ background: "#F7F7F7" }}>
      <div className={styles.imagediv}>
        <p
          style={{
            textAlign: "center",
            marginTop: "130px",
            color: "white",
            fontSize: "45px",
            fontFamily: "sans-serif",
          }}
        >
          Browse Fundraisers
        </p>
        <div className={styles.collectiondiv}>
          <div className={styles.textcontainer}>
            <div>
              <h1>&#8377;1500+ Cr*</h1>
              <p>Total amount raised so far</p>
            </div>
            <div>
              <h1>5 Lakh +</h1>
              <p>Lives impacted across the globe</p>
            </div>
            <div>
              <h1>165 +</h1>
              <p>No. of countries raised funds from</p>
            </div>
            <div>
              <h1>₹30 Lakh</h1>
              <p>Fastest funds raised in 24 hr</p>
            </div>
            <div>
              <h1>80G</h1>
              <p>80G Tax benefits for Indian donors</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.inputbox}>
        <div className={styles.searchbox}>
          <input type="text" placeholder="Search for Fundriser" />
          <button
            style={{ background: "white", border: "none", height: "7.2vh" }}
          >
            <img
              style={{ width: 25 }}
              src="https://i2.wp.com/www.thinkafrica.fi/wp-content/uploads/2019/04/search-icon.png?fit=1200%2C1200&ssl=1&w=640"
            ></img>
          </button>
        </div>
        <div className={styles.selection}>
          <select
            style={{
              border: "none",
              outline: "none",
              fontWeight: "bolder",
              marginLeft: "5px",
              height: "7vh",
            }}
            value="FILTER"
          >
            <option value="">FILTER</option>
            <option value="most funded"> &#8377; MOST FUNDED</option>
            <option value="urgent">&#8377; URGENT</option>
            <option value="tax">&#8377; TAX</option>
          </select>
        </div>
      </div>
      <div className={styles.databox}>
        <div className={styles.list}>
          <div>
            <img
              style={{ marginLeft: "6%", marginTop: "4vh" }}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLNMoEDl3Y3hs0ctTe_HGnywwT-BiKICdFfA&usqp=CAU"
            ></img>
            <p style={{ lineHeight: "40px", marginLeft: "4%" }}>Medical</p>
          </div>
          <div>
            <img
              style={{ marginLeft: "6%", marginTop: "4vh" }}
              src="https://i.pinimg.com/originals/37/19/ec/3719eceb9a3562487051c17741aad593.png"
            ></img>
            <p style={{ lineHeight: "40px", marginLeft: "4%" }}>NGO</p>
          </div>
          <div>
            <img
              style={{ marginLeft: "6%", marginTop: "4vh" }}
              src="https://static.thenounproject.com/png/104631-200.png"
            ></img>
            <p style={{ lineHeight: "40px", marginLeft: "4%" }}>
              Personal Cause
            </p>
          </div>
          <div>
            <img
              style={{ marginLeft: "6%", marginTop: "4vh" }}
              src="https://mpng.subpng.com/20200219/sjz/transparent-idea-icon-creative-icon-ipad-icon-5e4def8ee1c764.6668120315821659029248.jpg"
            ></img>
            <p style={{ lineHeight: "40px", marginLeft: "4%" }}>
              Creative Ideas
            </p>
          </div>
          <div>
            <img
              style={{ marginLeft: "6%", marginTop: "4vh" }}
              src="https://image.flaticon.com/icons/png/512/2162/2162957.png"
            ></img>
            <p style={{ lineHeight: "40px", marginLeft: "4%" }}>Acid Attacks</p>
          </div>
        </div>
        <div className={styles.patient}>
          <PatientList />
        </div>
      </div>
    </div>
  );
}
