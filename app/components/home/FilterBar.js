"use client";

import Image from "next/image";
import searchIcon from "@/public/desktop/icon-search.svg";
import locationIcon from "@/public/desktop/icon-location.svg";
import checkIcon from "@/public/desktop/icon-check.svg";
import { useDeviceType } from "@/app/hooks/useWindowWidth";
import { useTheme } from "next-themes";

import ModalFilter from "./ModalFilter";
import { useState } from "react";
import CtaButton from "../../shared/CtaButton";

export default function FilterBar({ filters, onFilterChange, countries }) {
  const { isMobile, isTablet } = useDeviceType();
  const { theme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsOpen(false);
  };

  const handleTextInputChange = (e) => {
    const { name, value } = e.target;

    onFilterChange({
      ...filters,
      [name]: value,
    });
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    onFilterChange({
      ...filters,
      [name]: checked,
    });
  };

  return (
    <>
      {isMobile ? (
        <div>
          <form
            onSubmit={handleSubmit}
            className="relative z-20 -mt-10 flex w-full items-center justify-between rounded-md bg-card px-6 py-7"
          >
            <div className="item flex flex-grow">
              <label className="w-full">
                <input
                  className="mr-6 w-full rounded-md bg-card p-1 text-base text-veryDarkBlue placeholder-veryDarkBlue/50 outline-none dark:placeholder-white/50 dark:caret-white"
                  type="text"
                  id="title"
                  name="title"
                  value={filters.title}
                  onChange={handleTextInputChange}
                  placeholder="Filter by title..."
                  aria-label="Filter jobs by title"
                />
              </label>
            </div>
            <button
              type="button"
              className="h-5 w-5"
              onClick={toggleMenu}
              aria-label="Open filter options"
            >
              <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M19.108 0H.86a.86.86 0 00-.764.455.833.833 0 00.068.884l6.685 9.202.007.01c.242.32.374.708.375 1.107v7.502a.825.825 0 00.248.594.865.865 0 00.942.18l3.756-1.4c.337-.1.56-.41.56-.784v-6.092c0-.399.132-.787.375-1.108l.007-.009 6.685-9.202c.19-.26.217-.6.068-.884A.86.86 0 0019.108 0z"
                  fill={theme === "dark" ? "#fff" : "#19202D"}
                  fillRule="nonzero"
                />
              </svg>
            </button>
          </form>
          <ModalFilter open={isOpen} onClose={() => setIsOpen(false)}>
            <form onSubmit={handleSubmit} className="mb-6 flex flex-col gap-6">
              <label className="flex h-full flex-grow items-center gap-4 border-b border-darkGray/20 pb-6">
                <Image
                  src={locationIcon}
                  width={17}
                  height={24}
                  alt="filter jobs by location"
                />
                <input
                  className="flex-grow rounded-md bg-card p-1 text-base text-veryDarkBlue placeholder-veryDarkBlue/50 outline-none dark:text-white/50 dark:placeholder-white/50 dark:caret-white"
                  type="text"
                  id="location"
                  name="location"
                  value={filters.location}
                  onChange={handleTextInputChange}
                  placeholder="Filter by location..."
                  aria-label="Filter jobs by location"
                  list="countriesList"
                />

                <datalist id="countriesList">
                  {countries.map((country) => (
                    <option key={country} value={country} />
                  ))}
                </datalist>
              </label>

              <label className="flex h-full w-[clamp(11.875rem,24.74vw,12.5rem)] flex-row-reverse items-center justify-end gap-4 text-base font-bold text-txtColor">
                {isTablet ? "Full Time" : "Full Time Only"}
                <div className="relative flex h-6 w-6 cursor-pointer rounded-md dark:bg-white/10">
                  <input
                    className="peer absolute inset-0 z-20 h-full w-full cursor-pointer opacity-0"
                    type="checkbox"
                    id="fullTime"
                    name="fullTime"
                    checked={filters.fullTime}
                    onChange={handleCheckboxChange}
                    aria-label="Filter jobs by full time"
                  />
                  <span className="absolute inset-0 h-6 w-6 rounded-md bg-veryDarkBlue/10 transition-all duration-300 ease-in-out peer-checked:bg-blueLotus peer-focus-visible:ring-2 peer-focus-visible:ring-blueLotus"></span>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-700 ease-in-out peer-checked:opacity-100">
                    <Image
                      src={checkIcon}
                      width={15}
                      height={12}
                      alt="toggle full time"
                    />
                  </div>
                </div>
              </label>
            </form>
            <CtaButton
              text="Show Jobs"
              width="w-full"
              onClick={() => setIsOpen(false)}
            />
          </ModalFilter>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="relative z-20 -mt-10 flex h-20 items-center justify-between rounded-md bg-card px-6"
        >
          <label className="flex flex-grow items-center gap-4">
            <Image
              src={searchIcon}
              width={24}
              height={24}
              alt="filter jobs by title"
            />
            <input
              className="textplaceholder-veryDarkBlue/50 flex-grow rounded-md bg-card p-1 text-base text-veryDarkBlue outline-none dark:text-white/50 dark:placeholder-white/50 dark:caret-white"
              type="text"
              id="title"
              name="title"
              value={filters.title}
              onChange={handleTextInputChange}
              placeholder="Filter by title..."
              aria-label="Filter jobs by title"
            />
          </label>
          <label className="flex h-full flex-grow items-center gap-4 border-l border-darkGray/20">
            <Image
              className="ml-5"
              src={locationIcon}
              width={17}
              height={24}
              alt="filter jobs by location"
            />
            <input
              className="dark: flex-grow rounded-md bg-card p-1 text-base text-veryDarkBlue placeholder-veryDarkBlue/50 outline-none dark:text-white/50 dark:placeholder-white/50 dark:caret-white"
              type="text"
              id="location"
              name="location"
              value={filters.location}
              onChange={handleTextInputChange}
              placeholder="Filter by location..."
              aria-label="Filter jobs by location"
              list="countriesList"
            />

            <datalist id="countriesList">
              {countries.map((country) => (
                <option key={country} value={country} />
              ))}
            </datalist>
          </label>
          <label className="flex h-full w-[clamp(9.375rem,20vw,20vw)] flex-row-reverse items-center justify-end gap-4 border-l border-darkGray/20 text-base font-bold text-txtColor xl:w-[clamp(11.875rem,24.74vw,18.125rem)]">
            {isTablet ? "Full Time" : "Full Time Only"}
            <div className="relative ml-5 flex h-6 w-6 cursor-pointer rounded-md dark:bg-white/10">
              <input
                className="peer absolute inset-0 z-20 h-full w-full cursor-pointer opacity-0"
                type="checkbox"
                id="fullTime"
                name="fullTime"
                checked={filters.fullTime}
                onChange={handleCheckboxChange}
                aria-label="Filter jobs by full time"
              />
              <span className="absolute inset-0 h-6 w-6 rounded-md bg-veryDarkBlue/10 transition-all duration-700 ease-in-out peer-checked:bg-blueLotus peer-focus-visible:ring-2 peer-focus-visible:ring-blueLotus"></span>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-700 ease-in-out peer-checked:opacity-100">
                <Image
                  src={checkIcon}
                  width={15}
                  height={12}
                  alt="toggle full time"
                />
              </div>
            </div>
          </label>
        </form>
      )}
    </>
  );
}
