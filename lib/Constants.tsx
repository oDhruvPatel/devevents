export type EventItem = {
    title: string;
    image: string;
    slug?: string;
    location?: string;
    Date?: string;
    time?: string;
}


export const events: EventItem[] = [
    {image: '/images/event1.png', title: 'React Summit 2024', slug: 'react-summit-2024', location: 'Amsterdam, Netherlands', Date: '2024-09-15', time: '10:00 AM - 5:00 PM'},
    {image: '/images/event2.png', title: 'Next.js Summit 2024', slug: 'react-summit-2024', location: 'Amsterdam, Netherlands', Date: '2024-09-15', time: '10:00 AM - 5:00 PM'},
    {image: '/images/event3.png', title: 'NodeConf EU 2024', slug: 'nodeconf-eu-2024', location: 'Berlin, Germany', Date: '2024-10-20', time: '9:00 AM - 6:00 PM'},
    {image: '/images/event4.png', title: 'JSConf Asia 2024', slug: 'jsconf-asia-2024', location: 'Bangkok, Thailand', Date: '2024-11-05', time: '10:00 AM - 5:00 PM'},
    {image: '/images/event5.png', title: 'Full Stack Fest 2024', slug: 'full-stack-fest-2024', location: 'Barcelona, Spain', Date: '2024-12-10', time: '9:00 AM - 6:00 PM'},
    {image: '/images/event6.png', title: 'GraphQL Summit 2024', slug: 'graphql-summit-2024', location: 'San Francisco, USA', Date: '2025-01-15', time: '10:00 AM - 5:00 PM'},
]