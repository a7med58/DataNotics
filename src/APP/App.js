import { Fragment, useState } from "react";
import AddUser from "../component/AddUser/AddUser";
import CardList from "../component/CardList/CardList";
import FilterInput from "../component/FilterInput/FilterInput";
import Button from "../component/Layout/Button";
import Modal from "../component/Modal/Modal";
import "./App.css";

const App = () => {
  const [cardTogel, setcardTogel] = useState(true);
  const [filter, setFilter] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [boys, setBoys] = useState([
    {
      id: 1111,
      name: "Mohamed Ragab",
      department: "Animal Production",
      phone: "01123919198",
      email: "a7med_58@hotmail.com",
      officialemail: "a7med_58@agr.cu.edu.eg",
      gender: "Male",
    },
    {
      id: 2111,
      name: "Ezz Ragab",
      department: "Animal Production",
      phone: "01123919198",
      email: "a7med_58@hotmail.com",
      officialemail: "a7med_58@agr.cu.edu.eg",
      gender: "Male",
    },

    {
      id: 3111,
      name: "Ahmed Ragab",
      department: "Animal Production",
      phone: "01123919198",
      email: "a7med_58@hotmail.com",
      officialemail: "a7med_58@agr.cu.edu.eg",
      gender: "Male",
    },
    {
      id: 4111,
      name: "Sara Ragab",
      department: "Animal Production",
      phone: "01123919198",
      email: "a7med_58@hotmail.com",
      officialemail: "a7med_58@agr.cu.edu.eg",
      gender: "Female",
    },

    {
      id: 5111,
      name: "Eman Ahmed",
      department: "Animal Production",
      phone: "01123919198",
      email: "a7med_58@hotmail.com",
      officialemail: "a7med_58@agr.cu.edu.eg",
      gender: "Female",
    },
  ]);
  const addstaffHandller = (data) => {
    setBoys((prevState) => setBoys([...prevState, data]));
  };

  const deleteHandler = (e, selectedID) => {
    //const deleteOperation = boys.filter((el, idx) => idx !== clickedIdx);
    //setBoys(deleteOperation);
    setBoys((prevState) => {
      return prevState.filter((el) => el.id !== selectedID);
    });
  };

  const filterNames = (name) => {
    setFilter(name);
  };
  const namesHandler = () => {
    if (filter.length !== 0) {
      return boys.filter((el) => el.name.includes(filter));
    }
    return boys;
  };

  return (
    <Fragment>
      <div className="mainContainer">
        <h1>Faculty Staff </h1>
        <div style={{ display: "Flex", marginBottom: "10px" }}>
          <Button
            onClick={() => setcardTogel(!cardTogel)}
            style={{ marginRight: "20px" }}
          >
            {cardTogel ? "Hide Names" : "Show Names"}
          </Button>

          <Button onClick={() => setShowModal(true)}>New Record</Button>
        </div>

        <div className={cardTogel ? "show" : "hide"}>
          <FilterInput filteration={filterNames} />
          <CardList
            staffList={namesHandler()}
            type="men"
            deleteFun={deleteHandler}
          />
        </div>
      </div>
      <Modal show={showModal} closeModal={() => setShowModal(false)}>
        <AddUser
          addstaffHandller={addstaffHandller}
          closeModal={() => setShowModal(false)}
        />
      </Modal>
    </Fragment>
  );
};

export default App;
