import styles from "./UserForm.module.css";
import Container from "@material-ui/core/Container";
import { BasicDetails } from "../BasicDetails";
import { BeneficiaryDetails } from "../BeneficiaryDetails";
import { FundraiserDetails } from "../FundraiserDetails";
import { Submit } from "../Submit";
import { Expand } from "../Accordion";
import { useForm, useStep } from "react-hooks-helper";

const initial = {
  fullname: "",
  email: "",
  mob: "",
  beneficiary: "",
  loan: "",
  religious: "",
  city: "",
  cause: "",
  title: "",
  goal: "",
};

const steps = [
  { id: "Basic Information" },
  { id: "Beneficiary Information" },
  { id: "Fundraiser Details" },
  { id: "Submit" },
];

export function NavSvg() {
  return (
    <>
      <img className={styles.wavetop} src="./waveBg.png" alt="" />
      <div className={styles.nav}>
        {/* <Container style={{border:"1px solid"}} maxWidth="md">
          <div className={styles.navbar}>
            <img src="./impactguruLogo.png" alt="" />
            <input type="text" placeholder="Search" />
          </div>
        </Container> */}
        NavBar
      </div>
    </>
  );
}

export function UserForm() {
  const [data, setData] = useForm(initial);
  const { step, navigation } = useStep({
    steps,
    initialStep: 0,
  });

  const props = { data, setData, navigation };

  switch (step.id) {
    case "Basic Information":
      return (
        <div className={styles.cards}>
          <div>
            <NavSvg />
            <p>Start a Fundraiser</p>
            <BasicDetails {...props} />
          </div>
          <div className={styles.accordion}>
            <Expand />
          </div>
        </div>
      );

    case "Beneficiary Information":
      return (
        <div className={styles.cards}>
          <div>
            <NavSvg />
            <p>Beneficiary Details</p>
            <BeneficiaryDetails {...props} />
          </div>
          <div className={styles.accordion}>
            <Expand />
          </div>
        </div>
      );

    case "Fundraiser Details":
      return (
        <div className={styles.cards}>
          <div>
            <NavSvg />
            <p>Fundraiser Details</p>
            <FundraiserDetails {...props} />
          </div>
          <div className={styles.accordion}>
            <Expand />
          </div>
        </div>
      );

    case "Submit":
      return (
        <div className={styles.cards}>
          <div>
            <NavSvg />
            <Submit {...props} />
          </div>
          <div className={styles.accordion}>
            <Expand />
          </div>
        </div>
      );

    default:
      return (
        <img
          src="https://cdn.dribbble.com/users/251873/screenshots/9288094/13539-sign-for-error-or-explanation-alert.gif"
          alt=""
        />
      );
  }
}
