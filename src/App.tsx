import { useState } from 'react' 
import { Flex } from './Components/flex'
import { Grid } from './Components/Grind'

type Vista = "index" | "app" | "flex" | "grid"

function App() {
  const [vista, setVista] = useState<Vista>("index") 
  // corto para cambiar de vista sin repetir preventDefault()
  const irA = (nuevaVista: Vista) => (e: React.MouseEvent) => {
    e.preventDefault()
    setVista(nuevaVista)
  }

  return (
    <div className="min-h-screen scroll-smooth bg-slate-50 text-slate-900">
      <header className="bg-slate-900 text-white">
        <nav className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-4 px-4 py-4">
          <a className="text-lg font-bold" href="#index" onClick={irA("index")}>
            Tailwind Project
          </a>
          <div className="flex flex-wrap gap-4 text-sm sm:gap-6 sm:text-base">
            {/* Enlaces a Index, App, Flex y Grid con estado activo */}
            {(["index", "app", "flex", "grid"] as Vista[]).map((item) => (
              <a
                key={item}
                href={`#${item}`}
                onClick={irA(item)}
                className={`capitalize hover:text-sky-300 ${vista === item ? "font-semibold text-sky-400" : ""}`} >
                {item}
              </a>
            ))}
          </div>
        </nav>
      </header>

      <main className="mx-auto max-w-5xl space-y-12 px-4 py-10 sm:px-6 sm:py-14">
        <section className="text-center" id="index">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-700">
            Index - Diseño adaptable 
          </p>
          <h1 className="text-3xl font-bold sm:text-4xl">Ejemplos con Tailwind CSS</h1>
          <p className="mx-auto mt-4 max-w-2xl text-slate-600">
            Explora los ejemplos de la aplicación, Flexbox y Grid. El diseño se adapta a móviles, tablets y escritorio.
          </p>

          {/* Tarjetas con enlaces directos a App, Flex y Grid */}
          <div className="mt-8 grid grid-cols-1 gap-4 text-left sm:grid-cols-3">
            <a href="#app" onClick={irA("app")} className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm transition hover:border-sky-500">
              <h2 className="font-bold text-slate-900">Enlace a App →</h2>
              <p className="mt-1 text-sm text-slate-600">Ver contenedor base de aplicación.</p>
            </a>
            <a href="#flex" onClick={irA("flex")} className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm transition hover:border-sky-500">
              <h2 className="font-bold text-slate-900">Enlace a Flex →</h2>
              <p className="mt-1 text-sm text-slate-600">Ver distribución con Flexbox.</p>
            </a>
            <a href="#grid" onClick={irA("grid")} className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm transition hover:border-sky-500">
              <h2 className="font-bold text-slate-900">Enlace a Grid →</h2>
              <p className="mt-1 text-sm text-slate-600">Ver cuadrícula de 3 resoluciones.</p>
            </a>
          </div>
        </section>

        {/* Secciones condicionadas por `vista` con botón de regreso al Index */}
        {vista === "app" && (
          <section className="scroll-mt-6 space-y-4" id="app">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">App</h2>
              <button type="button" onClick={() => setVista("index")} className="cursor-pointer rounded bg-slate-200 px-3 py-1 text-sm font-medium text-slate-800 hover:bg-slate-300">
                ← Volver al Index
              </button>
            </div>
            <div className="rounded-lg border border-slate-200 bg-white p-6 text-center shadow-sm">
              <p className="mb-4 text-slate-700">Este es un contenedor de ejemplo para la aplicación.</p>
              <button className="rounded bg-sky-700 px-4 py-2 text-white hover:bg-sky-900">Enviar</button>
            </div>
          </section>
        )}

        {vista === "flex" && (
          <section className="scroll-mt-6 space-y-4" id="flex">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">Flex</h2>
              <button type="button" onClick={() => setVista("index")} className="cursor-pointer rounded bg-slate-200 px-3 py-1 text-sm font-medium text-slate-800 hover:bg-slate-300">
                ← Volver al Index
              </button>
            </div>
            <Flex />
          </section>
        )}

        {vista === "grid" && (
          <section className="scroll-mt-6 space-y-4" id="grid">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">Grid</h2>
              <button type="button" onClick={() => setVista("index")} className="cursor-pointer rounded bg-slate-200 px-3 py-1 text-sm font-medium text-slate-800 hover:bg-slate-300">
                ← Volver al Index
              </button>
            </div>
            <p className="text-slate-600">Una columna en móvil, dos en tablet y tres en escritorio.</p>
            <Grid />
          </section>
        )}
      </main>
    </div>
  )
}

export default App