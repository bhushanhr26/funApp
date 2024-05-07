/* eslint-disable default-case */
import React, { useEffect, useState } from "react";
import "./App.css";
const moment = require("moment-timezone");
export default function App() {
  const [timer, setTimer] = useState({
    days: "",
    months: "",
    years: "",
    hours: "",
    minutes: "",
    seconds: "",
  });
  const [uKTimer, setUkTimer] = useState({
    days: "",
    months: "",
    years: "",
    hours: "",
    minutes: "",
    seconds: "",
  });
  const getDays = (x) => {
    if (x === 0) {
      return (timer.days = "Sunday");
    }
    if (x === 1) {
      return (timer.days = "Monday");
    }
    if (x === 2) {
      return (timer.days = "Tuesday");
    }
    if (x === 3) {
      return (timer.days = "Wednesday");
    }
    if (x === 4) {
      return (timer.days = "Thursday");
    }
    if (x === 5) {
      return (timer.days = "Friday");
    }
    if (x === 6) {
      return (timer.days = "Saturday");
    }
  };
  const getMonths = (x) => {
    if (x === 0) {
      return (timer.months = "January");
    }
    if (x === 1) {
      return (timer.months = "February");
    }
    if (x === 2) {
      return (timer.months = "March");
    }
    if (x === 3) {
      return (timer.months = "April");
    }
    if (x === 4) {
      return (timer.months = "May");
    }
    if (x === 5) {
      return (timer.months = "June");
    }
    if (x === 6) {
      return (timer.months = "July");
    }
    if (x === 7) {
      return (timer.months = "August");
    }
    if (x === 8) {
      return (timer.months = "September");
    }
    if (x === 9) {
      return (timer.months = "October");
    }
    if (x === 10) {
      return (timer.months = "November");
    }
    if (x === 11) {
      return (timer.months = "December");
    }
  };
  const getUkCurrentTime = () => {
    const bstTime = moment().tz("Europe/London"); // Get current time in BST timezone
    setUkTimer({
      ...uKTimer,
      days: bstTime.format("dddd"),
      hours: bstTime.format("HH"),
      minutes: bstTime.format("mm"),
      months: bstTime.format("MMM"),
      years: bstTime.format("YYYY"),
      seconds: bstTime.format("s"),
    });
  };
  const getCurrentTime = () => {
    let date = new Date();
    getUkCurrentTime();
    setTimer({
      ...timer,
      days: getDays(date.getDay()),
      months: getMonths(date.getMonth()),
      years: date.getFullYear(),
      hours: date.getHours(),
      minutes: date.getMinutes(),
      seconds: date.getSeconds(),
    });
  };

  setInterval(getCurrentTime, 1000);
  return (
    <div>
      <div className="app-container">
        <div className="time-container">
          <div>
            <pre>
              <span className="letTag">
                let{" "}
                <span
                  style={{
                    color: "red",
                    fontSize: "20px",
                    fontStyle: "italic",
                  }}
                >
                  IndiaTime
                </span>{" "}
                =
              </span>{" "}
              <span
                style={{ color: "blue", fontSize: "20px", fontStyle: "italic" }}
              >
                {"{"}
              </span>
              <pre className="variableTag">
                {"   "}
                Day : <span className="valueTag">{timer.days};</span>
              </pre>
              <pre className="variableTag">
                {"   "}
                month : <span className="valueTag">{timer.months};</span>{" "}
              </pre>
              <pre className="variableTag">
                {"   "}
                year : <span className="valueTag">{timer.years};</span>
              </pre>
              <pre className="variableTag">
                {"   "}
                hours : <span className="valueTag">{timer.hours};</span>
              </pre>
              <pre className="variableTag">
                {"   "}
                minutes : <span className="valueTag">{timer.minutes};</span>
              </pre>
              <pre className="variableTag">
                {"   "}
                seconds : <span className="valueTag">{timer.seconds};</span>
              </pre>
              <span
                style={{ color: "blue", fontSize: "14px", fontStyle: "italic" }}
              >
                {"}"}
              </span>
            </pre>
          </div>
        </div>
        <div className="time-container">
          <div>
            <pre>
              <span className="letTag">
                let{" "}
                <span
                  style={{
                    color: "red",
                    fontSize: "20px",
                    fontStyle: "italic",
                  }}
                >
                  UkTime
                </span>{" "}
                =
              </span>{" "}
              <span
                style={{ color: "blue", fontSize: "20px", fontStyle: "italic" }}
              >
                {"{"}
              </span>
              <pre className="variableTag">
                {"   "}
                Day : <span className="valueTag">{uKTimer.days};</span>
              </pre>
              <pre className="variableTag">
                {"   "}
                month : <span className="valueTag">{uKTimer.months};</span>{" "}
              </pre>
              <pre className="variableTag">
                {"   "}
                year : <span className="valueTag">{uKTimer.years};</span>
              </pre>
              <pre className="variableTag">
                {"   "}
                hours : <span className="valueTag">{uKTimer.hours};</span>
              </pre>
              <pre className="variableTag">
                {"   "}
                minutes : <span className="valueTag">{uKTimer.minutes};</span>
              </pre>
              <pre className="variableTag">
                {"   "}
                seconds : <span className="valueTag">{uKTimer.seconds};</span>
              </pre>
              <span
                style={{ color: "blue", fontSize: "14px", fontStyle: "italic" }}
              >
                {"}"}
              </span>
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}
