import { roofingSources, serviceAnswers } from "@/lib/roofing-answers";
import section from "./page-sections.module.css";

export default function RoofingAnswer({ slug }: { slug: string }) {
  const content = serviceAnswers[slug];
  const source = roofingSources[content.source];
  return <section className={section.section} id="quick-answer" aria-labelledby="quick-answer-heading">
    <div className={section.article}>
      <h2 id="quick-answer-heading">{content.question}</h2>
      <p>{content.answer}</p>
      <p className={section.note}>{content.reference} <a href={source.url}>{source.name}</a>.</p>
    </div>
  </section>;
}
