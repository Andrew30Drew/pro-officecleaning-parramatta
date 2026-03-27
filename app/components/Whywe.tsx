import React from "react";

export const Whywe = () => {
  return (
    <div className="flex justify-center py-12 lg:py-16">
      <div className="w-full max-w-[1440px]   lg:px-20 md:px-10 px-5 ">
        <p className="text-greenprimary lg:text-3xl text-2xl font-bold uppercase text-center">
          Why We
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-8 gap-6">
          <div className="border border-greenprimary flex flex-col items-center space-y-3 justify-center p-4 rounded-xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="76"
              height="76"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#01be48"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-badge-check-icon lucide-badge-check"
            >
              <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
              <path d="m9 12 2 2 4-4" />
            </svg>
            <p className="text-xl font-bold">Quality</p>
            <p className="text-gray-400 text-center">
              We focus on delivering top-quality results every time.
            </p>
          </div>
          <div className="border border-greenprimary flex flex-col items-center space-y-3 justify-center p-4 rounded-xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="76"
              height="76"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#01be48"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-user-star-icon lucide-user-star"
            >
              <path d="M16.051 12.616a1 1 0 0 1 1.909.024l.737 1.452a1 1 0 0 0 .737.535l1.634.256a1 1 0 0 1 .588 1.806l-1.172 1.168a1 1 0 0 0-.282.866l.259 1.613a1 1 0 0 1-1.541 1.134l-1.465-.75a1 1 0 0 0-.912 0l-1.465.75a1 1 0 0 1-1.539-1.133l.258-1.613a1 1 0 0 0-.282-.866l-1.156-1.153a1 1 0 0 1 .572-1.822l1.633-.256a1 1 0 0 0 .737-.535z" />
              <path d="M8 15H7a4 4 0 0 0-4 4v2" />
              <circle cx="10" cy="7" r="4" />
            </svg>
            <p className="text-xl font-bold">Flexible</p>
            <p className="text-gray-400 text-center">
              Our team is our greatest asset, bringing dedication and skill.
            </p>
          </div>
          <div className="border border-greenprimary flex flex-col items-center space-y-3 justify-center p-4 rounded-xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="76"
              height="76"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#01be48"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-folder-cog-icon lucide-folder-cog"
            >
              <path d="M10.3 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.98a2 2 0 0 1 1.69.9l.66 1.2A2 2 0 0 0 12 6h8a2 2 0 0 1 2 2v3.3" />
              <path d="m14.305 19.53.923-.382" />
              <path d="m15.228 16.852-.923-.383" />
              <path d="m16.852 15.228-.383-.923" />
              <path d="m16.852 20.772-.383.924" />
              <path d="m19.148 15.228.383-.923" />
              <path d="m19.53 21.696-.382-.924" />
              <path d="m20.772 16.852.924-.383" />
              <path d="m20.772 19.148.924.383" />
              <circle cx="18" cy="18" r="3" />
            </svg>
            <p className="text-xl font-bold">Experienced</p>
            <p className="text-gray-400 text-center">
              We thrive on innovation, delivering modern solutions with
              cutting-edge technology.
            </p>
          </div>
          <div className="border border-greenprimary flex flex-col items-center space-y-3 justify-center p-4 rounded-xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="76"
              height="76"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#01be48"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-heart-handshake-icon lucide-heart-handshake"
            >
              <path d="M19.414 14.414C21 12.828 22 11.5 22 9.5a5.5 5.5 0 0 0-9.591-3.676.6.6 0 0 1-.818.001A5.5 5.5 0 0 0 2 9.5c0 2.3 1.5 4 3 5.5l5.535 5.362a2 2 0 0 0 2.879.052 2.12 2.12 0 0 0-.004-3 2.124 2.124 0 1 0 3-3 2.124 2.124 0 0 0 3.004 0 2 2 0 0 0 0-2.828l-1.881-1.882a2.41 2.41 0 0 0-3.409 0l-1.71 1.71a2 2 0 0 1-2.828 0 2 2 0 0 1 0-2.828l2.823-2.762" />
            </svg>
            <p className="text-xl font-bold">Commitment</p>
            <p className="text-gray-400 text-center">
              We are committed to your success, always going the extra mile.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
