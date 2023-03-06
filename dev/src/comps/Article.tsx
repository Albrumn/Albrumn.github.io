import Section from "./Section";

export default function Article(props: any) {
    const sections = props.sections.map((s: any, i: number) => {
        return (
            <Section key={i} img={s.img} header={s.header} body={s.body} link={s.link} />
        );
    });
    return (
        <article>
            <h2>{props.header}</h2>
            <div className="hr"></div>
            <div className="section-container">
                {sections}
            </div>
        </article>
    );
}