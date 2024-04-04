import { useCallback, useMemo, useState } from 'react';
import { Highlight } from '../../Components/Highlight';

export function Example5() {
    return (
        <div className="h-full w-full p-6 text-pink">
            <ComponentA />
        </div>
    );
}

export const codeComponentA = `const ComponentA = () => {
    const [state, setState] = useState(0);

    console.log('A');

    const clickButton = useCallback(() => {
        setState(state + 1);
    }, [setState, state]);

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
            <ComponentB value={state} />
        </div>
    );
};`;

const ComponentA = () => {
    console.log('A');
    const [state, setState] = useState(0);

    const clickButton = useCallback(() => {
        setState(state + 1);
    }, [setState, state]);

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
                </div>
            </div>
            <div className="flex flex-wrap justify-center gap-12">
                <ComponentB value={state} />
            </div>
        </div>
    );
};

export const codeComponentB = `const ComponentB = ({ value }) => {
    console.log('B');

    const c = useMemo(() => ({ data: 'C' }), []);

    return (
        <div>
            <div>
                <p>{value}</p>
            </div>
            <ComponentC c={c} />
        </div>
    );
};`;

const ComponentB = ({ value }) => {
    console.log('B');
    const c = useMemo(() => ({ data: 'C' }), []);
    return (
        <div className="flex h-min flex-row gap-4 border-4 border-dotted border-green p-4">
            <Highlight style="w-30 scale-[0.80]" code={codeComponentB}></Highlight>
            <p className="m-0 p-0 text-center">{value}</p>
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
