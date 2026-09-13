type SectionHeadingProps = {
  kicker: string;
  title: string;
  intro?: string;
  inverted?: boolean;
};

export function SectionHeading({ kicker, title, intro, inverted = false }: SectionHeadingProps) {
  return (
    <div className={inverted ? "section-heading inverted" : "section-heading"}>
      <span className={inverted ? "section-kicker light" : "section-kicker"}>{kicker}</span>
      <div>
        <h2>{title}</h2>
        {intro ? <p>{intro}</p> : null}
      </div>
    </div>
  );
}
