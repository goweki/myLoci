import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import toast from "react-hot-toast";
import { ButtonPrimary } from "@/components/atoms/buttons";

export function SelectedProduct({ handleClose, product }) {
  const [showInterest, setShowInterest] = useState({
    name: "",
    email: "",
    tel: "",
  });

  // onSubmit
  function handleSubmit(e) {
    e.preventDefault();
    //setLoading(true);
    // confirm fields filled
    if (!showInterest.email && !showInterest.tel) {
      toast.error(`Please provide email or Phone No.`);
      return;
    }
    // fetch options
    let fetchOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify({
        subject: `NEW LEAD: car`,
        text: `Name: ${showInterest.name} \nEmail: ${showInterest.email} \nTel: ${showInterest.tel} \nInterest: ${product.name}`,
      }),
    };
    // POST request using fetch
    fetch("/api/mailer", fetchOptions)
      .then((res_) => res_.json())
      .then((json_) => {
        if (json_.success) {
          console.log(
            "SUCCESS: Interest sent\n > " +
              JSON.stringify(json_) +
              "\n.............."
          );
          toast.success("Interest in car submitted!");
          setShowInterest({ name: "", email: "", tel: "" });
          handleClose();
        } else if (json_.error) {
          console.error(
            "ERROR: failed sending Interest in car\n > " +
              JSON.stringify(json_) +
              "\n.............."
          );
          toast.error(json_.error);
        } else {
          console.error(
            "ERROR: failed sending Interest in car\n > " +
              JSON.stringify(json_) +
              "\n.............."
          );
          toast.error("No Response from server");
        }
      })
      .catch((err) => {
        toast.error("ERROR: failed to submit interest");
        console.error(
          "ERROR: caught error while submitting interest in car\n > " +
            err.error || err
        );
      });
  }
  // render
  return (
    <div
      id="modal"
      tabIndex="-1"
      aria-hidden="true"
      className={`transition fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-full bg-backg dark:bg-backg-dark bg-opacity-90 dark:bg-opacity-90 flex items-center justify-center`}
    >
      <div className="relative w-full max-w-screen-lg max-h-full my-auto">
        {/* <!-- Modal content --> */}
        <div className="relative bg-backg-surface rounded-lg shadow dark:bg-backg-dark-surface">
          {/* <!-- Modal header --> */}
          <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-font-inactive">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Interested in this {product.category} ?
            </h3>
            <button
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              onClick={handleClose}
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          {/* <!-- Modal body - GRID --> */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-8 md:pl-16 lg:pl-24">
              <p className="mx-auto mb-4 font-light sm:text-lg text-center">
                <span className="block font-bold text-2xl mb-4">
                  {" "}
                  {product.name}
                </span>
                Leave us your contacts and we will get back to you
              </p>
              <form>
                <div className="mb-6">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="border border-font-inactive focus:border-transparent focus:ring-primary bg-backg-raised dark:bg-backg-dark-raised w-full rounded py-3 px-[14px] text-base outline-none placeholder:italic"
                    value={showInterest.name}
                    onChange={(e) => {
                      e.preventDefault();
                      setShowInterest({
                        ...showInterest,
                        name: e.target.value,
                      });
                    }}
                  />
                </div>
                <div className="mb-6">
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="border border-font-inactive focus:border-transparent focus:ring-primary bg-backg-raised dark:bg-backg-dark-raised w-full rounded py-3 px-[14px] text-base outline-none placeholder:italic"
                    value={showInterest.email}
                    onChange={(e) => {
                      e.preventDefault();
                      setShowInterest({
                        ...showInterest,
                        email: e.target.value,
                      });
                    }}
                  />
                </div>
                <div className="mb-6">
                  <input
                    type="text"
                    placeholder="Your Phone"
                    className="border border-font-inactive focus:border-transparent focus:ring-primary bg-backg-raised dark:bg-backg-dark-raised w-full rounded py-3 px-[14px] text-base outline-none placeholder:italic"
                    value={showInterest.tel}
                    onChange={(e) => {
                      e.preventDefault();
                      setShowInterest({
                        ...showInterest,
                        tel: e.target.value,
                      });
                    }}
                  />
                </div>
                <div className="flex flex-row justify-center pb-12">
                  <ButtonPrimary
                    label="Cancel"
                    onClick={handleClose}
                    className="mr-8"
                    variant
                  />
                  <ButtonPrimary label="Show Interest" onClick={handleSubmit} />
                </div>
              </form>
            </div>
            <div className="hidden md:block h-[280px] md:h-[360px] aspect-square m-auto md:border-l-2 ">
              <Image src={product.image} height={90} width={90} alt="img" />
            </div>
          </div>
          {/* <!-- Modal footer --> */}
          {/* <div className="flex items-center justify-center p-6 space-x-2 border-none  rounded-b">
              <ButtonSecondary label="Cancel" onClick={handleClose} />
              <ButtonPrimary label="Show Interest" onClick={handleClose} />
            </div> */}
        </div>
      </div>
    </div>
  );
}
