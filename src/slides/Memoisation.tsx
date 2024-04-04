import { Highlight } from '../Components/Highlight';

export function Memoization() {
    console.error('Failed to explain Memoization, maybe try again?');

    return (
        <>
            <section className="flex h-full">
                <div className="flex h-full flex-col items-center justify-center">
                    <p className="m-20 h-max w-3/4 text-6xl font-extrabold leading-relaxed text-teal antialiased">
                        Memoisering via React.memo
                    </p>
                    <p className="m-20 h-max w-3/4 text-4xl font-extrabold leading-relaxed text-yellow antialiased">
                        Måte å stoppe re-rendering på i ein komponent hvis props ikkje har endra seg
                    </p>
                    <p className="m-20 h-max w-3/4 text-4xl font-extrabold leading-relaxed text-red antialiased">
                        useMemo og useCallback er støtte for React.memo
                    </p>
                    <Highlight style="w-1/3" code={eq} />
                </div>
            </section>
            <section className="flex h-full">
                <div className="flex h-full flex-col items-center justify-center">
                    <p className="m-20 h-max w-3/4 text-6xl font-extrabold leading-relaxed text-peach antialiased">
                        Memoisering eller ikkje memosering
                    </p>
                    <p className="m-20 h-max w-3/4 text-4xl font-extrabold leading-relaxed text-red antialiased">
                        Hvis det alltid var riktig, så ville rammeverket gjort det
                    </p>
                    <p className="m-20 h-max w-3/4 text-4xl font-extrabold leading-relaxed text-green antialiased">
                        Det er smittsomt og skjørt, men fungerer
                    </p>
                    <Highlight style="w-2/3" code={brittle} />
                </div>
            </section>
            <section className="flex h-full">
                <div className="flex h-full flex-col items-center justify-center">
                    <p className="m-20 h-max w-3/4 text-6xl font-extrabold leading-relaxed text-red antialiased">
                        Før du memoiserer alt, jobb heller med komponent treet ditt
                    </p>
                </div>
            </section>
        </>
    );
}

const eq = `
[] === [];  //false
{a: 1} === {a: 1} //false

const a = () => null;
const b = () => null;
a === b //false
`;

const brittle = `
const memoisedItems = useMemo(() => sortAndFilterMyItems(items), [items])

return (<>
   <MemoisedComponent items={memoisedItems}>
        <p>i am children props</p>
    </MemoisedComponent>
</>);
`;
