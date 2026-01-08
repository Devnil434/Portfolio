'use client';
import ArrowAnimation from '@/components/ArrowAnimation';
import Button from '@/components/Button';
import { GENERAL_INFO } from '@/lib/data';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import React from 'react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const Banner = () => {
    const containerRef = React.useRef<HTMLDivElement>(null);

    // move the content a little up on scroll
    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'bottom 70%',
                    end: 'bottom 10%',
                    scrub: 1,
                },
            });

            tl.fromTo(
                '.slide-up-and-fade',
                { y: 0 },
                { y: -150, opacity: 0, stagger: 0.02 },
            );
        },
        { scope: containerRef },
    );

    return (
        <section className="relative overflow-hidden" id="banner">
            <ArrowAnimation />
            <div
                className="container h-[100svh] min-h-[530px] max-md:pb-10 flex justify-between items-center max-md:flex-col relative z-[1]"
                ref={containerRef}
            >
                <div className="max-md:grow max-md:flex flex-col justify-center items-start max-w-[544px] relative group">
                    <div className="flex gap-1.5 mb-8 slide-up-and-fade opacity-80 backdrop-blur-md p-2 rounded-full border border-white/10 bg-white/5">
                        <div className="size-3 rounded-full bg-[#FF5F56] shadow-[0_0_8px_#FF5F56]"></div>
                        <div className="size-3 rounded-full bg-[#FFBD2E] shadow-[0_0_8px_#FFBD2E]"></div>
                        <div className="size-3 rounded-full bg-[#27C93F] shadow-[0_0_8px_#27C93F]"></div>
                    </div>
                    <h1 className="banner-title slide-up-and-fade leading-[.95] text-6xl sm:text-[80px] font-anton animate-float">
                        <span className="text-primary italic neon-text outline-primary">SOFTWARE</span>
                        <br /> <span className="ml-4 tracking-[0.1em]">DEVELOPER</span>
                    </h1>
                    <p className="banner-description slide-up-and-fade mt-6 text-lg text-muted-foreground/80 leading-relaxed">
                        Hi! I&apos;m{' '}
                        <span className="font-medium text-foreground underline decoration-primary/30 decoration-2 underline-offset-4">
                            Nilanjan
                        </span>
                        . A results-driven <span className="text-foreground">Software Developer</span> with
                        strong skills in building <span className="text-primary">high-performance</span> applications, 
                        DevOps engineering, and AI/ML technologies.
                    </p>
                    <div className="flex flex-wrap gap-4 mt-9">
                        <Button
                            as="link"
                            target="_blank"
                            rel="noopener noreferrer"
                            href={GENERAL_INFO.upworkProfile || `mailto:${GENERAL_INFO.email}`}
                            variant="primary"
                            className="banner-button slide-up-and-fade glow-primary hover:scale-105 transition-transform"
                        >
                            Hire Me
                        </Button>
                        <Button
                            as="link"
                            target="_blank"
                            rel="noopener noreferrer"
                            href={GENERAL_INFO.resume}
                            variant="primary"
                            className="banner-button slide-up-and-fade opacity-80 backdrop-blur-md glass mac-border hover:opacity-100 hover:scale-105 transition-all"
                        >
                            Resume
                        </Button>
                    </div>
                </div>

                <div className="md:absolute bottom-[10%] right-[4%] flex md:flex-col gap-4 md:gap-8 text-center md:text-right">
                    <div className="slide-up-and-fade">
                        <h5 className="text-3xl sm:text-4xl font-anton text-primary mb-1.5">
                            2
                        </h5>
                        <p className="text-muted-foreground">
                            Projects Completed
                        </p>
                    </div>
                    <div className="slide-up-and-fade">
                        <h5 className="text-3xl sm:text-4xl font-anton text-primary mb-1.5">
                            9+
                        </h5>
                        <p className="text-muted-foreground">
                            Hackathons Participated
                        </p>
                    </div>
                    <div className="slide-up-and-fade">
                        <h5 className="text-3xl sm:text-4xl font-anton text-primary mb-1.5">
                            4+
                        </h5>
                        <p className="text-muted-foreground">Certifications</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;
