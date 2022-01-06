import { useState, useEffect } from "react";
import moment from "moment";
// import axios from "axios";
import useFetch from "../customize/fetch";

const Covid = () => {
  const today = moment().startOf("day").toISOString(true);
  const priorDate = moment()
    .startOf("day")
    .subtract(31, "days")
    .toISOString(true);
  const {
    data: dataCovid,
    isLoading,
    isError,
  } = useFetch(
    `https://api.covid19api.com/country/vietnam?from=${priorDate}&to=${today}`,
    true
  );

  return (
    <table id="customers">
      <thead>
        <tr>
          <th>Date</th>
          <th>Confirmed</th>
          <th>Active</th>
          <th>Deaths</th>
          <th>Recovered</th>
        </tr>
      </thead>
      <tbody>
        {isError === false &&
          isLoading === false &&
          dataCovid &&
          dataCovid.length > 0 &&
          dataCovid.map((item) => {
            return (
              <tr key={item.ID}>
                <td>{item.Date}</td>
                <td>{item.Confirmed}</td>
                <td>{item.Active}</td>
                <td>{item.Deaths}</td>
                <td>{item.Recovered}</td>
              </tr>
            );
          })}
        {isLoading === true && (
          <tr colSpan="5">
            <td colSpan="5">Loanding ...</td>
          </tr>
        )}
        {isError === true && (
          <tr colSpan="5">
            <td colSpan="5">Something do ...</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default Covid;
