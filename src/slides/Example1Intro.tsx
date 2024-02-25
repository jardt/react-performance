import { Highlight } from '../Components/Highlight';
import { codeComponentA, codeComponentB, codeComponentC } from './Example1';

export default function Example1Intro() {
    return (
        <section className="r-stack m-auto flex items-center justify-center gap-12 p-20">
            <div className="fragment fade-in">
                <Highlight style={'text-lg w-full'} code={codeComponentA}></Highlight>
            </div>
            <div className="fragment fade-in">
                <Highlight style={'text-lg w-full'} code={codeComponentB}></Highlight>
            </div>
            <div className="fragment fade-in">
                <Highlight style={'text-lg w-full'} code={codeComponentC}></Highlight>
            </div>
        </section>
    );
}
