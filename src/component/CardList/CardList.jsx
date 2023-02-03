import Card from "../Card/Card";
const CardList = ({ staffList, deleteFun }) => {
  const cards = staffList.map(({ id, ...otherProps }) => (
    <Card key={id} {...otherProps} id={id} deleteFun={deleteFun} />
  ));

  return <div className="mainContainer">{cards}</div>;
};

export default CardList;
