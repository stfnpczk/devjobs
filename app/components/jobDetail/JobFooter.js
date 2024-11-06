import CtaLink from "@/app/shared/CtaLink";

export default function JobFooter({ website, company, position }) {
  return (
    <footer className="w-full bg-card xl:mx-auto xl:max-w-[137.5rem]">
      <div className="p-6 md:mx-auto md:flex md:max-w-[var(--max-width-layout-tablet)] md:items-center md:justify-between md:px-0 md:py-10 lg:mx-auto xl:max-w-[--max-width-layout-job-desktop] xl:py-6">
        <div className="hidden md:block">
          <h2 className="text-txtColor text-xl/10">{position}</h2>
          <span className="text-darkGray"> {company} </span>
        </div>
        <CtaLink website={website} />
      </div>
    </footer>
  );
}
