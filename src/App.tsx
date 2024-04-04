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
            <Example4Intro />
            <section className="h-full">
                <Example4 />
            </section>
            <StateDownIntro />
            <section className="h-full">
                <StateDown />
            </section>
            <StateDownIntro />
            <section className="h-full">
                <ContentUp />
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
