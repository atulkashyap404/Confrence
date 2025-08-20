"use client";

import Link from "next/link";

export default function TripsSchedulePage() {
  return (
    <section id="schedule" className="pt-8 pb-8 px-4 md:px-10 lg:px-20 bg-white">
      <div className="max-w-5xl mx-auto text-center">
        {/* ✅ Title */}
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Summit <span className="text-kesari">Outline</span>
          </h2>
          <p className="text-lg text-muted-foreground pb-4">
            Four days of innovation, collaboration, and transformation shaping the future of technology
          </p>

        {/* ✅ Embedded PDF Viewer */}
        <div className="w-full h-[600px] mb-6">
          <iframe
            src="/TRIPS-2025  Final Schedule.pdf"
            className="w-full h-full rounded-lg shadow-lg border"
          />
        </div>

        {/* ✅ Download / View Button */}
        <Link
          href="/trips-schedule.pdf"
          target="_blank"
          className="inline-block px-6 py-3 "
        >
          
        </Link>
      </div>
    </section>
  );
}
