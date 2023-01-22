import React from "react";
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);

  return (
    <div id="error-page">
      <h1>Ooop!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <i>{error.statusText || error.message}</i>
    </div>
  );
};

export default ErrorPage;
