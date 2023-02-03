import styles from "./Card.module.css";

const Card = ({
  id,
  name,
  department,
  phone,
  email,
  officialemail,
  gender,
  deleteFun
}) => {
  return (
    <div
      className={styles.cardWrapper}
      style={{ backgroundColor: gender === "Female" ? "pink" : "green" }}
    >
      <div>Staff Name : {name}</div>
      <div>Staff Department : {department}</div>
      <div>Staff Phone : {phone}</div>
      <div>Staff Email : {email}</div>
      <div>Staff Official Email :{officialemail}</div>
      <div>Staff Gender :{gender}</div>
      <div className={styles.deleteBtn} onClick={(e) => deleteFun(e, id)}>
        x
      </div>
    </div>
  );
};

export default Card;
