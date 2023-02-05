import styles from "./Form.module.css";


const Form = (props) => {
  return <form onSubmit={props.onSubmit}>{props.children}</form>;
};

const Controler = (props) => {
  return <div className={styles.control}>{props.children}</div>;
};

Form.Controler = Controler;

export default Form;