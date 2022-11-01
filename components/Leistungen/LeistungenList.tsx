import SectionContainer from "components/SectionContainer";
import LeistungenCard from "./LeistungenCard";

const Leistungen = (leistungen) => {
  return (
    <SectionContainer className="pt-48 md:pt-80">
      <div className="pt-28" id="leistungen">
        <h3 className=" text-2xl font-semibold text-white">Leistungen</h3>
        <div className="grid grid-cols-1 gap-8 pt-12 md:grid-cols-2 xl:grid-cols-3 ">
          {leistungen.leistungen.map((leistung) => (
            <LeistungenCard key={leistung.slug} leistung={leistung} />
          ))}
        </div>
      </div>
    </SectionContainer>
  );
};

export default Leistungen;
