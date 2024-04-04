import imgUrl from '../assets/Forside.png';

export function Intro() {
    return (
        <>
            <section className="flex h-full">
                <img src={imgUrl} />
            </section>
            <section className="flex h-full">
                <div className="flex h-full flex-col items-center justify-center">
                    <p className="m-20 h-max w-3/4 text-4xl font-extrabold leading-relaxed text-teal antialiased">
                        Kva er performance?
                    </p>
                    <p className="m-20 h-max w-3/4 text-4xl font-extrabold leading-relaxed text-yellow antialiased">
                        Arbeid / resurser / tid
                    </p>
                    <p className="m-20 h-max w-3/4 text-2xl font-extrabold leading-relaxed text-green antialiased">
                        Resurser er alltid begrenset, men mengden arbeid er det kun fantasien som
                        setter grenser for
                    </p>
                </div>
            </section>
            <section className="flex h-full">
                <div className="flex h-full flex-col items-center justify-center">
                    <p className="m-20 h-max w-3/4 text-4xl font-extrabold leading-relaxed text-peach antialiased">
                        React er relativt god til jobben sin, så performance er ofte ikkje eit
                        problem
                    </p>
                    <p className="m-20 h-max w-3/4 text-2xl font-extrabold leading-relaxed text-pink antialiased">
                        Til det er det.
                    </p>
                    <p className="m-20 h-max w-3/4 text-4xl font-extrabold leading-relaxed text-flamingo antialiased">
                        Frem til det er eit problem fungerer alt, og ein kan gjøre som ein vil.
                    </p>
                </div>
            </section>
            <section className="flex h-full">
                <div className="flex h-full flex-col items-center justify-center">
                    <p className="m-20 h-max w-3/4 text-4xl font-extrabold leading-relaxed text-mauve antialiased">
                        <span>Mange </span>
                        <span className="text-sm">frontend </span>
                        <span>
                            utviklerere er flinke til å følge normer, og ein gjør gjerne ting som
                            ein ikkje heilt veit grunnen til ein gjør
                        </span>
                    </p>
                    <p className="m-20 h-max w-3/4 text-2xl font-extrabold leading-relaxed text-rosewater antialiased">
                        Performance problem er også kan oppstå gradvis over tid
                    </p>
                    <p className="m-20 h-max w-3/4 text-4xl font-extrabold leading-relaxed text-white antialiased">
                        Kunnskap om korleis ting fungerer og grunnen til å gjere/ikkje gjere noko er
                        performance!
                    </p>
                </div>
            </section>
        </>
    );
}

//slide snakke om react performance, kva er performance
//performance er vigitg / ikkje viktig
// forhåndsoptimalisering dårlig, ihvertfall om ein ikkje veit kva ein driver med
// vere bevist på arbeidet koden ein genererer, vite kva som skjer om ein skriver forskjellige ting.
// kjenne språket og rammeverket, det gir performance for både program og utvikler.
//
//
//react rendrer, vil vise kode, men ikkje detaljer, react docs vedlig gode
//memoisering, kanskje endrer seg med compiler (v19) men slik er verden no, og legacy vil finnes
//ekmpler, vil gi meining etterkvert
