import Link from "next/link";

import Feed from "@/components/Feed";
import Share from "@/components/Share";

const Homepage = () => {
  return (
    <div className="">
      {/* TABS */}
      <div className="flex justify-evenly border-b border-borderGray px-4 pt-4 font-bold text-textGray">
        <Link
          href="/"
          className="flex items-center border-b-4 border-iconBlue pb-3"
        >
          For you
        </Link>
        <Link href="/" className="flex items-center pb-3">
          Following
        </Link>
      </div>

      <Share />
      <Feed />
    </div>
  );
};

export default Homepage;
