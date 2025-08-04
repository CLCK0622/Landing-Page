
export interface ProfileData {
    avatar: string;
    name: string;
    bio: string;
}

export interface LinkData {
    id: number;
    url: string;
    icon: string;
    color?: string;
    titleKey: string;
    descriptionKey: string;
}

export const profileData: ProfileData = {
    avatar: '/avatar.jpg',
    name: '@clckkkkk',
    bio: 'bio',
};

export const linksData: LinkData[] = [
    {
        id: 1,
        titleKey: 'link_blog_title',
        descriptionKey: 'link_blog_desc',
        url: 'https://blog.example.com',
        icon: 'feather',
        color: '#FFDDC4'
    },
    {
        id: 2,
        titleKey: 'link_github_title',
        descriptionKey: 'link_github_desc',
        url: 'https://github.com/yourusername',
        icon: 'github',
        color: '#E7E0E4'
    },
    {
        id: 3,
        titleKey: 'link_twitter_title',
        descriptionKey: 'link_twitter_desc',
        url: 'https://twitter.com/yourusername',
        icon: 'twitter',
        color: '#C4EEF9'
    },
    {
        id: 4,
        titleKey: 'link_unsplash_title',
        descriptionKey: 'link_unsplash_desc',
        url: 'https://unsplash.com/@clck0622',
        icon: 'lens',
        color: '#F8D7DA'
    },
    {
        id: 5,
        titleKey: 'link_instagram_title',
        descriptionKey: 'link_instagram_desc',
        url: 'https://www.instagram.com/clck0622/',
        icon: 'ins',
        color: '#D2E7C4'
    },
    {
        id: 6,
        titleKey: 'link_linkedin_title',
        descriptionKey: 'link_linkedin_desc',
        url: 'https://www.linkedin.com/in/clckkkkk/',
        icon: 'linkedin',
        color: '#BFC6FF'
    },
    {
        id: 7,
        titleKey: 'link_mastodon_title',
        descriptionKey: 'link_mastodon_desc',
        url: 'https://mastodon.social/@CLCKKKKK',
        icon: 'mastodon',
        color: '#FDE2FF'
    },
    {
        id: 8,
        titleKey: 'link_snapchat_title',
        descriptionKey: 'link_snapchat_desc',
        url: 'https://www.snapchat.com/@clck0622',
        icon: 'snapchat',
        color: '#FEF0C3'
    },
];

export const designColors = [
    '#FFDDC4', '#D3E3FD', '#C4EEF9', '#F8D7DA',
    '#D4C4F9', '#C4F9E9',
    '#D2E7C4',
    '#FEF0C3',
    '#FFDBCB',
    '#FDD9D9',
    '#BFC6FF',
    '#A2E9E1',
    '#E7E0E4',
    '#FDE2FF',
];