import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

import "../styles/medicationCalendar.css";

const MedicationCalendar = () => {
  const [value, setValue] = useState(new Date());

  return (
    <div style={{ maxWidth: "300px" }}>
      <Calendar onChange={setValue} value={value} />
    </div>
  );
};

export default MedicationCalendar;
