import styles from "./style.module.css";
import { Link } from "react-router-dom";

function PatientList({ pataientData, load }) {
  console.log("pataientData" + pataientData.length);

  return (
    <div className={styles.griddisplay}>
      {pataientData.slice(0, load).map((el) => (
        <div key={el.id} className={styles.patientCards}>
          <div
            className={styles.cardPhotos}
            style={{ backgroundImage: `url(${el.backgroundImage})` }}
          >
            <div className={styles.taxBenefit}>
              <p className={styles.taxText}>{el.tax}</p>
            </div>
            <div className={styles.urgent}>
              <p className={styles.urgentText}>{el.Emergency}</p>
            </div>
            <div className={styles.emergencyLogo}>
              <img src={el.typeOfEmergency} alt="" />
            </div>
          </div>
          <div>
            <p className={styles.patientDesc}>{el.description}</p>
          </div>
          <div className={styles.sharedPerson}>
            <p>{el.sharedPerson}</p>
          </div>
          <div className={styles.whatsAppLogo}>
            <img
              className={styles.logos}
              src="https://image.flaticon.com/icons/png/512/1384/1384023.png"
              alt=""
            />
            <p>Share</p>
          </div>
          <div className={styles.whatsAppLogo}>
            <img
              className={styles.logos}
              src="https://image.flaticon.com/icons/png/512/2111/2111564.png"
              alt=""
            />
            <p>Share</p>
          </div>
          <div>
            <div className={styles.donationDetails}>
              <p>
                &#8377; {el.raisedFund}{" "}
                <span className={styles.raised}>Raised</span>
              </p>
              <p>{el.coverdfund}</p>
            </div>
            <div className={styles.donatonTrack}>
              <div
                className={styles.raisedTrack}
                style={{
                  width: `${el.coverdfund}`,
                }}
              />
            </div>
          </div>
          <button className={styles.donatebtn}>
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to="/fundraisers/help-patient"
            >
              DONATE
            </Link>
          </button>
        </div>
      ))}
    </div>
  );
}
export default PatientList;
