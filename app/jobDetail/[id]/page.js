'use client';
import { use } from 'react';
import { useJobs } from '@/app/context/JobContext';

import JobHeader from '@/app/components/jobDetail/JobHeader';
import JobInfo from '@/app/components/jobDetail/JobInfo';
import JobFooter from '@/app/components/jobDetail/JobFooter';

export default function JobDetailsPage({ params }) {
  const jobsData = useJobs();

  const { id } = use(params);

  const jobId = parseInt(id, 10);

  const job = jobsData.find((job) => job.id === jobId);

  if (!job) {
    return (
      <div>
        <h1>Job Not Found</h1>
        <p>The job youre looking for doesnt exist.</p>
      </div>
    );
  }

  const { website, company, position } = job;

  return (
    <>
      <main className='-z-20 mx-auto max-w-[var(--max-width-layout-mobile)] px-6 pb-16 md:max-w-[var(--max-width-layout-tablet)] md:px-0 md:pb-16 xl:max-w-[--max-width-layout-job-desktop]'>
        <JobHeader job={job} />
        <JobInfo job={job} />
      </main>
      <JobFooter website={website} company={company} position={position} />
    </>
  );
}
