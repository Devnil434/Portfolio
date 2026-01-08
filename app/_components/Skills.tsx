'use client';
import SectionTitle from '@/components/SectionTitle';
import { MY_STACK } from '@/lib/data';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import Image from 'next/image';
import React, { useRef } from 'react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const Skills = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            const slideUpEl =
                containerRef.current?.querySelectorAll('.slide-up');

            if (!slideUpEl?.length) return;

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 80%',
                    end: 'bottom 80%',
                    scrub: 0.5,
                },
            });

            tl.from('.slide-up', {
                opacity: 0,
                y: 40,
                ease: 'none',
                stagger: 0.4,
            });
        },
        { scope: containerRef },
    );

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'bottom 50%',
                    end: 'bottom 10%',
                    scrub: 1,
                },
            });

            tl.to(containerRef.current, {
                y: -150,
                opacity: 0,
            });
        },
        { scope: containerRef },
    );

    return (
        <section id="my-stack" ref={containerRef} className="py-section">
            <div className="container">
                <SectionTitle title="My Stack" />

                <div className="space-y-20">
                    {Object.entries(MY_STACK).map(([key, value]) => (
                        <div className="grid lg:grid-cols-12 items-start gap-10" key={key}>
                            <div className="lg:col-span-3">
                                <p className="slide-up text-4xl font-anton leading-tight text-muted-foreground uppercase group-hover:text-primary transition-colors cursor-default whitespace-nowrap">
                                    {key.replace('_', ' ')}
                                </p>
                            </div>

                            <div className="lg:col-span-9 flex gap-x-6 gap-y-6 flex-wrap">
                                {value.map((item) => (
                                    <div
                                        className="slide-up flex gap-4 items-center leading-none py-3 px-5 rounded-2xl mac-border bg-white/[0.03] hover:bg-primary/[0.05] transition-all hover:scale-105 glass group"
                                        key={item.name}
                                    >
                                        <div className="size-8 flex items-center justify-center grayscale group-hover:grayscale-0 transition-all duration-500">
                                            <Image
                                                src={item.icon}
                                                alt={item.name}
                                                width="32"
                                                height="32"
                                                className="w-full h-full object-contain"
                                            />
                                        </div>
                                        <span className="text-lg font-medium opacity-70 group-hover:opacity-100 transition-opacity">
                                            {item.name}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
