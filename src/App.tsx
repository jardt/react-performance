import { Deck } from './Deck';
import { Example1 } from './slides/Example1';
import Example1Intro from './slides/Example1Intro';
import { ExampleMemo } from './slides/ExampleMemo';
import { Intro } from './slides/Intro';
import { Test } from './slides/Test';

function App() {
    return (
        <Deck>
            <Intro />
            <Example1Intro />
            <section className="h-full">
                <Example1></Example1>
            </section>
            <section className="h-full">
                <ExampleMemo />
            </section>
        </Deck>
    );
}

const Fragments = () => {
    return (
        <section>
            <p className="fragment">Fade in</p>
            <p className="fragment fade-out">Fade out</p>
            <p className="fragment highlight-red">Highlight red</p>
            <p className="fragment fade-in-then-out">Fade in, then out</p>
            <p className="fragment fade-up">Slide up while fading in</p>test
        </section>
    );
};

export default App;

// performance = arbeid
// react render, god til det
// exempel 1
// eksempeler div
// ender oppp på alltid rerender
// kvifor useCallback
// kvirfor useMemo
//  => memo
//  gode alernativ
//  push state down
//  lift content up
