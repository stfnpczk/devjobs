// JobList.js

import Image from "next/image";
import Link from "next/link";
export default function JobList({ jobs }) {
  return (
    <ul className="mb-8 mt-16 grid gap-16 gap-x-8 md:grid-cols-2 xl:grid-cols-3">
      {jobs.map((job) => (
        <li
          className="transition-all will-change-transform can-hover:hover:scale-105"
          key={job.id}
        >
          <Link href={`/jobDetail/${job.id}`}>
            <div className="relative w-auto rounded-md bg-card px-6 py-9 md:h-[16rem] lg:h-auto">
              <div
                className="absolute top-[-1.5rem] flex h-12 w-12 items-center justify-center rounded-2xl"
                style={{ backgroundColor: job.logoBackground }}
              >
                <Image
                  src={job.logo}
                  alt={job.company}
                  sizes="3.125rem"
                  className="h-auto w-auto"
                  width={50}
                  height={50}
                />
              </div>
              <div className="flex items-center gap-3 text-darkGray">
                <span>{job.postedAt}</span>
                <span className="text-2xl">&#x2022;</span>
                <span>{job.contract}</span>
              </div>
              <h2 className="color my-4 text-xl text-txtColor can-hover:hover:text-darkGray">
                {job.position}
              </h2>
              <span className="text-base text-darkGray">{job.company}</span>
              <span className="mt-11 block text-sm font-bold text-blueLotus">
                {job.location}
              </span>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}
