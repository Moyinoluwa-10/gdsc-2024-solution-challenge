import SideBar from "../components/dashboard/Sidebar";

const Services = () => {
  return (
    <>
      <div className="grid md:grid-cols-[280px_1fr] w-full overflow-hidden mt-[60px] md:mt-0 min-h-screen">
        <SideBar />
      </div>
    </>
  );
};

export default Services;
