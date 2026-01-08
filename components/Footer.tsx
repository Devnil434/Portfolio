import { GENERAL_INFO, SOCIAL_LINKS } from '@/lib/data';
import { GitFork, Github, Linkedin, Star, Twitter } from 'lucide-react';

interface RepoStats {
    stargazers_count: number;
    forks_count: number;
}

const Footer = async () => {
    const repoStats = await fetch(
        'https://api.github.com/repos/Devnil434/portfolio-2.0',
        {
            next: {
                revalidate: 60 * 60, // 1 hour
            },
        },
    );

    const { stargazers_count, forks_count } =
        (await repoStats.json()) as RepoStats;

    return (
        <footer className="text-center pb-5" id="contact">
            <div className="container">
                <p className="text-lg">Have a project in mind?</p>
                <a
                    href={`mailto:${GENERAL_INFO.email}`}
                    className="text-3xl sm:text-4xl font-anton inline-block mt-5 mb-10 hover:underline"
                >
                    {GENERAL_INFO.email}
                </a>

                <div className="flex justify-center gap-6 mb-10">
                    {SOCIAL_LINKS.map((link) => {
                        const Icon =
                            link.name === 'github'
                                ? Github
                                : link.name === 'linkedin'
                                ? Linkedin
                                : Twitter;
                        return (
                            <a
                                key={link.name}
                                href={link.url}
                                target="_blank"
                                rel="noreferrer"
                                className="text-muted-foreground hover:text-foreground transition-colors"
                            >
                                <Icon size={24} />
                            </a>
                        );
                    })}
                </div>

                <div className="">
                    <p className="leading-none text-muted-foreground">
                        Design & built by Nilanjan Saha
                    </p>
                    <div className="flex items-center justify-center gap-5 pt-1 text-muted-foreground">
                        <span className="flex items-center gap-2">
                            <Star size={18} /> {stargazers_count}
                        </span>
                        <span className="flex items-center gap-2">
                            <GitFork size={18} /> {forks_count}
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
