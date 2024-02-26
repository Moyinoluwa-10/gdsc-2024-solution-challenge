// svgs
// import thumbsUp from "../../assets/svgs/thumbs-up.svg";

const BookingSuccess = () => {
  return (
    <div className="bg-secondary flex flex-col items-center justify-center text-center text-white max-w-4xl mx-auto px-5 sm:px-10 py-20 md:py-32 rounded-3xl my-20">
      {/* <img src={thumbsUp} alt="thumbs-up" className="mb-5" /> */}
      <h3 className="text-3xl font-pt-bold mb-5">
        Your request has been submitted
      </h3>
      <p className="text-xl">
        Expect a call from 09057493647 or 09045678345 <br />A confirmation has
        been sent to your email
      </p>
    </div>
  );
};

export default BookingSuccess;
