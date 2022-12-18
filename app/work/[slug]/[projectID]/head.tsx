import work from '../../../../work'
interface Props {
    params: {
        slug: string;
        projectID: string;
    }
}

export default function Head({ params }: Props) {
    const house = work.find(w => w.id === params.slug)!
    // @ts-ignore
    const project = house.projects.find(p => p.id === params.projectID)!

    return (
        <>
            <title>{`${house.name} › ${project.name}`}</title>
        </>
    )
}