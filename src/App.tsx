import { Deck } from './Deck';
import { Example1 } from './slides/Example1/Example';
import { Example2 } from './slides/Example2/Example';
import { Example3 } from './slides/Example3/Example';
import { Example4 } from './slides/Example4/Example';
import Example1Intro from './slides/Example1/ExampleIntro';
import Example2Intro from './slides/Example2/ExampleIntro';
import { Intro } from './slides/Intro';
import Example3Intro from './slides/Example3/ExampleIntro';
import Example4Intro from './slides/Example4/ExampleIntro';
import StateDownIntro from './slides/StateDown/ExampleIntro';
import { StateDown } from './slides/StateDown/Example';
import { ContentUp } from './slides/ContentUp/Example';
import { Example4_2 } from './slides/Example4/Example2';
import { Memoization } from './slides/Memoisation';
import { ReactRender } from './slides/Render';
import ContentUpIntro from './slides/ContentUp/ExampleIntro';

function App() {
    return (
        <Deck>
            <Intro />
            <Example1Intro />
            <section className="h-full">
                <Example1 />
            </section>
            <Example2Intro />
            <section className="h-full">
                <Example2 />
            </section>
            <Example3Intro />
            <section className="h-full">
                <Example3 />
            </section>
            <ReactRender />
            <Example4Intro />
            <section className="h-full">
                <Example4 />
            </section>
            <section className="h-full">
                <Example4_2 />
            </section>
            <Memoization />
            <StateDownIntro />
            <section className="h-full">
                <StateDown />
            </section>
            <ContentUpIntro />
            <section className="h-full">
                <ContentUp />
            </section>
            <section
                data-transition="slide-in fade-out"
                className="flex h-screen scale-105 items-center justify-center pl-20 pt-60"
            >
                <p className="text-6xl text-pink">"Push state down"</p>
                <p className=" text-4xl text-green">
                    Komponent C er no child av Komponent A, men er lokalisert inne i komponent B via
                    props.children (slot)
                </p>
                <p className=" text-4xl text-yellow">
                    Samme prinsipp som reglene for React server / client components
                </p>
                <div className="flex justify-center ">
                    <p className="mr-8 mt-20 h-20 w-4/5 text-wrap text-2xl text-peach">
                        Endre komponent strukturen sånn, eller lage nye komponenter for å isolere
                        state endringer til egen komponent, er beste måten å sikre seg mot at ting
                        rerender oftere enn ein vil
                    </p>
                </div>
            </section>
            <section
                data-transition="slide-in fade-out"
                className="flex h-screen scale-105 items-center justify-center pl-20 pt-60"
            >
                <p className="text-8xl font-semibold capitalize leading-loose text-rosewater antialiased">
                    Takk for meg
                </p>
            </section>
        </Deck>
    );
}

export default App;

// performance = arbeids mengde
// unødvendig arbeid / arbeid
// utvikler arbeid . kunnskap
// react render, god til det
//
// exempel 1 - basic rerender
// ender oppp på alltid rerender
//
// exempel 2 - rerender uten props
//
// exempel 3 -
//
// kvifor useCallback
// kvirfor useMemo
//  => memo
//  gode alernativ
//  push state down
//  lift content up
