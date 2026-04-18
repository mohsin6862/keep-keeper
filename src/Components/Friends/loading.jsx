import React from "react";

const loading = () => {
  return (
    <div className="flex h-screen items-center justify-center">
      <span className="loading loading-infinity loading-xs"></span>
      <span className="loading loading-infinity loading-sm"></span>
      <span className="loading loading-infinity loading-md"></span>
      <span className="loading loading-infinity loading-lg"></span>
      <span className="loading loading-infinity loading-xl"></span>
    </div>
  );
};

export default loading;
