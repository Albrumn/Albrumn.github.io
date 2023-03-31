import Article from "./Article";
import darkDuolingo from "../img/darkDuolingo.png";
import duoDiscord from "../img/duoDiscord.png";
import discordLogo from "../img/discord_logo.png";
import duolingoLogo from "../img/duolingo_logo.png";
import githubLogo from "../img/github_logo.png";
import languageLearnerLogo from "../img/languageLearner_logo.png";
import psittacusEbriusLogo from "../img/psittacusEbrius_logo2.png"
import webDevLogo from "../img/webDev_logo.png";
import youtubeLogo from "../img/youtube_logo.png";

export default function Main() {
    return(
        <main>
            <Article
                header="Browser Add-Ons"
                sections={[
                    {
                        header: "Dark Duolingo",
                        img: darkDuolingo,
                        body: "Darken Duolingo's UI to play without burning your retinas! This extension affects Duolingo's style only, not its functionality.",
                        link: "https://corydergrosse.github.io/add-ons/darkDuolingo/"
                    },
                    {
                        header: "Duolingo Discord Server",
                        img: duoDiscord,
                        body: "Upgrade the Duolingo Discord server's navigation sidebar to assist in quickly finding the channel you're looking for by adding language flags and other Duo-related icons.",
                        link: "https://corydergrosse.github.io/add-ons/duoDiscord"
                    }
                ]} />
                <Article
                    header="About Me"
                    sections={[
                        {
                            header: "Web Developer",
                            img: webDevLogo,
                            body: "In college, I studied game design/development with technologies like Unity, Unreal, and GameMaker.  Nowadays, I am a professional web developer, working on responsive, dynamic websites.  From time to time, I'll even work on a web-based game!",
                            link: ""
                        },
                        {
                            header: "Language Learner",
                            img: languageLearnerLogo,
                            body: "Aside from German, which I use to chat with relatives, learning foreign languages is one of my favorite hobbies.  I am currently working my way through \"Lingua Latina per se Illustrata: Pars I\" and taking a look at a few of the German books by Olly Richards every now and then.  I'm learning Japanese with Duolingo and practicing German with Lingo Legend.",
                            link: ""
                        }
                    ]} />
            <Article
                header="Projects"
                sections={[
                    {
                        header: "Psittacus Ebrius",
                        img: psittacusEbriusLogo,
                        body: "I am working on a Latin language learning site.",
                        link: "https://corydergrosse.github.io/psittacusebrius/blog"
                    },
                    {
                        header: "GitHub",
                        img: githubLogo,
                        body: "Nothing to write home about just yet, but feel free to check out my public repos.",
                        link: "https://github.com/CoryDerGrosse?tab=repositories"
                    }
                ]} />
                <Article
                    header="Find Me"
                    sections={[
                        {
                            header: "Duolingo",
                            img: duolingoLogo,
                            body: "Focusing on Japanese.  German and Latin complete!",
                            link: "https://www.duolingo.com/profile/CoryDerGrosse"
                        },
                        {
                            header: "YouTube",
                            img: youtubeLogo,
                            body: "Useful playlists for learning languages.",
                            link: "https://www.youtube.com/@corydergrosse/playlists"
                        },
                        {
                            header: "Discord",
                            img: discordLogo,
                            body: "Hit me up!",
                            link: "//discordapp.com/users/956888852197408798"
                        }
                    ]} />
        </main>
    );
}