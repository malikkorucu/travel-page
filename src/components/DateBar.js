import React, { useRef, useState } from "react";
import DatePicker from "react-datepicker";
import Icon from "../assets/svg/index";

const DateBar = () => {
  const date_1 = useRef(null);
  const date_2 = useRef(null);
  const [dateOpen, setDateOpen] = useState(false);
  const [dateOpen_2, setDateOpen_2] = useState(false);

  return (
    <div className="date-bar">
      <span className="field">
        <label className="label">Where you want to go</label>
        <div className="input a-center">
          <Icon name="Search" width={15} height={15} />
          <input type="text" placeholder="Search your location" />
        </div>
      </span>
      {/* <FontAwesomeIcon icon={faSearch} /> */}
      <span
        className="field"
        onClick={() => {
          setDateOpen_2(true);
        }}
      >
        <label className="label">Check-in</label>
        <span className="input">
          <DatePicker
            onClickOutside={() => setDateOpen_2(false)}
            open={dateOpen_2}
            ref={date_2}
            popperProps={{
              positionFixed: true,
            }}
            customInput={<small>Add Date</small>}
          />
        </span>
      </span>
      <span className="field flex">
        <div
          onClick={() => {
            setDateOpen(true);
          }}
        >
          <label className="label">Check-out</label>
          <span className="input">
            <DatePicker
              onClickOutside={() => setDateOpen(false)}
              open={dateOpen}
              ref={date_2}
              display={true}
              popperProps={{
                positionFixed: true,
              }}
              customInput={<small>Add Date</small>}
            />
          </span>
        </div>

        <button className="explore-btn">Eplore Now</button>
      </span>
    </div>
  );
};

export default DateBar;
