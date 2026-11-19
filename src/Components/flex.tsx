export function Flex() {
    return (
        <div className="flex flex-col items-center justify-between gap-4 rounded-lg bg-amber-100 p-6 text-center md:flex-row md:text-left">
            <div>
                <h2 className="mb-2 text-2xl font-bold">Ejemplo con Flexbox</h2>
                <p className="text-emerald-800">
                    Este contenido se apila en pantallas pequeñas y se organiza en fila en pantallas medianas.
                </p>
            </div>
            <button className="shrink-0 rounded bg-blue-700 px-4 py-2 text-white hover:bg-blue-800">
                ¡Haz clic!
            </button>
        </div>
    );
}