"use client";

import FilterBar from "./components/home/FilterBar";
import JobList from "./components/home/JobList";
import { useState, useMemo } from "react";
import { useJobs } from "./context/JobContext";
import CtaButton from "./shared/CtaButton";

const extractUniqueCountries = (jobsData) => {
  return [...new Set(jobsData.map((job) => job.location))];
};

export default function JobPage() {
  const [filters, setFilters] = useState({
    title: "",
    location: "",
    fullTime: false,
  });

  const [itemsToShow, setItemsToShow] = useState(12);
  const jobsData = useJobs();
  const countries = extractUniqueCountries(jobsData);

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
    setItemsToShow(12);
  };

  // Filter by Title
  const filteredByTitle = useMemo(() => {
    if (!filters.title) return jobsData; //
    return jobsData.filter((job) =>
      job.position.toLowerCase().includes(filters.title.toLowerCase()),
    );
  }, [filters.title, jobsData]);

  // Filter by Location
  const filteredByLocation = useMemo(() => {
    if (!filters.location) return filteredByTitle;
    return filteredByTitle.filter((job) =>
      job.location.toLowerCase().includes(filters.location.toLowerCase()),
    );
  }, [filteredByTitle, filters.location]);

  // Filter by Full Time
  const filteredByFullTime = useMemo(() => {
    if (!filters.fullTime) return filteredByLocation;
    return filteredByLocation.filter((job) => job.contract === "Full Time");
  }, [filteredByLocation, filters.fullTime]);

  // Final filtered jobs
  const filteredJobs = filteredByFullTime;
  const displayedJobs = filteredJobs.slice(0, itemsToShow);

  const handleLoadMore = () => {
    setItemsToShow((prev) => prev + 12);
  };

  return (
    <main className="-z-20 mx-auto max-w-[var(--max-width-layout-mobile)] px-6 pb-16 md:max-w-[var(--max-width-layout-tablet)] md:px-0 md:pb-16 xl:max-w-[--max-width-layout-desktop]">
      <FilterBar
        filters={filters}
        onFilterChange={handleFilterChange}
        countries={countries}
      />
      <JobList jobs={displayedJobs} />
      {filteredJobs.length > itemsToShow && (
        <CtaButton
          text="Load More"
          width="w-36"
          onClick={handleLoadMore}
          aria-label="Load more job listings"
        />
      )}
    </main>
  );
}
