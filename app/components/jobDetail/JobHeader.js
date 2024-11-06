"use client";
import Image from "next/image";
import Link from "next/link";

export default function JobHeader({ job }) {
  return (
    <div className="relative z-20 -mt-5 flex flex-col items-center gap-6 rounded-md bg-card pb-8 pt-12 md:-mt-10 md:grid md:grid-cols-[8.75rem_1fr_1fr] md:grid-rows-[9rem] md:gap-10 md:py-0 md:pr-12">
      <div
        className="md:positon-unset absolute top-[-1.5rem] flex h-12 w-12 items-center justify-center rounded-2xl md:top-0 md:col-[1] md:row-[1/3] md:flex md:h-36 md:w-36 md:rounded-none md:rounded-bl-md"
        style={{ backgroundColor: job.logoBackground }}
      >
        <Image
          src={job.logo}
          alt={job.company}
          fill
          className="object-contain p-2 md:p-8"
          sizes="(max-width: 48rem) auto, auto"
        />
      </div>

      <div className="flex flex-col items-center gap-4 md:col-[2/3] md:items-baseline">
        <h2 className="text-xl/none text-txtColor"> {job.company}</h2>
        <span className="text-darkGray">
          {job.company.toLowerCase().replace(/\s+/g, "")}.com
        </span>
      </div>
      <Link
        href={job.website}
        target="_blank"
        className="md:w-15.625rem md:col-[3/4] md:flex md:justify-end"
      >
        <div className="dark:text w-36 rounded-md bg-blueLotus/10 py-4 text-center text-base/none font-bold text-blueLotus transition-colors md:md:w-[clamp(9.1875rem,19.141vw,12.5rem)] md:rounded-bl-md can-hover:hover:bg-blueLotus/35 dark:bg-white/10 dark:text-white dark:can-hover:hover:bg-white/25">
          Company Site
        </div>
      </Link>
    </div>
  );
}
