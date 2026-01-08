import { ReactNode } from 'react';
import { SectionFlower } from './icons';
import { cn } from '@/lib/utils';

interface Props {
    icon?: ReactNode;
    className?: string;
    classNames?: {
        container?: string;
        title?: string;
        icon?: string;
    };
    title: string;
}

const SectionTitle = ({ icon, title, className, classNames }: Props) => {
    return (
        <div
            className={cn(
                'flex items-center gap-4 mb-10',
                className,
                classNames?.container,
            )}
        >
            {icon ? (
                icon
            ) : (
                <div className="relative size-6 flex items-center justify-center">
                    <div className="absolute inset-0 bg-primary/20 blur-md rounded-full animate-pulse-glow"></div>
                    <div className="size-4 bg-primary rotate-45 animate-spin duration-7000 z-[1] shadow-[0_0_10px_rgba(33,131,237,0.5)]"></div>
                    <div className="absolute size-2 bg-white rotate-45 animate-spin duration-7000 z-[2]"></div>
                </div>
            )}
            <h2
                className={cn(
                    'text-xl uppercase leading-none tracking-[0.2em] font-medium neon-text',
                    classNames?.title,
                )}
            >
                {title}
            </h2>
        </div>
    );
};

export default SectionTitle;
