import { Flex } from './Components/flex'
import { Grid } from './Components/Grind'

function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="bg-slate-900 text-white">
        <nav className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-4 px-4 py-4">
          <a className="text-lg font-bold" href="#inicio">Tailwind Project</a>
          <div className="flex flex-wrap gap-4 text-sm sm:gap-6 sm:text-base">
            <a className="hover:text-sky-300" href="#app">App</a>
            <a className="hover:text-sky-300" href="#flex">Flex</a>
            <a className="hover:text-sky-300" href="#grid">Grid</a>
          </div>
        </nav>
      </header>

      <main className="mx-auto max-w-5xl space-y-12 px-4 py-10 sm:px-6 sm:py-14">
        <section className="text-center" id="inicio">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-700">Diseño adaptable</p>
          <h1 className="text-3xl font-bold sm:text-4xl">Ejemplos con Tailwind CSS</h1>
          <p className="mx-auto mt-4 max-w-2xl text-slate-600">
            Explora los ejemplos de la aplicación, Flexbox y Grid. El diseño se adapta a móviles, tablets y escritorio.
          </p>
        </section>

        <section className="scroll-mt-6 space-y-4" id="app">
          <h2 className="text-2xl font-bold">App</h2>
          <div className="rounded-lg border border-slate-200 bg-white p-6 text-center shadow-sm">
            <p className="mb-4 text-slate-700">Este es un contenedor de ejemplo para la aplicación.</p>
            <button className="rounded bg-sky-700 px-4 py-2 text-white hover:bg-sky-900">
              Enviar
            </button>
          </div>
        </section>

        <section className="scroll-mt-6 space-y-4" id="flex">
          <h2 className="text-2xl font-bold">Flex</h2>
          <Flex />
        </section>

        <section className="scroll-mt-6 space-y-4" id="grid">
          <h2 className="text-2xl font-bold">Grid</h2>
          <p className="text-slate-600">Una columna en móvil, dos en tablet y tres en escritorio.</p>
          <Grid />
        </section>
      </main>
    </div>
  )
}

export default App