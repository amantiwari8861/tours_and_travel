import axios from "axios";
import { useEffect, useState } from "react";

const LearnUseEffect = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  //   useEffect(() => {
  //     console.log("component re-rendered");
  //   }); // component will re-render whenever any change in state or prop is triggered

  //   useEffect(()=>{
  //     console.log("count updated :",count);
  //   },[count]); // will only run when count is updated

  //   useEffect(() => {
  //     console.log("count or name updated :", count, name);
  //   }, [count, name]); // will run when count or name is updated

  //   useEffect(() => {
  //     console.log("component mounted!");
  //   }, []); // component will re-render only once

  //   useEffect(() => {
  //     console.log("component mounted!");
  //     return () => console.log("component unmounted!"); // cleanup function
  //   }, []); // array empty, so it will run only once

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(
        "https://fakestoreapiserver.reactbd.org/api/walmartproducts/",
      );
      const data = await response.data;
      console.log(data);
    }
    fetchData();
  }, []);

  return (
    <>
      <h1 className="text-3xl text-center">
        Count : {count} Name : {name}
      </h1>
      <div className="text-center my-4">
        <button
          className="btn btn-primary"
          onClick={() => setCount((prev) => prev + 1)}
        >
          Count++
        </button>{" "}
        <br />
        Enter ur Name :{" "}
        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          className="border-2 rounded my-3"
        />
      </div>
    </>
  );
};

export default LearnUseEffect;
