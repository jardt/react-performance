import { useCallback, useMemo, useState } from 'react';
import { Highlight } from '../../Components/Highlight';

export function Example2() {
    return (
        <div className="relative h-full w-full p-6 text-pink">
            <p className="absolute left-8 top-2 text-xl">eksempel 2</p>
            <ComponentA />
        </div>
    );
}

export const codeComponentA = `const ComponentA = () => {
    const [count, setCount] = useState(0);

    console.log('A');

    const clickButton = useCallback(() => {
        setCount(count + 1);
    }, [setCount, count]);

    return (
        <div>
            <div>
                <div>
                    <button
                        onClick={() => clickButton()}
                    >
                        Tell opp
                    </button>
                </div>
            </div>
            <ComponentB count={count} />
        </div>
    );
};`;

const ComponentA = () => {
    console.log('A');
    const [count, setCount] = useState(0);

    const clickButton = useCallback(() => {
        setCount(count + 1);
    }, [setCount, count]);

    return (
        <div className="h-full w-full border-4 border-dotted border-red p-2 ">
            <div className="flex justify-center p-10">
                <Highlight style="w-4/6" code={codeComponentA}></Highlight>
                <div>
                    <button
                        className="h-12 bg-lavender text-lg capitalize text-black"
                        onClick={() => clickButton()}
                    >
                        Tell opp
                    </button>
                </div>
            </div>
            <div className="flex flex-wrap justify-center gap-12">
                <ComponentB count={count} />
            </div>
        </div>
    );
};

export const codeComponentB = `const ComponentB = ({ count }) => {
    console.log('B');

    const c = useMemo(() => ({ data: 'C' }), []);

    return (
        <div>
            <div>
                <p>{count}</p>
            </div>
            <ComponentC c={c} />
        </div>
    );
};`;

const ComponentB = ({ count }) => {
    console.log('B');
    const c = useMemo(() => ({ data: 'C' }), []);
    return (
        <div className="flex h-min flex-row gap-4 border-4 border-dotted border-green p-4">
            <Highlight style="w-30 scale-[0.80]" code={codeComponentB}></Highlight>
            <p className="m-0 p-0 text-center">{count}</p>
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
