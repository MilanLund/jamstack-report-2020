window.questions = [{
        id: 1,
        type: 'single',
        text: 'Are you familiar with the definition of Jamstack stated above?',
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
        text: 'How long have you been working with Jamstack?',
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
        text: 'What are most likely the reasons for choosing Jamstack to build an app with? Put the items in order.',
        description: 'N = 339, developers who work with Jamstack',
        note: '1. the most likely reason to 7. the least likely reason',
        answers: [{
            id: 1,
            text: 'Security'
        }, {
            id: 2,
            text: 'Performance'
        }, {
            id: 3,
            text: 'Productivity'
        }, {
            id: 4,
            text: 'Scalability'
        }, {
            id: 5,
            text: 'Cost-effectiveness'
        }, {
            id: 6,
            text: 'Reliability/stability'
        }, {
            id: 7,
            text: 'Editor experience'
        }]
    }, {
        id: 4,
        type: 'lines',
        text: 'Think of the most complex project you’ve built with Jamstack. Try to describe its complexity: choose one item in each line:',
        description: 'N = 339, developers who work with Jamstack',
        note: '1. the most likely reason to 7. the least likely reason',
        answers: [{
            id: 1,
            text: 'Unique users served',
            options: [{
                id: 1,
                text: '10s'
            }, {
                id: 2,
                text: '100s'
            }, {
                id: 3,
                text: '1000s'
            }, {
                id: 4,
                text: '100000s'
            }, {
                id: 5,
                text: '1000000s'
            }]
        }, {
            id: 2,
            text: 'Channels served',
            options: [{
                id: 1,
                text: '1'
            }, {
                id: 2,
                text: '2 - 3'
            }, {
                id: 3,
                text: '> 3'
            }]
        }, {
            id: 3,
            text: 'Services involved (integrations / microservices / serverless functions)',
            options: [{
                id: 1,
                text: '0'
            }, {
                id: 2,
                text: '1'
            }, {
                id: 3,
                text: '2 to 5'
            }, {
                id: 4,
                text: '> 5'
            }, {
                id: 5,
                text: '> 10'
            }]
        }, {
            id: 4,
            text: 'Engineers involved',
            options: [{
                id: 1,
                text: '1'
            }, {
                id: 2,
                text: '1 to 4'
            }, {
                id: 3,
                text: '5 to 10'
            }, {
                id: 4,
                text: '> 10'
            }, {
                id: 5,
                text: '> 20'
            }]
        }, {
            id: 5,
            text: 'Level of dynamicity',
            options: [{
                id: 1,
                text: 'None e.g., a blog or a landing page'
            }, {
                id: 2,
                text: 'Up to 5%'
            }, {
                id: 3,
                text: 'Up to 10%'
            }, {
                id: 4,
                text: 'Up to 25%'
            }, {
                id: 5,
                text: 'More than 25%'
            }]
        }]
    }, {
        id: 5,
        type: 'multiple',
        text: 'Please, select the technologies you’ve ever used in a Jamstack project.',
        description: 'N = 339, developers who work with Jamstack',
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
        text: 'Considering your past experience, where do the biggest challenges in adopting Jamstack architecture lie? Try to think about all three aspects - JavaScript, APIs, Markup.',
        description: 'N = 339, developers who work with Jamstack',
        note: 'Categorized spontaneous responses, more than one answer possible.',
        answers: []
    }, {
        id: 7,
        type: 'multiple',
        text: 'Which static site generators do you like to develop with?',
        description: 'N = 339, developers who work with Jamstack',
        note: 'Up to three answers.',
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
        text: 'Where do you prefer to keep your content?',
        description: 'N = 339, developers who work with Jamstack',
        note: 'Up to three answers.',
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
        text: 'Where do you typically deploy and host your projects?',
        description: 'N = 339, developers who work with Jamstack',
        note: 'Up to three answers.',
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
        text: 'What do you love about today’s Jamstack tooling?',
        description: 'N = 339, developers who work with Jamstack',
        note: 'Think about the tools you’ve worked with - Static Site Generators, Headless CMSs, and Deployment Providers. Consider things like developer experience, learning curve, productivity, reliability, collaboration features.',
        subnote: 'Categorized spontaneous responses, more than one answer possible.',
        answers: []
    }, {
        id: 11,
        type: 'multiple',
        text: 'What do you hate about today’s Jamstack tooling?',
        description: 'N = 339, developers who work with Jamstack',
        note: 'Think about the tools you’ve worked with - Static Site Generators, Headless CMSs, and Deployment Providers. Consider things like developer experience, learning curve, productivity, reliability, collaboration features.',
        subnote: 'Categorized spontaneous responses, more than one answer possible.',
        answers: []
    }, {
        id: 12,
        type: 'single',
        text: 'Are you interested in initiatives trying to unify the Jamstack space such as Stackbit, Sourcebit, or Uniform?',
        description: 'N = 339, developers who work with Jamstack',
        answers: [{
            id: 1,
            text: 'Yes'
        }, {
            id: 2,
            text: 'No'
        }]
    }, {
        id: 13,
        type: 'multiple',
        text: 'What do you think could increase Jamstack adoption (name one thing)?',
        description: 'N = 531, developers, categorized spontaneous responses.',
        note: 'Despite the instruction "name on thing", some respondents gave a more comprehensive answer to this question and shared several ideas. Thus the sum of the percentages of all answers in the graph is not 100 %.',
        answers: []
    }, {
        id: 14,
        type: 'single',
        text: 'What is your favorite flavor of JAM?',
        description: 'N = 531, developers.',
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