export default function Home() {
  return (
    <>
      <div className="px-20 max-sm:px-5 flex flex-col mb-4">
        <span className="text-2xl font-semibold">
          UX / UI Designer & Telematic Engineer
        </span>
        <span className="text-2xl">From Castellón based in Tarragona.</span>
      </div>
      <div className="px-20 max-sm:px-5 flex flex-row gap-4">
        <a
          className="text-2xl font-thin font-[Heebo] underline underline-offset-4 decoration-1"
          href="mailto:andrearamosjn@gmail.com"
          target="_blank"
        >
          Email Me
        </a>
        <a
          className="text-2xl font-thin font-[Heebo] underline underline-offset-4 decoration-1"
          href="https://www.linkedin.com/in/andrearmsjn"
          target="_blank"
        >
          LinkedIn
        </a>
      </div>
      <h1 className="text-[15rem] absolute bottom-5 left-20 right-20 max-sm:left-5 max-sm:right-5 w-screen font-semibold max-sm:text-7xl max-md:text-9xl max-lg:text-[12rem]">
        Welcome!
      </h1>
    </>
  );
}
