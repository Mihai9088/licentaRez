import React, { useEffect, useState } from "react";
import classes from "./AvailableElectronics.module.css";
import Card from "../UI/Card";
import ElectronicItem from "./ElectronicItem/ElectronicItem";

const AvailableElectronics = () => {
  const [electronics, setElectronics] = useState([]);
  const [loading, setLoading] = useState(true);
  const [reqError, setReqError] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://licenta-198cd-default-rtdb.europe-west1.firebasedatabase.app/MathBooks.json"
      );

      if (!response.ok) {
        throw new Error("Something is wrong");
      }
      const responseData = await response.json();

      const loadedElectronics = [];
      for (const key in responseData) {
        loadedElectronics.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,
        });
      }
      setElectronics(loadedElectronics);
      setLoading(false);
    };

    fetchData().catch((error) => {
      setLoading(false);
      setReqError(error.message);
    });
  }, []);

  if (loading) {
    return (
      <div className={classes.Loading}>
        <p>Loading...</p>
      </div>
    );
  }

  if (reqError) {
    return (
      <div className={classes.Error}>
        <p>{reqError}</p>
      </div>
    );
  }

  const itemslist = electronics.map((item) => (
    <ElectronicItem
      key={item.id}
      id={item.id}
      name={item.name}
      description={item.description}
      price={item.price}
    />
  ));

  return (
    <section className={classes.items}>
      <Card>
        <ul>{itemslist}</ul>
        <div className={classes.div1}></div>
        <div className={classes.div2}></div>
      </Card>
    </section>
  );
};

export default AvailableElectronics;
