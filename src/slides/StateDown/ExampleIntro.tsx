import { Highlight } from '../../Components/Highlight';
import { codeComponentA, codeComponentB, codeComponentC } from './Example';
import imgUrl from '../../assets/treestructure.png';

export default function StateDownIntro() {
    return (
        <>
            <section
                data-transition="slide-in fade-out"
                className="flex h-screen scale-105 items-center justify-center pl-20 pt-60"
            >
                <p className="text-6xl text-pink">"Push state down"</p>
                <p className=" text-4xl text-green">
                    Hvis alt under ein state change re-renderes, bør state ligge så lavt så mulig i
                    treet.
                </p>
                <div className="flex flex-col content-center items-center">
                    <img className="rounded-3xl bg-rosewater " src={imgUrl} />
                </div>
            </section>
            <section
                data-transition="slide-in fade-out"
                className="flex h-screen scale-105 items-center justify-center pl-20 pt-60"
            >
                <p className="text-2xl text-pink">"Push state down"</p>
                <p className=" text-3xl text-green">Komponent A</p>
                <Highlight style={'text-lg w-full h-1/3'} code={codeComponentA}></Highlight>
            </section>
            <section
                data-transition="fade-in fade-out"
                className="flex h-screen scale-105 items-center justify-center pl-20 pt-60"
            >
                <p className="text-2xl text-pink">"Push state down"</p>
                <p className=" text-3xl text-green">Komponent B</p>
                <Highlight style={'text-lg w-full h-2/3'} code={codeComponentB}></Highlight>
            </section>
            <section
                data-transition="fade-in fade-out"
                className="flex h-screen scale-105 items-center justify-center pl-20 pt-60"
            >
                <p className="text-2xl text-pink">"Push state down"</p>
                <p className=" text-3xl text-green">Komponent C</p>
                <Highlight style={'text-lg w-full'} code={codeComponentC}></Highlight>
            </section>
        </>
    );
}
