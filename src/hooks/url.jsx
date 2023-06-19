import { useEffect, useState } from "react";

export const URLansver = (options) => {
  const [data, setdata] = useState([]);
  const [spiner, setspiner] = useState(false);
  let basisURL = "https://jsonplaceholder.typicode.com";
  useEffect(() => {
    setspiner(true);
    fetch(basisURL + options)
      .then((res) => res.json())
      .then((data) => {
        setspiner(false), setdata(data);
      });
  }, []);
  return data;
};
