import CtaLink from "@/app/shared/CtaLink";

export default function JobInfo({ job }) {
  return (
    <div className="mt-6 rounded-md bg-card px-6 py-10 md:px-12">
      <div className="md:flex md:items-center md:justify-between">
        <div className="mb-14 md:mb-0">
          <div className="flex items-center gap-3 text-darkGray">
            <span>{job.postedAt}</span>
            <span className="text-2xl">&#x2022;</span>
            <span>{job.contract}</span>
          </div>
          <h2 className="text-txtColor text-xl md:text-2xl/10">
            {job.position}
          </h2>
          <span className="block text-sm font-bold text-blueLotus">
            {job.location}
          </span>
        </div>
        <CtaLink website={job.website} />
      </div>
      <p className="my-10 dark:text-gray">{job.description}</p>
      <div className="mb-8">
        <h2 className="text-txtColor text-xl">Requirements</h2>
        <p className="mt-5 dark:text-gray">{job.requirements.content}</p>
        <ul className="mt-8 flex flex-col gap-3">
          {job.requirements.items.map((item, index) => (
            <li className="flex gap-8" key={index}>
              <span className="text-2xl/none text-blueLotus">&#x2022;</span>
              <span className="text-darkGray dark:text-gray">{item}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="yourTasks">
        <h2 className="text-txtColor text-xl">What you will do</h2>
        <p className="my-8 dark:text-gray"> {job.role.content}</p>
        <ol className="flex flex-col gap-3">
          {job.role.items.map((item, index) => (
            <li className="flex gap-8" key={index}>
              <span className="text-base font-bold text-blueLotus">
                {index + 1}
              </span>
              <span className="text-base text-darkGray dark:text-gray">
                {item}
              </span>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
