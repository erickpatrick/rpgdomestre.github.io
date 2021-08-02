import WeeklySection from "@/components/elements/Weekly/Section";

export default function Weeklies({ data, page, perPage }) {
  const beginsAt = (page - 1) * perPage;
  const endsBefore = page * perPage;
  const chunk = data.slice(beginsAt, endsBefore);

  return chunk.map((weekly) => {
    return (
      <WeeklySection title={weekly.title} href={weekly.link} key={weekly.link}>
        {weekly.description}
      </WeeklySection>
    );
  });
}
