import { NextPage } from "next"
import WorkGrid from "../../../components/WorkGrid"

interface Props {
    params: {
        slug: string;
    }
}

export default function SpecificWorkGrid({ params }: Props) {
    return <WorkGrid id={params.slug} />
}