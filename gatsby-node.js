/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

exports.sourceNodes = ({ actions, createNodeId, createContentDigest }) => {
    const projects = [{
        name: "Vrinda Sharma Branding & Website",
        type: "Freelancing",
        date: "June 2019",
        description: "- UI/UX Design \n- Visual Identity (logo, brandbook)\n- Development (React, Firebase)",
        techStack: ["firebase", "react", "xd", "sc"],
        details: "",
        demo: "",
        git: "",
        gitTags: "",
        images: [""]
    }, {
        name: "React Native Animated Nav Tab Bar",
        type: "Open Source",
        date: "July 2019",
        description: "A simple and customisable React Native component that implements an animated bottom tab bar for React Navigation.",
        techStack: ["react", "reactNav", "npm", "sc", "xd"],
        details: "",
        demo: "",
        git: "",
        gitTags: "",
        images: [""]
    },
    {
        name: "Signify - App that translates ASL to English",
        type: "Hackathon, Oxford Hack 2019",
        date: "November 2019",
        description: "An iOS Application that translates the American Sign Language to English. Developed using SwiftUI, Combine, CoreML and Azure Custom Vision",
        techStack: ["swift", "swiftUI", "azure", "coreml", "xd"],
        details: "",
        demo: "",
        git: "",
        gitTags: "",
        images: [""]
    },
    {
        name: "See it, Scan it Know it! RN App that recognizes landmarks.",
        type: "Expedia Hack, TravelAid 2018 (Winner)",
        date: "November 2018",
        description: "React Native app that uses Google Cloud Vision to scan and and recognise landmarks while travelling. It gives events, and location details as well.",
        techStack: ["react", "gc", "mongo", "node", "wiki", "event", "xd", "sc"],
        details: "",
        demo: "",
        git: "",
        gitTags: "",
        images: [""]
    },
    {
        name: "Nasa Borderless - RN App that uses NASA APIs",
        type: "Open Source",
        date: "August 2019",
        description: "React Native app that uses Google Cloud Vision to scan and and recognise landmarks while travelling. It gives events, and location details as well.",
        techStack: ["react", "redux", "nasa", "sc", "xd"],
        details: "",
        demo: "",
        git: "",
        gitTags: "",
        images: [""]
    },
    {
        name: "SEG My Buddy - App for medical safety monitoring, NHS",
        type: "University Group Project, KCL, King's College Hospital",
        date: "January - April 2019",
        description: "React Native App for doctors within NHS King’s College Hospital, London to ensure safety while taking home visits to patients",
        techStack: ["react", "redux", "firebase", "gc", "sc", "xd", "jira"],
        details: "",
        demo: "",
        git: "",
        gitTags: "",
        images: [""]
    },
    ]

    projects.forEach(project => {
        const node = {
            id: createNodeId(`Project-${project.name}`),
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