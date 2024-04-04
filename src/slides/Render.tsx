import imgUrl from '../assets/treestructure.png';

export function ReactRender() {
    return (
        <>
            <section className="flex h-full">
                <div className="flex h-full flex-col items-center justify-center">
                    <p className="m-20 h-max w-3/4 text-6xl font-extrabold leading-relaxed text-teal antialiased">
                        Rendering i react
                    </p>
                    <p className="m-20 h-max w-3/4 text-4xl font-extrabold leading-relaxed text-yellow antialiased">
                        Ting rendres --- ting endrer seg ---- ting re-rendres
                    </p>
                    <img className="rounded-3xl bg-rosewater" src={imgUrl} />
                    <p className="m-20 h-max w-3/4 text-4xl font-extrabold leading-relaxed text-red antialiased">
                        I dei fleste tilfeller er det heilt ok
                    </p>
                </div>
            </section>
        </>
    );
}
