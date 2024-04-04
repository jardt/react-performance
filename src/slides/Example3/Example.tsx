import { useCallback, useMemo, useState } from 'react';
import { Highlight } from '../../Components/Highlight';

export function Example3() {
    return (
        <div className="h-full w-full p-6 text-pink">
            <ComponentA />
        </div>
    );
}

export const codeComponentA = `const ComponentA = () => {
    const [state, setState] = useState(0);

    const clickButton = useCallback(() => {
        setState((prevState) => prevState + 1);
    }, [setState]);

    const value = useMemo(() => state, [state]);
    return (
        <div>
            <div>
                <div>
                    <button
                        onClick={() => clickButton()}
                    >
                        Oppdater state
                    </button>
                </div>
            </div>
            <p>{value}</p>
            <ComponentB />
        </div>
    );
};`;

const ComponentA = () => {
    console.log('A');
    const [state, setState] = useState(0);

    const clickButton = useCallback(() => {
        setState((prevState) => prevState + 1);
    }, [setState]);

    const value = useMemo(() => state, [state]);

    return (
        <div className="h-full w-full border-4 border-dotted border-red p-2 ">
            <div className="flex justify-center p-10">
                <Highlight style="w-4/6" code={codeComponentA}></Highlight>
                <div>
                    <button
                        className="h-12 bg-lavender text-lg capitalize text-black"
                        onClick={() => clickButton()}
                    >
                        Oppdater state
                    </button>
                    <p>{value}</p>
                </div>
            </div>
            <div className="flex flex-wrap justify-center gap-12">
                <ComponentB />
            </div>
        </div>
    );
};

export const codeComponentB = `const ComponentB = () => {
    console.log('B');

    return (
        <div>
            <ComponentC />
        </div>
    );
};`;

const ComponentB = () => {
    console.log('B');
    return (
        <div className="flex h-min flex-row gap-4 border-4 border-dotted border-green p-4">
            <Highlight style="w-30 scale-[0.80]" code={codeComponentB}></Highlight>
            <ComponentC />
        </div>
    );
};

export const codeComponentC = `const ComponentC = () => {
    const c = useMemo(() => ({ data: 'C' }), []);
    console.log('C');

    return (
        <div> 
            <p>{c.data}</p>
        </div>
    );
};`;

const ComponentC = () => {
    const c = useMemo(() => ({ data: 'C' }), []);
    console.log('C');
    return (
        <div className="flex h-min flex-row border-4 border-dotted border-blue p-4">
            <Highlight style="w-30 scale-[0.80]" code={codeComponentC}></Highlight>
            <p className="m-0 p-0">{c.data}</p>
        </div>
    );
};
