import { useState } from "react";
import BarLoader from "react-spinners/BarLoader";

var override = {
  display: "block",
  margin: "0 auto ",
  alignSelf: "center",
  
};
import React from 'react';

const Loader = ({color}) => {
  let [loading, setLoading] = useState(true);
  // let [color, setColor] = useState(colors ?? "#a4acf4");
    return (
        <BarLoader
        color={color ?? "#a4acf4"}
        loading={loading}
        cssOverride={override}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    );
}

export default Loader;
