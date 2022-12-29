import work from '../../../../work'
interface Props {
    params: {
        slug: string;
        projectID: string;
    }
}

export default function Project({ params }: Props) {
    const house = work.find(w => w.id === params.slug)!
    // @ts-ignore
    const project = house.projects.find(p => p.id === params.projectID)!

    return (
        <div className="max-w-screen-xl h-screen m-auto">
            <div className="h-3/6 bg-lime-900 flex flex-col-reverse items-start" style={{
                backgroundImage: `url('${project.introductionHeaderImage}')`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover'
            }}>
                <div className="min-h-36 w-[33rem] mx-16 my-10">
                    <img src={project.logo} />
                    <h2 className="font-medium text-base text-white opacity-70 leading-none mt-2 uppercase">{house.name}</h2>
                    <h1 className="font-normal text-2xl font-[Heebo] text-white uppercase mt-2 leading-none">{project.name}</h1>
                    <desc className="font-light text-xl text-white mt-2 leading-none">{project.description}</desc>
                </div>
            </div>
            <div className="px-16 py-20 odd:bg-[#e5e5e5] even:bg-[#ffffff]">
                <h1 className="text-center uppercase font-medium text-black opacity-70 text-base">Introduction</h1>
                <desc className="mt-4 px-24 inline-block text-center leading-7 font-normal text-3xl">{project.introduction}</desc>
                <div className="grid grid-cols-2 gap-5 mt-16 sm:mx-auto">
                    {project.images?.map((im: string) => <img className="col-span-1 [&:nth-child(3)]:col-span-2 w-fill" src={im} />)}
                </div>
            </div>
            <div className="px-16 py-20 odd:bg-[#e5e5e5] even:bg-[#ffffff]">
                {project.siteMap && <>
                    <h1 className="uppercase font-medium text-black opacity-70 text-base">Site map</h1>
                    <desc className="mt-4 leading-7 font-normal text-2xl max-w-2xl inline-block">{project.siteMap}</desc>
                    <a href={project.siteMapURL} target="_blank">
                        <img className="mx-auto mt-20" src={project.siteMapImage} />
                    </a>
                </>}
            </div>
            {project.wireframes && (
                <div className="px-16 py-20 odd:bg-[#e5e5e5] even:bg-[#ffffff]">
                    <h1 className="uppercase font-medium text-black opacity-70 text-base">Wireframes</h1>
                    <desc className="mt-4 leading-7 font-normal text-2xl max-w-2xl inline-block">{project.wireframes}</desc>
                    <a href={project.wireframesURL} target="_blank">
                        <div className="grid grid-flow-col place-content-center auto-cols-max gap-5 mt-16">
                            {project.wireframesImages?.map((im: string) => <img className="col-span-1 w-fit" src={im} />)}
                        </div>
                    </a>
                </div>
            )}
            <div className="py-20 odd:bg-[#e5e5e5] even:bg-[#ffffff]">
                <h1 className="px-16 uppercase font-medium text-black opacity-70 text-base">UI</h1>
                <desc className="px-16 mt-4 leading-7 font-normal text-2xl max-w-2xl inline-block">{project.ui}</desc>
                <img className="mt-16 w-screen" src={project.uiImage} />
            </div>
            <div className="pt-20 odd:bg-[#e5e5e5] even:bg-[#ffffff]">
                <h1 className="px-16 uppercase font-medium text-black opacity-70 text-base">Prototype</h1>
                <desc className="px-16 mt-4 leading-7 font-normal text-2xl max-w-2xl inline-block">{project.proto}</desc>
                <a href={project.protoURL} target="_blank">
                    <img className="mt-16 w-screen" src={project.protoImage} />
                </a>
            </div>
            <div className="fixed bottom-0 left-0 w-screen bg-accent flex flex-row">
                <a className="flex-1 text-2xl py-4 font-thin font-[Heebo] underline underline-offset-2 text-center" href="mailto:andrearamosjn@gmail.com" target="_blank">Email Me</a>
                <a className="flex-1 text-2xl py-4 font-thin font-[Heebo] underline underline-offset-2 text-center" href="https://www.linkedin.com/in/andrearmsjn" target="_blank">LinkedIn</a>
            </div>
        </div>
    )
}