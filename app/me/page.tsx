export default function Me() {
    return <div>
        <div className="px-20 max-sm:px-10 flex flex-col mb-4">
            <span className="text-2xl">Mi nombre es Andrea Ramos,</span>
            <span className="text-2xl font-semibold">diseñadora UX/UI y desarrolladora de software.</span>
            <span className="text-2xl">Soy una persona trabajadora constante y que sabe escuchar.</span>
        </div>
        <div className="px-20 max-sm:px-10 flex flex-col mb-4">
            <span className="text-2xl">Me apasiona el mundo digital y las soluciones centradas en los</span>
            <span className="text-2xl">usuarios con el objetivo de aportar valor.</span>
        </div>
        <div className="px-20 max-sm:px-10 flex flex-col mb-4">
            <span className="text-2xl">¿Trabajamos juntos?</span>
        </div>
        
        <div className="px-20 max-sm:px-10 flex-col mb-4 grid grid-cols-2 gap-5 mt-16 sm:mx-auto">
            <img className="col-span-1:col-span-2 w-fill" src={"/me/IMG1.jpg"}/>
            <img className="col-span-1:col-span-2 w-fill" src={"/me/IMG2.jpg"}/>
        </div>
        <div className="fixed bottom-0 left-0 w-screen bg-accent flex flex-row">
            <a className="flex-1 text-2xl py-4 font-thin font-[Heebo] underline underline-offset-2 text-center" href="mailto:andrearamosjn@gmail.com" target="_blank">Email Me</a>
            <a className="flex-1 text-2xl py-4 font-thin font-[Heebo] underline underline-offset-2 text-center" href="https://www.linkedin.com/in/andrearmsjn" target="_blank">LinkedIn</a>
        </div>
    </div>
}