import React, { useState } from "react";
import Bar from "./Bar";

function Colorize() {
  const codes = {
    codeOne: "",
    codeTwo: "",
    codeThree: "",
    codeFour: "",
  };
  const [name, setName] = useState("");
  const [code, setCode] = useState(codes);

  function handleChange(el) {
    let reg = /\s|\d/g;
    let str = el.target.value.split(reg).join("").toLowerCase();
    setName(str);
  }
  function handleSubmit(elm) {
    let nameCode = [];

    const alpha = {
      a: 0,
      e: 110,
      i: 20,
      o: 150,
      u: 40,
      b: 50,
      c: 60,
      d: 170,
      f: 80,
      g: 90,
      h: 100,
      j: 10,
      z: 120,
      x: 30,
      y: 140,
      w: 250,
      k: 160,
      l: 70,
      m: 180,
      r: 190,
      s: 200,
      t: 210,
      v: 220,
      n: 230,
      p: 240,
      q: 130,
    };

    for (let nm of name) {
      nameCode.push(alpha[nm]);
    }

    let [max, min] = [
      Math.max.apply(Math, nameCode),
      Math.min.apply(Math, nameCode),
    ];

    let avg = Math.floor((max + min) / 2);
    let mid = nameCode[Math.floor(nameCode.length / 2)];

    setCode({
      codeOne: `rgb(${min},${avg},${max})`,
      codeTwo: `rgba(${mid},${max},${min},.3)`,
      codeThree: `hsl(${mid},${min}%,${avg - 50}%)`,
      codeFour: `rgb(${max},${mid},${min})`,
    });
    elm.preventDefault();
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={handleChange}
          placeholder="Enter a string..."
        />
        <input
          type="submit"
          value="SUBMIT"
          // style={{
          //   backgroundColor: "black",
            // color: "white",
          //   border: "none",
          // }}
        className="btn-large waves-effect waves-light" />
      </form>
      <div
        style={{
          backgroundColor: "rgba(250,250,150,.2)",
          padding: "25px",
          borderRadius: "20px",
          boxShadow: "1px 1px 3px 0 silver,-1px -1px 3px 0 silver",
        }}
        className="bars"
      >
        <Bar barColor={code.codeOne} defColor="silver" />
        <Bar barColor={code.codeTwo} defColor="gray" />
        <Bar barColor={code.codeThree} defColor="black" />
        <Bar barColor={code.codeFour} defColor="slateGray" />
      </div>
    </div>
  );
}

export default Colorize;
