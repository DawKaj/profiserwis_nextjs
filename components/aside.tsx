import Navbar from "./navbar";

export default function AsidePanel() {
  return (
    <header className="hidden md:flex flex-col justify-between inset-y-0 left-0 zIndex-500 w-64 bg-white dark:bg-silver border border-solid border-borderColorLight">
      <div className="flex-25 p-6 border-b border-solid border-borderColorLight"></div>
      <div className="flex flex-col flex-50 justify-center leading-8  p-6 border-b border-solid border-borderColorLight">
        <Navbar />
      </div>
      <div className="flex flex-col flex-25 justify-end gap-3 text-xs dark:text-silverLight text-silver  p-6">
        <p>Jesteś zainteresowany współpracą lub masz jakieś pytania? Napisz:</p>
        <a href="mailto:biuro@profiserwis.com.pl"> biuro@profiserwis.com.pl</a>
        <hr />
        <p style={{ textAlign: "center" }}>D--K</p>
      </div>
    </header>
  );
}
