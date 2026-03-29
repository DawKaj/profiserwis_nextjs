export default function PrefabrykacjaPage() {
  return (
    <div className=" max-w-300 gap-8 text-center md:text-left">
      <h1 className="grid  mb-8">
        <span className="text-white dark:text-g-400 text-base uppercase mb-8 tracking-1">
          Jakość, na której możesz polegać
        </span>
        <span className="text-g-300 dark:text-white text-[41px] font-medium leading-[1.2] ">
          Prefabrykacja rozdzielnic to kluczowy etap realizacji nowoczesnych
          systemów automatyki przemysłowej. W naszej firmie łączymy
          doświadczenie, precyzję oraz najnowsze technologie, aby dostarczać
          rozwiązania idealnie dopasowane do potrzeb klientów z różnych branż
          przemysłu.
        </span>
      </h1>
      <div className="text-base md:text-2xl xl:text-3xl dark:text-silverLight text-silver">
        <ul className="lg:flex md:flex-row md:gap-16 text-sm mt-12">
          <li className="pb-8 md:p-2 md:basis-1/2 ">
            <h2 className="text-lg text-black py-2 dark:text-white uppercase">
              Kompleksowe podejście
            </h2>
            <hr className="dark:text-white" />
            <p className="pt-2 dark:text-silverLight">
              Zapewniamy pełną obsługę procesu prefabrykacji – od analizy
              dokumentacji technicznej, przez projektowanie, aż po montaż i
              testy końcowe. Każda rozdzielnica powstaje zgodnie z
              obowiązującymi normami oraz indywidualnymi wymaganiami inwestora.
            </p>
          </li>
          <li className="pb-8 md:p-2 md:basis-1/2 ">
            <h2 className="text-lg text-black py-2 dark:text-white uppercase">
              Najwyższa jakość wykonania
            </h2>
            <hr className="dark:text-white" />
            <p className="pt-2 dark:text-silverLight">
              Stawiamy na sprawdzone komponenty renomowanych producentów oraz
              rygorystyczną kontrolę jakości na każdym etapie produkcji. Dzięki
              temu nasze rozdzielnice cechują się niezawodnością,
              bezpieczeństwem i długą żywotnością, nawet w wymagających
              warunkach przemysłowych.
            </p>
          </li>
        </ul>
        <ul className="lg:flex md:flex-row md:gap-16 text-sm mt-12">
          <li className="pb-8 md:p-2 md:basis-1/2 ">
            <h2 className="text-lg text-black py-2 dark:text-white uppercase">
              Elastyczność i dopasowanie
            </h2>
            <hr className="dark:text-white" />
            <p className="pt-2 dark:text-silverLight">
              Realizujemy zarówno standardowe projekty, jak i zaawansowane,
              niestandardowe rozwiązania. Niezależnie od skali inwestycji,
              dostosowujemy się do specyfiki procesu technologicznego oraz
              oczekiwań klienta.
            </p>
          </li>
          <li className="pb-8 md:p-2 md:basis-1/2 ">
            <h2 className="text-lg text-black py-2 dark:text-white uppercase">
              Testy i uruchomienie
            </h2>
            <hr className="dark:text-white" />
            <p className="pt-2 dark:text-silverLight">
              Każda prefabrykowana rozdzielnica przechodzi szczegółowe testy
              funkcjonalne i jakościowe. Na życzenie klienta oferujemy również
              wsparcie przy uruchomieniu oraz integracji z istniejącymi
              systemami automatyki.
            </p>
          </li>
        </ul>

        <h1>Dlaczego my?</h1>
        <ul>
          <li>wieloletnie doświadczenie w branży automatyki przemysłowej</li>
          <li>indywidualne podejście do każdego projektu</li>
          <li>terminowość realizacji</li>
          <li>wsparcie techniczne na każdym etapie współpracy</li>
        </ul>
        <p>
          Postaw na sprawdzone rozwiązania i partnera, który rozumie potrzeby
          nowoczesnego przemysłu. Skontaktuj się z nami i dowiedz się, jak
          możemy wesprzeć Twój projekt.
        </p>
      </div>
      <hr className="h-0.5 w-12 my-8 bg-white border-0 dark:bg-silverLight" />
    </div>
  );
}
