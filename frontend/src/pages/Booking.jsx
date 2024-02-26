// react
import { useState } from "react";

// components
import BookingForm from "../components/booking/BookingForm";
import BookingSuccess from "../components/booking/BookingSuccess";
import SideBar from "../components/dashboard/Sidebar";

const Booking = () => {
  const [isSuccess, setIsSuccess] = useState(false);
  function handleChange() {
    setIsSuccess(true);
  }

  return (
    <>
      <div className="grid md:grid-cols-[280px_1fr] w-full overflow-hidden mt-[60px] md:mt-0 h-screen">
        <SideBar />
        <section className="p-5 py-20 overflow-y-auto">
          {isSuccess ? (
            <BookingSuccess />
          ) : (
            <BookingForm onSuccess={handleChange} />
          )}
        </section>
      </div>
    </>
  );
};

export default Booking;
