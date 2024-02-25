import { memo, useCallback, useEffect, useMemo, useState } from 'react';
import { CodeComponent } from '../Components/CodeComponent';
import { Highlight } from '../Components/Highlight';

export function ExampleMemo() {
    return (
        <div className="h-full w-full p-6 text-pink">
            <ComponentA />
        </div>
    );
}

export const codeComponentA = `const ComponentA = () => {
    const [state, setState] = useState(0);

    console.log('A');

    return (
        <div className="h-full w-full border-4 border-dotted border-yellow p-4 ">
            <div className="flex p-10">
                <Highlight style="w-1/2" code={codeComponentA}></Highlight>
                <div>
                    <p>Component A</p>
                    <button className="h-12 text-lg" onClick={() => setState(state + 1)}>
                        count
                    </button>
                </div>
            </div>
            <div className="flex flex-wrap gap-12">
                <ComponentB value={state} />
                <ComponentC />
            </div>
        </div>
    );
};`;

const ComponentA = () => {
    const [state, setState] = useState(0);

    console.log('A');

    return (
        <div className="h-full w-full border-4 border-dotted border-peach p-4 ">
            <div className="flex justify-center p-10">
                <Highlight style="w-4/6" code={codeComponentA}></Highlight>
                <div>
                    <p>Component A</p>
                    <button
                        className="h-12 bg-lavender text-lg capitalize text-black"
                        onClick={() => setState(state + 1)}
                    >
                        Oppdater state
                    </button>
                </div>
            </div>
            <div className="flex flex-wrap justify-center gap-12">
                <ComponentB value={state} />
                <ComponentC />
            </div>
        </div>
    );
};

export const codeComponentB = `const ComponentB = ({ value }) => {
    console.log('B');
    return <p>{value}</p>;
};`;

const ComponentB = ({ value }) => {
    console.log('B');
    return (
        <div className="flex flex-col border-4 border-dotted border-yellow p-4">
            <Highlight style="w-30" code={codeComponentB}></Highlight>
            <p>{value}</p>
        </div>
    );
};

export const codeComponentC = `const ComponentC = () => {
    console.log('C');
    return <p>C</p>;
};`;

const ComponentC = memo(() => {
    console.log('C');
    return (
        <div className="flex flex-col border-4 border-dotted border-yellow p-4">
            <Highlight style="w-30" code={codeComponentC}></Highlight>
            <p>C</p>
        </div>
    );
});
