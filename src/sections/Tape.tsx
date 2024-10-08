import StarIcon from "@/assets/icons/star.svg";
import { motion } from "framer-motion";
import { Fragment } from "react";

const pros = [
  "Performant",
  "Accessible",
  "Secure",
  "Interactive",
  "Scalable",
  "User Friendly",
  "Responsive",
  "Maintainable",
  "Search Optimized",
  "Usable",
  "Reliable",
];

export const TapeSection = () => (
  <div className="py-16 lg:py-24 overflow-x-clip">
    <div className="bg-gradient-to-r from-green-500 to-sky-400 overflow-x-clip -rotate-3 -mx-1">
      <div className="flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex flex-none gap-4 pr-4 py-3 animate-move-left [animation-duration:30s]">
          {[...Array(2)].map((_, idx) => (
            <Fragment key={idx}>
              {pros.map((pro) => (
                <div key={pro} className="inline-flex gap-4 items-center">
                  <span className="text-gray-900 uppercase font-extrabold text-sm">
                    {pro}
                  </span>
                  <StarIcon className="size-6 text-gray-900 -rotate-12" />
                </div>
              ))}
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  </div>
);
