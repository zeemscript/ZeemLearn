import React, { useEffect } from "react";

const DashSideBar = () => {
  useEffect(() => {
    const myPromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Promise resolved after 5 seconds!");
      }, 5000);
    });

    myPromise.then((message) => {
      console.log(message);
    });
  }, []);

  return <div>help</div>;
};

export default DashSideBar;
