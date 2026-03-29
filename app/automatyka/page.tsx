"use client";

export default function AutomatykaPage() {
  return (
    <div className=" max-w-300 gap-8 text-center md:text-left">
      <h1 className="grid  mb-8">
        <span className="text-white dark:text-g-400 text-base uppercase mb-8 tracking-1">
          Od koncepcji do realizacji
        </span>
        <span className="text-g-300 dark:text-white text-[41px] font-medium leading-[1.2] ">
          Inwestycje w nowe systemy automatyki przemysłowej powinny
          wykorzystywać najnowocześniejsze technologie oraz zapewniać szybki
          zwrot zaangażowanych środków i łatwość obsługi przez pracowników.
        </span>
      </h1>
      <p className="text-g-400 text-2xl tracking-wide">
        Jesteśmy po to by pomóc dobrać optymalne rozwiązanie do potrzeb i
        wymagań każdego klienta
        <br />
        Nasza specjalistyczna wiedza oraz doświadczenie pomaga w całym cyklu
        życia projektu. Zawsze proponujemy kompleksowe podejście do procesu
        automatyzacji.
      </p>

      <ul className="lg:flex md:flex-row md:gap-16 text-sm mt-12">
        <li className="pb-8 md:p-2 //md:border md:basis-1/2 lg:basis-1/3 ">
          <h2 className="text-lg text-black py-2 dark:text-white uppercase">
            Profesjonalizm
          </h2>
          <hr className="dark:text-white" />
          <p className="pt-2 dark:text-silverLight">
            Projektujemy profesjonalne i przyjazne użytkownikowi systemy
            sterowania automatycznego w oparciu o najnowsze rozwiązania uznanych
            producentów
          </p>
        </li>
        <li className="pb-8 md:p-2 //md:border md:basis-1/2 lg:basis-1/3 ">
          <h2 className="text-lg text-black py-2 dark:text-white uppercase">
            Elastyczność
          </h2>
          <hr className="dark:text-white" />
          <p className="pt-2 dark:text-silverLight">
            Jesteśmy elastyczni. Każdy projekt dostosowujemy do indywidualnych
            potrzeb klienta
          </p>
        </li>
        <li className="pb-8 md:p-2 //md:border md:basis-1/2 lg:basis-1/3 ">
          <h2 className="text-lg py-2 text-black dark:text-white uppercase">
            Jakość
          </h2>
          <hr className="dark:text-white" />
          <p className="pt-2 dark:text-silverLight">
            W automatyce przemysłowej nie ma miejsca na kompromisy dotyczące
            jakości oraz bezpieczeństwa, dlatego wszystkie projekty spełniają
            wymagania odpowiednich norm oraz przepisów.
          </p>
        </li>
      </ul>
    </div>
  );
}
