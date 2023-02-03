import { useState } from "react";
import styles from "./Filter.module.css";

const Filter = ({filteration}) => {
  const [filtername, setFiltername] = useState("");
  const filterHandler = (e) => {
    const name = e.target.value;
    setFiltername(name);
    filteration(name);
  };

  return (
    <div className={styles.mp}>
      <input
        type="text"
        placeholder="For Test Ref"
        value={filtername}
        onChange={filterHandler}
      />
    </div>
  );
};

export default Filter;
