export default function Section(props: any) {
    return (
        <section className={props.link === "" ? "" : "link"} onClick={() => {if (props.link === "") return; window.open(props.link, "_blank")}}>
            <img src={props.img} />
            <div className="subsection">
                <p className="subsection-header">{props.header}</p>
                <p className="subsection-body">{props.body}</p>
            </div>
        </section>
    );
}