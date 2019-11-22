/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it


const projects = [{
    id: 0,
    name: "Vrinda Sharma Branding & Website",
    type: "Freelancing",
    date: "June 2019",
    description: "- UI/UX Design \n- Visual Identity (logo, brandbook)\n- Development (React, Firebase)",
    techStack: ["firebase", "react", "xd", "sc"],
    details: "",
    demo: "www.github.com/torgeaelin/project",
    git: "www.github.com/torgeaelin/project",
    gitTags: ["https://badge.fury.io/js/react-native-animated-nav-tab-bar.svg", "https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat", "https://img.shields.io/npm/dw/react-native-animated-nav-tab-bar.svg"],
    images: ["vrinda1", "vrinda2", "vrinda3", "vrinda4", "vrinda5"]
}, {
    id: 1,
    name: "React Native Animated Nav Tab Bar",
    type: "Open Source",
    date: "July 2019",
    description: "A simple and customisable React Native component that implements an animated bottom tab bar for React Navigation.",
    techStack: ["react", "reactNav", "npm", "sc", "xd"],
    details: "",
    demo: "",
    git: "",
    gitTags: [],
    images: []
},
{
    id: 2,
    name: "Signify - App that translates ASL to English",
    type: "Hackathon, Oxford Hack 2019",
    date: "November 2019",
    description: "An iOS Application that translates the American Sign Language to English. Developed using SwiftUI, Combine, CoreML and Azure Custom Vision",
    techStack: ["swift", "swiftUI", "azure", "coreml", "xd"],
    details: "",
    demo: "",
    git: "",
    gitTags: [],
    images: []
},
{
    id: 3,
    name: "See it, Scan it Know it! RN App that recognizes landmarks.",
    type: "Expedia Hack, TravelAid 2018 (Winner)",
    date: "November 2018",
    description: "React Native app that uses Google Cloud Vision to scan and and recognise landmarks while travelling. It gives events, and location details as well.",
    techStack: ["react", "gc", "mongo", "node", "wiki", "event", "xd", "sc"],
    details: "",
    demo: "",
    git: "",
    gitTags: [],
    images: []
},
{
    id: 4,
    name: "Nasa Borderless - RN App that uses NASA APIs",
    type: "Open Source",
    date: "August 2019",
    description: "React Native app that uses Google Cloud Vision to scan and and recognise landmarks while travelling. It gives events, and location details as well.",
    techStack: ["react", "redux", "nasa", "sc", "xd"],
    details: "",
    demo: "",
    git: "",
    gitTags: [],
    images: []
},
{
    id: 5,
    name: "SEG My Buddy - App for medical safety monitoring, NHS",
    type: "University Group Project, KCL, King's College Hospital",
    date: "January - April 2019",
    description: "React Native App for doctors within NHS King’s College Hospital, London to ensure safety while taking home visits to patients",
    techStack: ["react", "redux", "firebase", "gc", "sc", "xd", "jira"],
    details: "",
    demo: "",
    git: "",
    gitTags: [],
    images: []
},
]


exports.sourceNodes = ({ actions, createNodeId, createContentDigest }) => {


    projects.forEach(project => {
        const node = {
            id: createNodeId(`Project-${project.id}`),
            projectId: project.id,
            name: project.name,
            type: project.type,
            date: project.date,
            description: project.description,
            techStack: project.techStack,
            details: project.details,
            demo: project.demo,
            git: project.git,
            gitTags: project.gitTags,
            images: project.images,
            internal: {
                type: "Project",
                contentDigest: createContentDigest(project),
            },
        }
        actions.createNode(node)
    })
}



exports.createPages = ({ actions }) => {
    const { createPage } = actions
    // pull in or use whatever data


    projects.forEach(project => {
        createPage({
            path: `/project/${project.id}`,
            component: require.resolve(`./src/components/project-details.js`),
            context: { project },
        })
    })


}