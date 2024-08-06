import SectionHero from "./components/home/section-hero";
import SectionWhatIsLandtech from "./components/home/section-what-is-landtech";
import SectionTrustedBy from "./components/home/section-trusted-by";
import SectionInfo from "./components/home/section-info";
import SectionForm from "./components/home/section-form";

export default function Home() {
  return (
<div className="custom-bg-home bg-cover bg-center">
<SectionHero/>
<div className="px-[10vw]">
<SectionTrustedBy />
<SectionWhatIsLandtech />
<SectionInfo />
<SectionForm />
</div>
</div>
  );
}
