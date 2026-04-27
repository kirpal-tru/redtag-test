import React from "react";
import { STATS } from "../utils/data";

export default function TrustBar() { 
  return (
    <section className="max-w-[1920px] mx-auto px-4 md:px-6 2lg:px-12 py-6 lg:py-8">
      <div className="flex flex-col lg:flex-row  lg:items-center gap-2 mb-4 justify-between">
        <h2 className="text-[32px] text-left font-medium text-[#00537A]">Trusted by Canadian Travellers</h2>
        <p className="text-[16px] text-[#414042] ml-auto max-w-fulltext-right leading-snug hidden md:block">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu nisl aliquet, pharetra dui quis, euismod metus.
        </p>
      </div>
      <div className="grid grid-cols-1 3xs:grid-cols-3 gap-4">
        {STATS.map((stat) => (
          <div
            key={stat.label}
            className={`rounded-2xl p-4 lg:p-8 flex flex-col items-center justify-center gap-3 ${
              stat.highlight
                ? "bg-[#CA2129] text-white shadow-lg shadow-red-200"
                : "bg-[#F2F3F3] text-gray-700 border border-[#F2F3F3] hover:bg-[#E0E0E0] hover:border-[#E0E0E0] transition-colors"
            }`}
          >
            <div className={stat.highlight ? "text-white" : "text-gray-500"}>
              {stat.icon}
            </div>
            <div className="text-center">
              <p className={`text-[24px] md:text-[32px] font-bold ${stat.highlight ? "text-white" : "text-black"}`}>
                {stat.value}
              </p>
              <p className={`text-sm mt-0.5 ${stat.highlight ? "text-white/80" : "text-[#808080]"}`}>
                {stat.label}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
