import MedicationCalendar from "../MedicationCalendar";
import { IoWarningOutline } from "react-icons/io5";

import "../../styles/calendarView.css";

const CalendarView = () => {
  return (
    <>
      <section className="calendar-view-section">
        <h2>Medication Calendar Overview</h2>
        <div className="calender-view">
          <div className="calendar-container">
            <MedicationCalendar />
            <div className="schedule-container">
              <div className="schedule">
                <div className="green mark-symbol"></div>
                <p>Medication taken</p>
              </div>
              <div className="schedule">
                <div className="red mark-symbol"></div>
                <p>Missed medication</p>
              </div>
              <div className="schedule">
                <div className="blue mark-symbol"></div>
                <p>Today</p>
              </div>
            </div>
          </div>
          <div className="medication-details">
            <p>Details for June 20, 2025</p>
            <div className="medication-status-view">
              <h6 style={{ display: "flex", gap: "5px", alignItems: "center" }}>
                <IoWarningOutline />
                Medication Missed
              </h6>
              <p>Eleanor Thompson did not take their medication on this day.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CalendarView;
