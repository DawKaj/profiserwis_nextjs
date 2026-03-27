export default async function HomePage() {
  return (
    <div className="w-full gap-8">
      <h1 className="grid  mb-8">
        <span className="text-white dark:text-g-400 text-base uppercase mb-8 tracking-1">
          Na czas, na miejsce, napewno
        </span>
        <span className="text-g-300 dark:text-white text-[41px] font-medium leading-[1.2] ">
          Kompetentny Partner w automatyce i robotyce
        </span>
      </h1>
      <p className="text-gray-400 text-2xl tracking-wide">
        Jesteśmy firmą inżynierską z kilkunastoletnim doświadczeniem w branży
        automatyki i robotyki przemysłowej.
        <br />
        Zajmujemy się kompleksową obsługą firm produkcyjnych i instalacyjnych w
        zakresie projektowania, produkcji oraz dostaw akcesoriów
        elektrotechnicznych.
      </p>
    </div>
  );
}
