export default function CtaButton({ text, width, onClick }) {
  return (
    <div className="flex w-full justify-center">
      <button
        onClick={onClick}
        className={`${width} rounded-md bg-blueLotus py-4 text-center text-base/none font-bold text-white transition-all duration-300 ease-in-out can-hover:hover:bg-lightviolet`}
      >
        {text}
      </button>
    </div>
  );
}
