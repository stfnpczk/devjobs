import Link from "next/link";

export default function CtaLink({ website }) {
  return (
    <div className="mx-auto flex w-full max-w-[29.8125rem] justify-center md:mx-0 md:max-h-none md:w-[clamp(8.8125rem,18.359vw,12.5rem)]">
      <Link
        href={website}
        target="_blank"
        className="w-full rounded-md bg-blueLotus py-4 text-center text-base/none font-bold text-white transition-all duration-300 ease-in-out can-hover:hover:bg-lightviolet"
      >
        Apply Now
      </Link>
    </div>
  );
}
