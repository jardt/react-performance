import { Highlight } from '../../Components/Highlight';
import { codeComponentA, codeComponentB, codeComponentC } from './Example';

export default function Example3Intro() {
    return (
        <>
            <section
                data-transition="slide-in fade-out"
                className="flex h-screen scale-105 items-center justify-center pl-20 pt-60"
            >
                <p className="text-2xl text-pink">Eksempel 3</p>
                <p className=" text-4xl text-green">
                    Memoiserer eg enda hardere og endrer litt på props så blir det vel bedre?
                </p>
            </section>
            <section
                data-transition="slide-in fade-out"
                className="flex h-screen scale-105 items-center justify-center pl-20 pt-60"
            >
                <p className="text-lg text-pink">Eksempel 3</p>
                <p className=" text-3xl text-green">Komponent A</p>
                <Highlight style={'text-lg w-full h-1/3'} code={codeComponentA}></Highlight>
            </section>
            <section
                data-transition="fade-in fade-out"
                className="flex h-screen scale-105 items-center justify-center pl-20 pt-60"
            >
                <p className="text-lg text-pink">Eksempel 3</p>
                <p className=" text-3xl text-green">Komponent B</p>
                <Highlight style={'text-lg w-full h-2/3'} code={codeComponentB}></Highlight>
            </section>
            <section
                data-transition="fade-in fade-out"
                className="flex h-screen scale-105 items-center justify-center pl-20 pt-60"
            >
                <p className="text-lg text-pink">Eksempel 3</p>
                <p className=" text-3xl text-green">Komponent C</p>
                <Highlight style={'text-lg w-full'} code={codeComponentC}></Highlight>
            </section>
        </>
    );
}
