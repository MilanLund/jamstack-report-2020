window.questions = [{
        id: 1,
        type: 'single',
        selectText: 'Are you familiar with this definition of the Jamstack?',
        text: 'Are you familiar with this definition of the Jamstack?',
        description: 'Jamstack is a modern web development architecture based on pre-generated HTML markup where dynamic and interactive functionalities are handled by JavaScript, and server-side operations are abstracted into reusable APIs. "JAM" == "JavaScript, APIs, Markup"',
        answers: [{
            id: 1,
            text: 'Definitely yes',
            color: 'dark-orange'
        }, {
            id: 2,
            text: 'Rather yes',
            color: 'light-orange'
        }, {
            id: 3,
            text: 'Neither yes nor no',
            color: 'yellow'
        }, {
            id: 4,
            text: 'Rather no',
            color: 'light-grey'
        }, {
            id: 5,
            text: 'Definitely no',
            color: 'dark-grey'
        }]
    }, {
        id: 2,
        type: 'single',
        selectText: 'How long have you been working with the Jamstack?',
        text: 'How long have you been working with the Jamstack?',
        answers: [{
            id: 1,
            text: 'Never',
            color: 'grey-1'
        }, {
            id: 2,
            text: 'Less than a year',
            color: 'orange-4'
        }, {
            id: 3,
            text: '1 year',
            color: 'orange-3'
        }, {
            id: 4,
            text: '2 years',
            color: 'orange-2'
        }, {
            id: 5,
            text: '3+ years',
            color: 'orange-1'
        }]
    }, {
        id: 3,
        type: 'order',
        selectText: 'What are the reasons for choosing the Jamstack to build an app with?',
        text: 'What are the reasons for choosing the Jamstack to build an app with?',
        description: 'From the most likely reason at the top to the least likely reason at the bottom of the list.',
        answers: [{
            id: 1,
            text: 'Security',
            csvText: 'Security'
        }, {
            id: 2,
            text: 'Performance',
            csvText: 'Performance'
        }, {
            id: 3,
            text: 'Productivity',
            csvText: 'Productivity'
        }, {
            id: 4,
            text: 'Scalability',
            csvText: 'Scalability'
        }, {
            id: 5,
            text: 'Cost-effectiveness',
            csvText: 'Cost-effectiveness'
        }, {
            id: 6,
            text: 'Reliability/stability',
            csvText: 'Reliability/stability'
        }, {
            id: 7,
            text: 'Editor experience',
            csvText: 'Editor experience in combination with a headless CMS'
        }]
    }, {
        id: 4,
        type: 'lines',
        selectText: 'Think of the most complex project you&#x2019;ve built with the Jamstack. Try to describe its complexity.',
        text: 'Think of the most complex project you&#x2019;ve built with the Jamstack. Try to describe its complexity.',
        description: 'Choose one item in each of the five lines.',
        answers: [{
            id: 1,
            text: 'Unique users served',
            options: [{
                id: 1,
                text: '10s',
                color: 'orange-11'
            }, {
                id: 2,
                text: '100s',
                color: 'orange-12'
            }, {
                id: 3,
                text: '1,000s',
                color: 'orange-13'
            }, {
                id: 4,
                text: '100,000s',
                color: 'orange-14'
            }, {
                id: 5,
                text: '1,000,000s',
                color: 'orange-15'
            }]
        }, {
            id: 2,
            text: 'Channels served',
            options: [{
                id: 1,
                text: '1',
                note: 'e.g., web',
                color: 'orange-11'
            }, {
                id: 2,
                text: '2 - 3',
                note: 'e.g., web + mobile + social media',
                color: 'orange-12'
            }, {
                id: 3,
                text: '> 3',
                note: 'e.g., web, mob, social, chatbot, IoT, AR/VR, digital signage',
                color: 'orange-13'
            }]
        }, {
            id: 3,
            text: 'Services involved (integrations / microservices / serverless functions)',
            options: [{
                id: 1,
                text: '0',
                color: 'orange-11'
            }, {
                id: 2,
                text: '1',
                color: 'orange-12'
            }, {
                id: 3,
                text: '2 to 5',
                color: 'orange-13'
            }, {
                id: 4,
                text: '> 5',
                color: 'orange-14'
            }, {
                id: 5,
                text: '> 10',
                color: 'orange-15'
            }]
        }, {
            id: 4,
            text: 'Engineers involved',
            options: [{
                id: 1,
                text: '1',
                color: 'orange-11'
            }, {
                id: 2,
                text: '1 to 4',
                color: 'orange-12'
            }, {
                id: 3,
                text: '5 to 10',
                color: 'orange-13'
            }, {
                id: 4,
                text: '> 10',
                color: 'orange-14'
            }, {
                id: 5,
                text: '> 20',
                color: 'orange-15'
            }]
        }, {
            id: 5,
            text: 'Level of dynamicity',
            options: [{
                id: 1,
                text: 'None',
                note: 'e.g., a blog or a landing page',
                color: 'orange-11'
            }, {
                id: 2,
                text: 'Up to 5%',
                note: 'e.g., a microsite',
                color: 'orange-12'
            }, {
                id: 3,
                text: 'Up to 10%',
                note: 'e.g., a corporate website',
                color: 'orange-13'
            }, {
                id: 4,
                text: 'Up to 25%',
                note: 'e.g., an e-shop',
                color: 'orange-14'
            }, {
                id: 5,
                text: 'More than 25%',
                note: 'e.g., a personalized website/portal',
                color: 'orange-15'
            }]
        }]
    }, {
        id: 5,
        type: 'multiple',
        selectText: 'Select the technologies you’ve used in a Jamstack project.',
        text: 'Select the technologies you’ve used in a Jamstack project.',
        answers: [{
            id: 1,
            text: 'AMP',
            color: 'orange'
        }, {
            id: 2,
            text: 'PWA',
            color: 'orange'
        }, {
            id: 3,
            text: 'Serverless functions',
            color: 'orange'
        }, {
            id: 4,
            text: 'GraphQL',
            color: 'orange'
        }, {
            id: 5,
            text: 'gRPC',
            color: 'orange'
        }, {
            id: 6,
            text: 'Websockets',
            color: 'orange'
        }, {
            id: 7,
            text: 'Webhooks',
            color: 'orange'
        }, {
            id: 8,
            text: 'Containers',
            color: 'orange'
        }, {
            id: 9,
            text: 'Identity provider',
            color: 'orange'
        }, {
            id: 10,
            text: 'None of them',
            color: 'dark-grey'
        }]
    }, {
        id: 6,
        type: 'multiple',
        selectText: 'Where do the biggest challenges in adopting the Jamstack architecture lie?',
        text: 'Where do the biggest challenges in adopting the Jamstack architecture lie?',
        description: 'Categorized spontaneous responses, more than one answer possible.',
        answers: [{
            id: 1,
            text: 'Training (of employees), know-how, understanding',
            color: 'dark-grey'
        }, {
            id: 2,
            text: 'Nothing, it is good',
        }, {
            id: 3,
            text: 'Integrate in company',
            color: 'dark-grey'
        }, {
            id: 4,
            text: 'Compatibility with other systems',
            color: 'dark-grey'
        }, {
            id: 5,
            text: 'Data secure, security',
            color: 'dark-grey'
        }, {
            id: 6,
            text: 'Price',
            color: 'dark-grey'
        }, {
            id: 7,
            text: 'Easy to use, comfortable',
            color: 'dark-grey'
        }, {
            id: 8,
            text: 'Upgrades',
            color: 'dark-grey'
        }, {
            id: 9,
            text: 'Programming skills',
            color: 'dark-grey'
        }, {
            id: 10,
            text: 'Reliability',
            color: 'dark-grey'
        }, {
            id: 11,
            text: 'Performance',
            color: 'dark-grey'
        }, {
            id: 12,
            text: 'JavaScript',
            color: 'dark-grey'
        }, {
            id: 13,
            text: 'Problems with functions',
            color: 'dark-grey'
        }, {
            id: 14,
            text: 'Time',
            color: 'dark-grey'
        }, {
            id: 15,
            text: 'Speed',
            color: 'dark-grey'
        }, {
            id: 16,
            text: 'APIs',
            color: 'dark-grey'
        }, {
            id: 17,
            text: 'Many challenges',
            color: 'dark-grey'
        }, {
            id: 18,
            text: 'Markup',
            color: 'dark-grey'
        }, {
            id: 19,
            text: 'Other answer (<1%)',
            color: 'dark-grey'
        }, {
            id: 20,
            text: 'Do not know/no answer',
            color: 'light-grey'
        }
      ]
    }, {
        id: 7,
        type: 'multiple',
        selectText: 'Which static site generators do you like to develop with?',
        text: 'Which static site generators do you like to develop with?',
        description: 'Up to three answers.',
        answers: [{
            id: 1,
            text: 'Gatsby'
        }, {
            id: 2,
            text: 'Gridsome'
        }, {
            id: 3,
            text: 'Nuxt'
        }, {
            id: 4,
            text: 'Next'
        }, {
            id: 5,
            text: 'Hugo'
        }, {
            id: 6,
            text: 'Jekyll'
        }, {
            id: 7,
            text: 'Hexo'
        }, {
            id: 8,
            text: 'VuePress'
        }, {
            id: 9,
            text: 'Sapper'
        }, {
            id: 10,
            text: 'Eleventy'
        }, {
            id: 11,
            text: 'React Static'
        }, {
            id: 12,
            text: 'Other'
        }]
    }, {
        id: 8,
        type: 'multiple',
        selectText: 'Where do you prefer to keep your content?',
        text: 'Where do you prefer to keep your content?',
        description: 'Up to three answers.',
        answers: [{
            id: 1,
            text: 'Strapi'
        }, {
            id: 2,
            text: 'DatoCMS'
        }, {
            id: 3,
            text: 'Netlify CMS'
        }, {
            id: 4,
            text: 'Kentico Kontent'
        }, {
            id: 5,
            text: 'Sanity'
        }, {
            id: 6,
            text: 'Butter CMS'
        }, {
            id: 7,
            text: 'Contentful'
        }, {
            id: 8,
            text: 'Contentstack'
        }, {
            id: 9,
            text: 'Prismic'
        }, {
            id: 10,
            text: 'Graph CMS'
        }, {
            id: 11,
            text: 'Cosmic JS'
        }, {
            id: 12,
            text: 'Google Docs'
        }, {
            id: 13,
            text: 'Static files'
        }, {
            id: 14,
            text: 'Other'
        }]
    }, {
        id: 9,
        type: 'multiple',
        selectText: 'Where do you typically deploy and host your projects?',
        text: 'Where do you typically deploy and host your projects?',
        description: 'Up to three answers.',
        answers: [{
            id: 1,
            text: 'Heroku'
        }, {
            id: 2,
            text: 'Netlify'
        }, {
            id: 3,
            text: 'Surge'
        }, {
            id: 4,
            text: 'Akamai'
        }, {
            id: 5,
            text: 'AWS'
        }, {
            id: 6,
            text: 'MS Azure'
        }, {
            id: 7,
            text: 'GitHub Pages'
        }, {
            id: 8,
            text: 'Zeit'
        }, {
            id: 9,
            text: 'Own infrastructure'
        }, {
            id: 10,
            text: 'Other'
        }]
    }, {
        id: 10,
        type: 'multiple',
        selectText: 'What do you love about today’s Jamstack tooling?',
        text: 'What do you love about today’s Jamstack tooling?',
        description: 'Think about the tools you’ve worked with - Static Site Generators, Headless CMSs, and Deployment Providers. Consider things like developer experience, learning curve, productivity, reliability, collaboration features.',
        note: 'Categorized spontaneous responses, more than one answer possible.',
        answers: [{
            id: 1,
            text: 'Easy to use, easy to work with'
        }, {
            id: 2,
            text: 'Like it (in general)'
        }, {
            id: 3,
            text: 'Wide range of tools, features'
        }, {
            id: 4,
            text: 'Quick'
        }, {
            id: 5,
            text: 'Nothing',
            color: 'dark-grey'
        }, {
            id: 6,
            text: 'Useful, needed'
        }, {
            id: 7,
            text: 'Reliable'
        }, {
            id: 8,
            text: 'Secure, safety'
        }, {
            id: 9,
            text: 'Effective'
        }, {
            id: 10,
            text: 'Innovative, modern'
        }, {
            id: 11,
            text: 'Great, quality'
        }, {
            id: 12,
            text: 'Flexible, universal'
        }, {
            id: 13,
            text: 'Compatible with other systems'
        }, {
            id: 14,
            text: 'Good performance'
        }, {
            id: 15,
            text: 'Unique, different'
        }, {
            id: 16,
            text: 'Effective price'
        }, {
            id: 17,
            text: 'Other answer (<1%)'
        }, {
            id: 18,
            text: 'Do not know/no answer',
            color: 'light-grey'
        }
      ]
    }, {
        id: 11,
        type: 'multiple',
        selectText: 'What do you hate about today’s Jamstack tooling?',
        text: 'What do you hate about today’s Jamstack tooling?',
        description: 'Think about the tools you’ve worked with - Static Site Generators, Headless CMSs, and Deployment Providers. Consider things like developer experience, learning curve, productivity, reliability, collaboration features.',
        note: 'Categorized spontaneous responses, more than one answer possible.',
        answers: [{
            id: 1,
            text: 'Nothing'
        }, {
            id: 2,
            text: 'Learn how it works',
            color: 'dark-grey'
        }, {
            id: 3,
            text: 'Complicated',
            color: 'dark-grey'
        }, {
            id: 4,
            text: 'Cost, expensive, not worthy',
            color: 'dark-grey'
        }, {
            id: 5,
            text: 'Slow, takes time',
            color: 'dark-grey'
        }, {
            id: 6,
            text: 'Not reliable, some errors',
            color: 'dark-grey'
        }, {
            id: 7,
            text: 'Integrating with other systems',
            color: 'dark-grey'
        }, {
            id: 8,
            text: 'Not flexible, unique, specific',
            color: 'dark-grey'
        }, {
            id: 9,
            text: 'Needs upgrades',
            color: 'dark-grey'
        }, {
            id: 10,
            text: 'All JAMstack',
            color: 'dark-grey'
        }, {
            id: 11,
            text: 'Security',
            color: 'dark-grey'
        }, {
            id: 12,
            text: 'Other answer (<1%)',
            color: 'dark-grey'
        }, {
            id: 13,
            text: 'Do not know/no answer',
            color: 'light-grey'
        }
      ]
    }, {
        id: 12,
        type: 'single',
        selectText: 'Are you interested in initiatives trying to unify the Jamstack space such as Stackbit, Sourcebit, or Uniform?',
        text: 'Are you interested in initiatives trying to unify the Jamstack space such as Stackbit, Sourcebit, or Uniform?',
        answers: [{
            id: 1,
            text: 'Yes',
            color: 'orange'
        }, {
            id: 2,
            text: 'No',
            color: 'dark-grey'
        }]
    }, {
        id: 13,
        type: 'multiple',
        selectText: 'What do you think could increase the Jamstack adoption? Name one thing.',
        text: 'What do you think could increase the Jamstack adoption? Name one thing.',
        description: 'Despite the instruction "name one thing", some respondents gave a more comprehensive answer to this question and shared several ideas. Thus the sum of the percentages of all answers in the graph is not 100 %.',
        answers: [{
            id: 1,
            text: 'Popularity, marketing'
        }, {
            id: 2,
            text: 'Teaching of its use, training'
        }, {
            id: 3,
            text: 'Cooperating with other systems'
        }, {
            id: 4,
            text: 'Lower cost'
        }, {
            id: 5,
            text: 'Simply to use'
        }, {
            id: 6,
            text: 'Trust, reliable, stability'
        }, {
            id: 7,
            text: 'Upgrades, improves'
        }, {
            id: 8,
            text: 'Speed'
        }, {
            id: 9,
            text: 'Flexibility'
        }, {
            id: 10,
            text: 'Safety, secure'
        }, {
            id: 11,
            text: 'Performance, productivity'
        }, {
            id: 12,
            text: 'Change a technical issues'
        }, {
            id: 13,
            text: 'Other answer (<1%) '
        }, {
            id: 14,
            text: 'Nothing/it is good',
            color: 'dark-grey'
        }, {
            id: 15,
            text: 'Do not know/no answer',
            color: 'light-grey'
        }
      ]
    }, {
        id: 14,
        type: 'single',
        selectText: 'What is your favorite flavor of jam?',
        text: 'What is your favorite flavor of jam?',
        answers: [{
            id: 1,
            text: 'Apricot'
        }, {
            id: 2,
            text: 'Blackberry'
        }, {
            id: 3,
            text: 'Raspberry'
        }, {
            id: 4,
            text: 'Strawberry'
        }, {
            id: 5,
            text: 'Orange'
        }, {
            id: 6,
            text: 'Fig'
        }]
    }
];