"use client";

import { createContext, useContext, useState } from "react";
import jobsData from "../data/data.json";
const JobContext = createContext();

export function JobProvider({ children }) {
  const [jobs] = useState(jobsData);
  return <JobContext.Provider value={jobs}>{children}</JobContext.Provider>;
}

export function useJobs() {
  return useContext(JobContext);
}
