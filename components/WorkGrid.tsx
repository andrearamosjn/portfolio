import work from '../work'

interface Props {
    id: string
}

export default function WorkGrid({id}: Props) {
    // @ts-ignore
    const projects = work.reduce((acc, item) => {
        if (!item.projects || (id !== "" && item.id !== id)) return acc;
        return [
            ...acc,
            ...item.projects.map(proj => ({ ...proj, parent: item }))
        ]
    }, [])

    return (
        <div className="px-20 max-sm:px-10">
            <nav>
                <ul className="flex flex-row gap-5">
                    <li>
                        <a
                            className="text-2xl font-light text-[Heebo] underline underline-offset-4 decoration-1 data-[focused=true]:font-semibold"
                            href="/work"
                            data-focused={id === ""}
                        >
                            All
                        </a>
                    </li>
                    {work.map((section) => (
                        <li key={section.id}>
                            <a
                                className="text-2xl font-light text-[Heebo] underline underline-offset-4 decoration-1 data-[focused=true]:font-semibold"
                                data-focused={section.id === id}
                                href={`/work/${section.id}`}
                            >
                                {section.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
            <main className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-5 justify-center">
                {
                    //@ts-ignore
                    projects.map((p) => (
                        <a href={`/work/${p.parent.id}/${p.id}`} key={p.id}>
                            <div className="flex flex-col mb-10 cursor-pointer">
                                {p.hero && <img src={p.hero} className="max-w-max" />}
                                <div className="h-44 flex flex-col">
                                    <span className="mt-4 text-base text-[#2e2e2e] opacity-70 uppercase font-medium leading-tight">{p.parent.name}</span>
                                    <span className="mt-2 font-[Heebo] font-normal text-2xl uppercase leading-tight">{p.name}</span>
                                    <span className="mt-2 text-2xl text-[#2e2e2e] font-normal leading-tight">{p.description}</span>
                                </div>
                            </div>
                        </a>
                    ))
                }
            </main>
            <div className="fixed bottom-0 left-0 w-screen bg-accent flex flex-row">
                <a className="flex-1 text-2xl py-4 font-thin font-[Heebo] underline underline-offset-2 text-center" rel="noreferrer" href="mailto:andrearamosjn@gmail.com" target="_blank">Email Me</a>
                <a className="flex-1 text-2xl py-4 font-thin font-[Heebo] underline underline-offset-2 text-center" rel="noreferrer" href="https://www.linkedin.com/in/andrearmsjn" target="_blank">LinkedIn</a>
            </div>
        </div>
    )
}