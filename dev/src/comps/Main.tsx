import Article from "./Article";
import darkDuolingoChrome from "../img/darkDuolingo_chrome.png";
import darkDuolingoFirefox from "../img/darkDuolingo_firefox.png";
import discordLogo from "../img/discord_logo.png";
import duolingoLogo from "../img/duolingo_logo.png";
import githubLogo from "../img/github_logo.png";
import youtubeLogo from "../img/youtube_logo.png";

export default function Main() {
    return(
        <main>
            <Article
                header="Duolingo Add-Ons"
                sections={[
                    {
                        header: "Dark Duolingo for Chrome",
                        img: darkDuolingoChrome,
                        body: "Darken Duolingo's UI to play without burning your retinas! This extension affects Duolingo's style only, not its functionality.",
                        link: "https://chrome.google.com/webstore/detail/dark-duolingo/oecpphmlhglapklhnfoeffckahfmjhdl"
                    },
                    {
                        header: "Dark Duolingo for Firefox",
                        img: darkDuolingoFirefox,
                        body: "Darken Duolingo's UI to play without burning your retinas! This extension affects Duolingo's style only, not its functionality.",
                        link: "https://addons.mozilla.org/en-US/firefox/addon/dark-duolingo/"
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
                        body: "Cory der Große#2724",
                        link: ""
                    }
                ]} />
            <Article
                header="Projects"
                sections={[
                    {
                        header: "GitHub",
                        img: githubLogo,
                        body: "Nothing to write home about just yet, but feel free to check out my public repos.",
                        link: "https://github.com/CoryDerGrosse?tab=repositories"
                    }
                ]} />
        </main>
    );
}