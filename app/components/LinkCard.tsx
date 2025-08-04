"use client";

import { useState } from 'react';
import type { MouseEvent, CSSProperties } from 'react';

import { LinkData } from '@/data/links-data';
import styles from '@/styles/LinkCard.module.scss';
import Icon from './Icon';
import Atropos from 'atropos/react';
import 'atropos/css';

interface LinkCardProps {
    link: LinkData;
}

export default function LinkCard({ link }: LinkCardProps) {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        setMousePos({ x, y });
    };

    const cardDynamicStyles = {
        '--mouse-x': `${mousePos.x}px`,
        '--mouse-y': `${mousePos.y}px`,
        '--card-bg-color': link.color || '#E8DEF8',
    } as CSSProperties;

    return (
        <Atropos
            className={styles.atroposCard}
            shadowOffset={8}
            shadowScale={1}
            shadow={true}
            highlight={false}
            onMouseMove={handleMouseMove}
        >
            <div className={styles.cardContentWrapper} style={cardDynamicStyles}>
                <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.linkCard}
                >
                    <div className={styles.content}>
                        <Icon name={link.icon} className={styles.icon} data-atropos-offset="4"/>
                        <h3 className={styles.title} data-atropos-offset="5">{link.titleKey}</h3>
                        <p className={styles.description} data-atropos-offset="3">{link.descriptionKey}</p>
                    </div>
                </a>
            </div>
        </Atropos>
    );
}