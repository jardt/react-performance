import { Highlight } from '../../Components/Highlight';
import { codeComponentA, codeComponentB, codeComponentC } from './Example';
import imgUrl from '../../assets/treestructure.png';

export default function ContentUpIntro() {
    const children = `
    const Eight = () => {
        return (
            <>
                <Three>
                    <Six />
                </Three>
                <Ten />
            </>
        );
    };

    const Three = ({ children }) => {
        // state change happens frequently here

        return (
            <>
                <One />
                {children}
            </>
        );
    };

    const Six = () => {
        // rendering this takes a lot of time
        return (
            <>
                <Four /> 
                <Seven />
            </>
        );
    };
`;

    return (
        <>
            <section
                data-transition="slide-in fade-out"
                className="flex h-screen scale-105 items-center justify-center pl-20 pt-60"
            >
                <p className="text-6xl text-pink">"Pull content up"</p>
                <p className=" text-4xl text-green">
                    Hvis ein ikkje kan flytte state lenger ned, så kan ein flytte andre komponenter
                    lenger opp
                </p>
            </section>
            <section
                data-transition="fade-in fade-out"
                className="flex h-screen scale-105 items-center justify-center pl-20 pt-60"
            >
                <p className="text-6xl text-pink">"Pull content up"</p>
                <p className=" text-4xl text-green">
                    I praksis betyr det at ein bruker props.children
                </p>
                <div className="flex justify-center gap-4 pt-12">
                    <img className="rounded-3xl bg-rosewater " src={imgUrl} />
                    <Highlight style={'text-lg  w-2/3 h-2/3'} code={children}></Highlight>
                </div>
            </section>
            <section
                data-transition="slide-in fade-out"
                className="flex h-screen scale-105 items-center justify-center pl-20 pt-60"
            >
                <p className="text-2xl text-pink">"Pull content up"</p>
                <p className=" text-4xl text-green">Komponent A</p>
                <Highlight style={'text-lg w-full h-1/3'} code={codeComponentA}></Highlight>
            </section>
            <section
                data-transition="fade-in fade-out"
                className="flex h-screen scale-105 items-center justify-center pl-20 pt-60"
            >
                <p className="text-2xl text-pink">"Pull content up"</p>
                <p className=" text-3xl text-green">Komponent B</p>
                <Highlight style={'text-lg w-full h-2/3'} code={codeComponentB}></Highlight>
            </section>
            <section
                data-transition="fade-in fade-out"
                className="flex h-screen scale-105 items-center justify-center pl-20 pt-60"
            >
                <p className="text-2xl text-pink">"Pull content up"</p>
                <p className=" text-3xl text-green">Komponent C</p>
                <Highlight style={'text-lg w-full'} code={codeComponentC}></Highlight>
            </section>
        </>
    );
}
