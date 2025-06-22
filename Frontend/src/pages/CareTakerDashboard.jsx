import CareTakerInfo from "../components/CareTakerInfo";
import NavBar from "../components/NavBar";
import CalendarView from "../components/Tabs/CalendarView";
import Notifications from "../components/Tabs/Notifications";
import Overview from "../components/Tabs/Overview";
import RecentActivity from "../components/Tabs/RecentActivity";
import Tab from "../components/Tabs/Tab";

const tabs = [
  { label: "Overview", content: <Overview /> },
  { label: "Recent Activity", content: <RecentActivity /> },
  { label: "Calender View", content: <CalendarView /> },
  { label: "Notifications", content: <Notifications /> },
];

const CareTakerDashboard = () => {
  return (
    <>
      <NavBar />
      <CareTakerInfo />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Tab tabs={tabs} />
      </div>
    </>
  );
};

export default CareTakerDashboard;
