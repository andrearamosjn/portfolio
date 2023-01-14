import work from "../../../../work";
interface Props {
  params: {
    slug: string;
    projectID: string;
  };
}

export default function Project({ params }: Props) {
  const house = work.find((w) => w.id === params.slug)!;
  // @ts-ignore
  const project = house.projects.find((p) => p.id === params.projectID)!;

  return (
    <div className="max-w-screen-xl h-screen m-auto">
      <div
        className="h-3/6 bg-lime-900 flex flex-col-reverse items-start"
        style={{
          backgroundImage: `url('${project.introductionHeaderImage}')`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="min-h-36 w-[33rem] max-w-full px-16 py-10 max-sm:px-5">
          <img src={project.logo} />
          <h2 className="font-medium text-base text-white opacity-70 leading-none mt-2 uppercase">
            {house.name}
          </h2>
          <h1 className="font-normal text-2xl font-[Heebo] text-white uppercase mt-2 leading-none">
            {project.name}
          </h1>
          <desc className="font-light text-xl text-white mt-2 leading-none">
            {project.description}
          </desc>
        </div>
      </div>
      <div className="max-sm:px-5 max-sm:py-10 px-16 py-20 odd:bg-[#e5e5e5] even:bg-[#ffffff]">
        <h1 className="max-sm:text-left text-center uppercase font-medium text-black opacity-70 text-base">
          Introduction
        </h1>
        <desc className="max-sm:px-0 max-sm:text-left max-sm:text-2xl max-sm:leading-7 mt-4 px-24 inline-block text-center leading-7 font-normal text-3xl">
          {project.introduction}
        </desc>
        {project.images && (
          <div className="grid grid-cols-2 gap-5 mt-16 sm:mx-auto">
            {project.images.map((im: string) => (
              <img
                className="col-span-1 [&:nth-child(3)]:col-span-2 w-fill"
                src={im}
              />
            ))}
          </div>
        )}
      </div>
      {project.affinityDiagram && (
        <div className="max-sm:px-5 max-sm:py-10 px-16 py-20 odd:bg-[#e5e5e5] even:bg-[#ffffff]">
          <h1 className="uppercase font-medium text-black opacity-70 text-base">
            Affinity diagram
          </h1>
          <desc className="mt-4 leading-7 font-normal text-2xl max-w-2xl inline-block">
            {project.affinityDiagram}
          </desc>
          {project.affinityDiagramImage && (
            <div className="mt-16 sm:mx-auto">
              <img className="w-fill" src={project.affinityDiagramImage} />
            </div>
          )}
        </div>
      )}
      {project.empathyMap && (
        <div className="max-sm:px-5 max-sm:py-10 px-16 py-20 odd:bg-[#e5e5e5] even:bg-[#ffffff]">
          <h1 className="uppercase font-medium text-black opacity-70 text-base">
            Empathy map
          </h1>
          <desc className="mt-4 leading-7 font-normal text-2xl max-w-2xl inline-block">
            {project.empathyMap}
          </desc>
          {project.empathyMapImage && (
            <div className="mt-16 sm:mx-auto">
              <img className="w-fill" src={project.empathyMapImage} />
            </div>
          )}
        </div>
      )}
      {project.userFlows && (
        <div className="max-sm:px-5 max-sm:py-10 px-16 py-20 odd:bg-[#e5e5e5] even:bg-[#ffffff]">
          <h1 className="uppercase font-medium text-black opacity-70 text-base">
            User flows
          </h1>
          <desc className="mt-4 leading-7 font-normal text-2xl max-w-2xl inline-block">
            {project.userFlows}
          </desc>
          {project.userFlowsImages && (
            <div className="grid grid-cols-2 gap-5 mt-16 sm:mx-auto">
              {project.userFlowsImages.map((im: string) => (
                <img
                  className="col-span-1 [&:nth-child(3)]:col-span-2 w-fill"
                  key={im}
                  src={im}
                />
              ))}
            </div>
          )}
        </div>
      )}
      {project.problems && (
        <div className="max-sm:px-5 max-sm:py-10 px-16 py-20 odd:bg-[#e5e5e5] even:bg-[#ffffff]">
          <h1 className="uppercase font-medium text-black opacity-70 text-base">
            Problems
          </h1>
          <desc className="mt-4 leading-7 font-normal text-2xl max-w-2xl inline-block">
            <ol className="list-decimal list-inside">
              {project.problems.map((problem: string) => (
                <li key={problem}>{problem}</li>
              ))}
            </ol>
          </desc>
        </div>
      )}
      {project.siteMap && (
        <div className="max-sm:px-5 max-sm:py-10 px-16 py-20 odd:bg-[#e5e5e5] even:bg-[#ffffff]">
          <h1 className="uppercase font-medium text-black opacity-70 text-base">
            Site map
          </h1>
          <desc className="mt-4 leading-7 font-normal text-2xl max-w-2xl inline-block">
            {project.siteMap}
          </desc>
          <a href={project.siteMapURL} target="_blank">
            <img className="mx-auto mt-20" src={project.siteMapImage} />
          </a>
        </div>
      )}
      {project.solutions && (
        <div className="max-sm:px-5 max-sm:py-10 px-16 py-20 odd:bg-[#e5e5e5] even:bg-[#ffffff]">
          <h1 className="uppercase font-medium text-black opacity-70 text-base">
            Solutions
          </h1>
          <desc className="mt-4 leading-7 font-normal text-2xl max-w-2xl inline-block">
            <ol className="list-decimal list-inside">
              {project.solutions.map((problem: string) => (
                <li key={problem}>{problem}</li>
              ))}
            </ol>
          </desc>
        </div>
      )}
      {project.userPersona && (
        <div className="max-sm:px-5 max-sm:py-10 px-16 py-20 odd:bg-[#e5e5e5] even:bg-[#ffffff]">
          <h1 className="uppercase font-medium text-black opacity-70 text-base">
            User persona
          </h1>
          <img className="mx-auto mt-4 mb-10" src={project.userPersonaImage} />
          <blockquote className="indent-10 relative leading-7 font-normal text-2xl max-w-2xl inline-block">
            <svg
              className="opacity-10 absolute top-3 left-1 transform -translate-x-6 -translate-y-8 h-16 w-16 text-gray-100 dark:text-gray-700"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M7.39762 10.3C7.39762 11.0733 7.14888 11.7 6.6514 12.18C6.15392 12.6333 5.52552 12.86 4.76621 12.86C3.84979 12.86 3.09047 12.5533 2.48825 11.94C1.91222 11.3266 1.62421 10.4467 1.62421 9.29999C1.62421 8.07332 1.96459 6.87332 2.64535 5.69999C3.35231 4.49999 4.33418 3.55332 5.59098 2.85999L6.4943 4.25999C5.81354 4.73999 5.26369 5.27332 4.84476 5.85999C4.45201 6.44666 4.19017 7.12666 4.05926 7.89999C4.29491 7.79332 4.56983 7.73999 4.88403 7.73999C5.61716 7.73999 6.21938 7.97999 6.69067 8.45999C7.16197 8.93999 7.39762 9.55333 7.39762 10.3ZM14.6242 10.3C14.6242 11.0733 14.3755 11.7 13.878 12.18C13.3805 12.6333 12.7521 12.86 11.9928 12.86C11.0764 12.86 10.3171 12.5533 9.71484 11.94C9.13881 11.3266 8.85079 10.4467 8.85079 9.29999C8.85079 8.07332 9.19117 6.87332 9.87194 5.69999C10.5789 4.49999 11.5608 3.55332 12.8176 2.85999L13.7209 4.25999C13.0401 4.73999 12.4903 5.27332 12.0713 5.85999C11.6786 6.44666 11.4168 7.12666 11.2858 7.89999C11.5215 7.79332 11.7964 7.73999 12.1106 7.73999C12.8437 7.73999 13.446 7.97999 13.9173 8.45999C14.3886 8.93999 14.6242 9.55333 14.6242 10.3Z"
                fill="currentColor"
              />
            </svg>
            {project.userPersonaQuote}
          </blockquote>
        </div>
      )}
      {project.wireframes && (
        <div className="max-sm:px-5 max-sm:py-10 px-16 py-20 odd:bg-[#e5e5e5] even:bg-[#ffffff]">
          <h1 className="uppercase font-medium text-black opacity-70 text-base">
            Wireframes
          </h1>
          <desc className="mt-4 leading-7 font-normal text-2xl max-w-2xl inline-block">
            {project.wireframes}
          </desc>
          <a href={project.wireframesURL} target="_blank">
            <div className="grid grid-flow-col place-content-center auto-cols-max overflow-auto gap-5 mt-16">
              {project.wireframesImages?.map((im: string) => (
                <img className="col-span-1 w-fit" src={im} />
              ))}
            </div>
          </a>
        </div>
      )}
      {project.uiImage && (
        <div className="max-sm:py-10 py-20 odd:bg-[#e5e5e5] even:bg-[#ffffff]">
          <h1 className="max-sm:px-5 px-16 uppercase font-medium text-black opacity-70 text-base">
            UI
          </h1>
          <desc className="max-sm:px-5 px-16 mt-4 leading-7 font-normal text-2xl max-w-2xl inline-block">
            {project.ui}
          </desc>
          <img className="mt-16 w-screen max-w-full" src={project.uiImage} />
        </div>
      )}
      {project.protoURL && (
        <div className="max-sm:py-10 pt-20 odd:bg-[#e5e5e5] even:bg-[#ffffff]">
          <h1 className="max-sm:px-5 px-16 uppercase font-medium text-black opacity-70 text-base">
            Prototype
          </h1>
          <desc className="max-sm:px-5 px-16 mt-4 leading-7 font-normal text-2xl max-w-2xl inline-block">
            {project.proto}
          </desc>
          <a href={project.protoURL} target="_blank">
            <img className="mt-16 w-screen" src={project.protoImage} />
          </a>
        </div>
      )}
      <div className="fixed bottom-0 left-0 w-screen bg-accent flex flex-row">
        <a
          className="flex-1 text-2xl py-4 font-thin font-[Heebo] underline underline-offset-4 decoration-1 text-center"
          href="mailto:andrearamosjn@gmail.com"
          target="_blank"
        >
          Email Me
        </a>
        <a
          className="flex-1 text-2xl py-4 font-thin font-[Heebo] underline underline-offset-4 decoration-1 text-center"
          href="https://www.linkedin.com/in/andrearmsjn"
          target="_blank"
        >
          LinkedIn
        </a>
      </div>
    </div>
  );
}
