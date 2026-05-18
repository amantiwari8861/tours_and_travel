import "./Test.css";
import img1 from "../assets/hero.png"
const LearnJsx = () => {
  const name = "Aman Tiwari";

  return (
    <>
      {/* <h1>JSX -&gt; Javascript + XML</h1>
      <h1>Hii</h1>

      <br />
      <hr /> */}

      <h1
        className="myclass"
        style={{
          color: "wheat",
          border: "5px solid black",
          borderRadius: "10px",
          textAlign: "center",
          padding: "2px",
        }}
      >
        Hello {name} {2 + 5 * 3}
      </h1>

      <label htmlFor="name">Your name: </label>
      <input type="text" id="name" />

      {/* <img src="https://m.media-amazon.com/images/I/71J1+I0IQBL._AC_UF1000,1000_QL80_.jpg" alt="" /> */}

      <img src="/favicon.svg" alt="" />
      <img src={img1} alt="" />
    </>
  );
};

export default LearnJsx;
