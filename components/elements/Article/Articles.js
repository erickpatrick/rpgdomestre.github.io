import ArticleSection from "@/components/elements/Article/Section";

export default function Articles({ data, page, perPage }) {
  const beginsAt = (page - 1) * perPage;
  const endsBefore = page * perPage;
  const chunk = data.slice(beginsAt, endsBefore);

  return chunk.map((article) => {
    return (
      <ArticleSection
        title={article.title}
        href={article.link}
        key={article.link}
      >
        {article.description}
      </ArticleSection>
    );
  });
}
