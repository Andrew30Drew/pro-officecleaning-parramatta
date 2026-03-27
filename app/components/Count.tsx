import React from "react";

export const Count = () => {
  return (
    <div className="flex justify-center bg-slate-100 ">
      <div className="w-full max-w-[1440px] rounded-xl px-5 md:px-10 lg:px-20 py-12 lg:py-16">
        <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="flex flex-col space-y-3 justify-center items-center w-full ">
            <div className="h-24 w-24 bg-greenprimary rounded-2xl flex justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="80"
                height="80"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-user-round-cog-icon lucide-user-round-cog"
              >
                <path d="m14.305 19.53.923-.382" />
                <path d="m15.228 16.852-.923-.383" />
                <path d="m16.852 15.228-.383-.923" />
                <path d="m16.852 20.772-.383.924" />
                <path d="m19.148 15.228.383-.923" />
                <path d="m19.53 21.696-.382-.924" />
                <path d="M2 21a8 8 0 0 1 10.434-7.62" />
                <path d="m20.772 16.852.924-.383" />
                <path d="m20.772 19.148.924.383" />
                <circle cx="10" cy="8" r="5" />
                <circle cx="18" cy="18" r="3" />
              </svg>
            </div>
            <p className="text-darkblue text-lg font-semibold">
              Professional Team
            </p>
            <p className="text-center ">
              Our trained, insured cleaners ensure professional, trusted service
              and impeccable results.
            </p>
          </div>
          <div className="flex flex-col space-y-3 justify-center items-center w-full ">
            <div className="h-24 w-24 bg-greenprimary rounded-2xl flex justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="80"
                height="80"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-calendar-clock-icon lucide-calendar-clock"
              >
                <path d="M16 14v2.2l1.6 1" />
                <path d="M16 2v4" />
                <path d="M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5" />
                <path d="M3 10h5" />
                <path d="M8 2v4" />
                <circle cx="16" cy="16" r="6" />
              </svg>
            </div>
            <p className="text-darkblue text-lg font-semibold">
              On Time Service
            </p>
            <p className="text-center ">
              Reliable, punctual service that respects your schedule and exceeds
              expectations.
            </p>
          </div>
          <div className="flex flex-col space-y-3 justify-center items-center w-full ">
            <div className="h-24 w-24 bg-greenprimary rounded-2xl flex justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="80"
                height="80"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-hand-coins-icon lucide-hand-coins"
              >
                <path d="M11 15h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 17" />
                <path d="m7 21 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9" />
                <path d="m2 16 6 6" />
                <circle cx="16" cy="9" r="2.9" />
                <circle cx="6" cy="5" r="3" />
              </svg>
            </div>
            <p className="text-darkblue text-lg font-semibold">
             Transparent Pricing
            </p>
            <p className="text-center ">
             Affordable, upfront rates with no hidden costs quality cleaning at the right price.
            </p>
          </div>
          <div className="flex flex-col space-y-3 justify-center items-center w-full ">
            <div className="h-24 w-24 bg-greenprimary rounded-2xl flex justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="80"
                height="80"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-user-round-cog-icon lucide-user-round-cog"
              >
                <path d="m14.305 19.53.923-.382" />
                <path d="m15.228 16.852-.923-.383" />
                <path d="m16.852 15.228-.383-.923" />
                <path d="m16.852 20.772-.383.924" />
                <path d="m19.148 15.228.383-.923" />
                <path d="m19.53 21.696-.382-.924" />
                <path d="M2 21a8 8 0 0 1 10.434-7.62" />
                <path d="m20.772 16.852.924-.383" />
                <path d="m20.772 19.148.924.383" />
                <circle cx="10" cy="8" r="5" />
                <circle cx="18" cy="18" r="3" />
              </svg>
            </div>
            <p className="text-darkblue text-lg font-semibold">
             Eco Friendly
            </p>
            <p className="text-center ">
             We use non-toxic, eco-friendly products for a safe, healthy, and sparkling environment.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
