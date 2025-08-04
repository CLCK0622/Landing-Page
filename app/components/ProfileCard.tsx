import Image from 'next/image';
import styles from '@/styles/ProfileCard.module.scss';
import { ProfileData } from '@/data/links-data';

interface ProfileCardProps {
    data: ProfileData;
}

export default function ProfileCard({ data }: ProfileCardProps) {
    return (
        <div className={styles.profileCard}>
            <Image
                src={data.avatar}
                alt={data.name}
                width={96}
                height={96}
                className={styles.avatar}
                priority
            />
            <h1 className={styles.name}>{data.name}</h1>
            <p className={styles.bio}>{data.bio}</p>
        </div>
    );
}