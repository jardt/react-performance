import { useState } from 'react';
import { Highlight } from '../../Components/Highlight';

export function StateDown() {
    return (
        <div className="relative h-full w-full p-6 text-pink" data-transition="fade-in slide-out">
            <p className="absolute left-8 top-2 text-xl">eksempel state down</p>
            <ComponentA />
        </div>
    );
}

export const codeComponentA = `const ComponentA = () => {
    console.log('A');

    return (
        <div>
            <div>
                <!-- Other compontent sub-trees -->
            </div>
            <ComponentB />
        </div>
    );
};`;

const ComponentA = () => {
    console.log('A');

    return (
        <div className="h-full w-full border-4 border-dotted border-red p-2 ">
            <div className="flex justify-center p-10">
                <Highlight style="w-4/6" code={codeComponentA}></Highlight>
            </div>
            <div className="flex flex-wrap justify-center gap-12">
                <ComponentB />
            </div>
        </div>
    );
};

export const codeComponentB = `const ComponentB = ({ value }) => {
    const [count, setCount] = useState(0);

    console.log('B');

    const c = { data: 'C' };

    return (
        <div>
            <div>
                <p>{count}</p>
            </div>
            <div>
                <button
                    onClick={() => setCount(count + 1)}
                >
                    Oppdater state
                </button>
            </div>
            <ComponentC c={c} />
        </div>
    );
};
`;

const ComponentB = () => {
    const [count, setCount] = useState(0);
    console.log('B');
    const c = { data: 'C' };
    return (
        <div className="flex h-min flex-row gap-4 border-4 border-dotted border-green p-4">
            <Highlight style="w-30 scale-[0.80]" code={codeComponentB}></Highlight>
            <div>
                <p className="m-0 p-0 text-center">{count}</p>
                <button
                    className="h-12 bg-lavender text-lg capitalize text-black"
                    onClick={() => setCount(count + 1)}
                >
                    Count
                </button>
            </div>
            <ComponentC c={c} />
        </div>
    );
};

export const codeComponentC = `const ComponentC = ({ c }) => {
    console.log('C');
    return (
        <div> 
            <p>{c.data}</p>
        </div>
    );
};`;

const ComponentC = ({ c }) => {
    console.log('C');
    return (
        <div className="flex h-min flex-row border-4 border-dotted border-blue p-4">
            <Highlight style="w-30 scale-[0.80]" code={codeComponentC}></Highlight>
            <p className="m-0 p-0">{c.data}</p>
        </div>
    );
};
