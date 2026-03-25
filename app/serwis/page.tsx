export default function SerwisPage() {
  return (
    <div className="flex flex-col gap-8">
      <div className="text-silver dark:text-silverLight uppercase text-sm font-medium tracking-wide">
        <span>03. 24h/dobę, 7 dni w tygodniu</span>
      </div>
      <h1 className="dark:text-white text-black uppercase text-4xl font-semibold">
        <span>
          Zapewniamy kompleksową obsługę w zakresie dostawy elementów
          niezbędnych do utrzymania ruchu produkcyjnego z obszaru
          elektroenergetyki, automatyki przemysłowej i pneumatyki
        </span>
      </h1>
      <div className="text-base md:text-2xl xl:text-3xl dark:text-silverLight text-silver">
        <p>
          Naszą ofertę produktową indywidualnie dopasowujemy do potrzeb
          konkretnych Klientów dostarczając materiały stosowane w danym
          zakładzie lub odpowiednie ich zamienniki, sprowadzając również
          materiały z zagranicy.
        </p>
      </div>
      <hr className="h-0.5 w-12 my-8 bg-white border-0 dark:bg-silverLight" />
    </div>
  );
}
