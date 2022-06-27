import type { NextPage } from "next";
import React, { useEffect } from "react";
import axios from "axios";
import { basicUrl } from "../utils/constant";

const Home: NextPage = () => {
  useEffect(() => {
    const handleFunc = async () => {
      const response = await axios.get(`${basicUrl}`);

      console.log(response.data);
    };

    handleFunc();
  }, []);

  return (
    <div>
      <h1>Hello!!</h1>
    </div>
  );
};

export default Home;
