
import Herosection from "../components/aboutus/Herosection";
import Teammember from "../components/aboutus/Teammember";
import Welcomesection from "../components/aboutus/Welcomesection";
import Howitwork from "../components/Howitwork";

export default function Aboutus () {
    return(
        <div>
            <Herosection />
            <Welcomesection />
            {/* Author attribution — E-E-A-T signal for Google */}
            <div className="flex justify-center py-6 bg-slate-50">
              <div className="w-full max-w-[1440px] lg:px-20 md:px-10 px-5">
                <p className="text-sm text-gray-500">
                  <span className="font-medium text-gray-700">Content reviewed by:</span>{' '}
                  <a
                    href="/about#team"
                    className="text-greenprimary hover:underline font-medium"
                    rel="author"
                  >
                    Pro Clean Corp Operations Team
                  </a>
                  {' — '}Professional commercial cleaners serving Sydney NSW since 2015.
                </p>
              </div>
            </div>
            <Howitwork bg_color="bg-slate-50" card_color="bg-white" />
            <Teammember />
        </div>
    )
}