import {
    FaFeatherAlt, FaGithub, FaEnvelope, FaInstagram, FaLinkedinIn, FaMastodon
} from 'react-icons/fa';
import { IconType } from 'react-icons';
import {RiCameraLensAiLine} from "react-icons/ri";
import {FaXTwitter, FaSnapchat} from "react-icons/fa6";

const iconMap: { [key: string]: IconType } = {
    feather: FaFeatherAlt,
    github: FaGithub,
    twitter: FaXTwitter,
    lens: RiCameraLensAiLine,
    email: FaEnvelope,
    default: FaFeatherAlt,
    ins: FaInstagram,
    linkedin: FaLinkedinIn,
    mastodon: FaMastodon,
    snapchat: FaSnapchat,
};

interface IconProps {
    name: string;
    className?: string;
}

export default function Icon({ name, className }: IconProps) {
    const IconComponent = iconMap[name] || iconMap['default'];
    return <IconComponent className={className} />;
}