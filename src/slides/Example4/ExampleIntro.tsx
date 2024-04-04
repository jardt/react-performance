import { Highlight } from '../../Components/Highlight';
import { codeComponentB } from './Example';

export default function Example4Intro() {
    return (
        <section
            data-transition="slide-in fade-out"
            className="flex h-screen w-screen scale-105 items-center justify-center pl-20 pt-60"
        >
            <div>
                <p className="p-6 text-4xl text-pink">React.memo</p>
                <div className="flex w-full justify-center">
                    <Highlight code={codeComponentB} style={'w-1/2'} />
                </div>
                <p className="p-6 text-4xl text-peach">
                    Er ein løsning(, men burde vere siste utveg)
                </p>
            </div>
        </section>
    );
}
