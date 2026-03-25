export default async function HomePage() {
  return (
    <div className="gap-8 ">
      <div className="text-silver dark:text-silverLight uppercase text-sm font-medium tracking-wide">
        <span>01. Na czas, na miejsce, napewno</span>
      </div>
      <h1 className="dark:text-white text-black uppercase text-4xl xl:text-5xl font-semibold">
        <span>Kompetentny Partner w automatyce i robotyce</span>
      </h1>
      <div className="text-base md:text-2xl xl:text-3xl dark:text-silverLight text-silver">
        <p>
          Jesteśmy firmą inżynierską z kilkunastoletnim doświadczeniem w branży
          automatyki i robotyki przemysłowej.
        </p>
        <p>
          Zajmujemy się kompleksową obsługą firm produkcyjnych i instalacyjnych
          w zakresie projektowania, produkcji oraz dostaw akcesoriów
          elektrotechnicznych.
        </p>
      </div>

      <hr className="h-0.5 w-12 my-8 bg-white border-0 dark:bg-silverLight" />
      <ul className="flex flex-row justify-center md:place-content-start gap-16 text-xs uppercase font-bold dark:text-white">
        <li></li>
        <li>
          <a href="mailto:biuro@profiserwis.com.pl" className="hover:underline">
            Kontakt
          </a>
        </li>
      </ul>
    </div>
  );
}
