import React, { useState, useEffect } from "react";

import { connect } from "react-redux";
import { showHouses, removeHouse, addHouse } from "../actions/handle";

import spinner from "../img/spinner.svg";

const Form = ({ showHouses, houses, loading, removeHouse, addHouse }) => {
  const [data, setData] = useState({
    address: "",
    floorsNumber: "",
    description: "",
    label: "",
  });
  useEffect(() => {
    showHouses();
  }, []);
  const onSubmit = (e) => {
    e.preventDefault();
    addHouse(data);
    setData({
      address: "",
      floorsNumber: "",
      description: "",
      label: "",
    });
  };
  const onDelete = (id) => {
    removeHouse(id);
  };
  return (
    <>
      {loading ? (
        <img src={spinner} alt="koko" />
      ) : (
        <div>
          <h1>hi</h1>
          <form action="" onSubmit={onSubmit}>
            <span>adres: </span>
            <input
              type="text"
              required
              value={data.address}
              onChange={(e) => setData({ ...data, address: e.target.value })}
            />
            <br />
            <span>pietro: </span>
            <input
              type="number"
              required
              value={data.floorsNumber}
              onChange={(e) =>
                setData({ ...data, floorsNumber: e.target.value })
              }
            />
            <br />
            <span>opis: </span>
            <input
              type="text"
              required
              value={data.description}
              onChange={(e) =>
                setData({ ...data, description: e.target.value })
              }
            />
            <br />
            <span>label: </span>
            <input
              type="text"
              required
              value={data.label}
              onChange={(e) => setData({ ...data, label: e.target.value })}
            />
            <br />
            <input type="submit" value="dodaj" />
          </form>

          {/* <button onClick={showHouses}>Pokaz domy</button> */}
          <ul>
            {houses.map((house) => (
              <li key={house._id} style={{ border: "1px solid black" }}>
                <p>id:{house._id}</p>
                <p>adres:{house.address ? house.address : <>Nie podano</>}</p>
                <p>
                  piętro:
                  {house.floorsNumber ? house.floorsNumber : <>Nie podano</>}
                </p>
                <p>
                  opis:{house.description ? house.description : <>Nie podano</>}
                </p>
                <p>label:{house.label ? house.label : <>Nie podano</>}</p>
                <button onClick={() => onDelete(house._id)}>USUŃ</button>
                <br />
                <br />
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};
const mapStateToProps = (state) => ({
  houses: state.handle.houses.results,
  loading: state.handle.loading,
});
export default connect(mapStateToProps, { showHouses, removeHouse, addHouse })(
  Form
);
