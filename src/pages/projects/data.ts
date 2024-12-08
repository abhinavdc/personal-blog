import type { ProjectData } from '@/types'

export const projectData: ProjectData = [
  {
    title: '2021',
    projects: [
      {
        text: 'Cowin Pinger',
        description: 'Get notified on your phone when there is a vaccine slot available at your location, by running a script on your computer. Bundled into a neat npm library for ease of use.',
        icon: 'i-mdi-npm-variant-outline',
        href: 'https://www.npmjs.com/package/cowin-pinger',
      },
    ],
  },
  {
    title: '2020',
    projects: [
      {
        text: 'Find Me a Job',
        description: 'Aggregator of tech jobs from the leading tech parks in Kerala. Get email notifications for new job postings matching your search query.',
        icon: 'i-material-symbols-light:screen-search-desktop-rounded',
        href: 'http://github.com/abhinavdc/findmeajob/',
      },
      {
        text: 'Trivia',
        description: 'Test your trivia knowledge using the Trivia App. Built this to learn Clojure. Leverages the Open Trivia DB for trivia questions.',
        icon: 'i-ic:sharp-quiz',
        href: 'https://trivia-app-abd.netlify.app/',
      },
    ],
  },
]
