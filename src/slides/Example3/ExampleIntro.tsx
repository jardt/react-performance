import { Highlight } from '../../Components/Highlight';
import { codeComponentA, codeComponentB, codeComponentC } from './Example';

export default function Example3Intro() {
    return (
        <>
            <section
                data-transition="slide-in fade-out"
                className="flex h-screen scale-105 items-center justify-center pl-20 pt-60"
            >
                <p className="text-lg text-pink">Eksepmel 3</p>
                <p className=" text-3xl text-green">
                    Memoiserer eg enda hardere og endrer litt på props så blir det vel bedre
                </p>
            </section>
            <section
                data-transition="slide-in fade-out"
                className="flex h-screen scale-105 items-center justify-center pl-20 pt-60"
            >
                <p className="p-6 text-lg text-pink">Eksepmel 3 Komponent A</p>
                <Highlight style={'text-lg w-full h-1/3'} code={codeComponentA}></Highlight>
            </section>
            <section
                data-transition="fade-in fade-out"
                className="flex h-screen scale-105 items-center justify-center pl-20 pt-60"
            >
                <p className="p-6 text-lg text-pink">Eksepmel 3 Komponent B</p>
                <Highlight style={'text-lg w-full h-2/3'} code={codeComponentB}></Highlight>
            </section>
            <section
                data-transition="fade-in fade-out"
                className="flex h-screen scale-105 items-center justify-center pl-20 pt-60"
            >
                <p className="p-6 text-lg text-pink">Eksepmel 3 Komponent C</p>
                <Highlight style={'text-lg w-full'} code={codeComponentC}></Highlight>
            </section>
        </>
    );
}
