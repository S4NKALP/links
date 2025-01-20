const username = "S4NKALP";
const linkList = document.querySelector(".link-list");
const linksSection = document.querySelector(".links");
const filterInput = document.querySelector(".filter-links");

// Function to build an icon element with appropriate color styling
const buildIcon = (linkk) => {
    return `<span class='${linkk.icon}' style='color: ${linkk.color};'></span>`;
};

// Function to construct the correct URL format based on its type
const buildUrl = (linkk) => {
    if (linkk.url.startsWith("http") || linkk.url.startsWith("mailto")) {
        return linkk.url;
    }
    return `https://${linkk.url}${linkk.url.endsWith("/") ? "" : "/"}${username}`;
};

// Function to display the links dynamically
const displayLinks = (linkk) => {
    filterInput.classList.remove("hide");
    linkList.innerHTML = ""; // Clear existing links before adding new ones

    for (const link of linkk) {
        let listItem = document.createElement("li");
        listItem.classList.add("link");
        listItem.innerHTML = `
            <a href="${buildUrl(link)}" target="_blank" rel="noopener noreferrer">
                <div>
                    <h3>
                        ${buildIcon(link)}
                        ${link.name}
                    </h3>
                    <p>${link.description}</p>
                </div>
            </a>`;
        linkList.appendChild(listItem);
    }
};

// Dynamic search functionality
filterInput.addEventListener("input", (e) => {
    const searchText = e.target.value.toLowerCase();
    const links = document.querySelectorAll(".link");

    links.forEach((link) => {
        link.textContent.toLowerCase().includes(searchText)
            ? link.classList.remove("hide")
            : link.classList.add("hide");
    });
});

// Array of links with details
const linkk = [
    {
        name: "Mail",
        description: "Want to talk? Write me a mail",
        url: "mailto:sankalptharu50028@gmail.com",
        icon: "fa-brands fa-telegram",
        color: "#0088cc",
    },
    {
        name: "Facebook",
        description: "Glimpse of my life and journey",
        url: "https://facebook.com/sankalptharu50028",
        icon: "fa-brands fa-facebook",
        color: "#1877F2",
    },
    {
        name: "GitHub",
        description: "My favourite place :)",
        url: "github.com/",
        icon: "fa-brands fa-github",
        color: "#fff",
    },
    {
        name: "GitLab",
        description: "My favourite place :)",
        url: "gitlab.com/",
        icon: "fa-brands fa-gitlab",
        color: "#f57c00",
    },
    {
        name: "Resume",
        description: "What I have done so far",
        url: "https://github.com/S4NKALP/resume/blob/main/resume.pdf",
        icon: "fa-brands fa-wpforms",
        color: "#008abd",
    },
    {
        name: "Twitter",
        description: "Tech, rants, philosophy, memes",
        url: "twitter.com/",
        icon: "fa-brands fa-twitter",
        color: "#1da1f2",
    },
    {
        name: "YouTube",
        description: "I make tooling videos for devs",
        url: "youtube.com/",
        icon: "fa-brands fa-youtube",
        color: "#ff0000",
    },
    {
        name: "LinkedIn",
        description: "Career updates and thoughts",
        url: "linkedin.com/",
        icon: "fa-brands fa-linkedin",
        color: "#0077B5",
    },
    {
        name: "Blog",
        description: "About things I build and learn",
        url: "https://S4NKALP.github.io/blog",
        icon: "fa-brands fa-blogger",
        color: "#f57c00",
    },
    {
        name: "Portfolio",
        description: "/home/S4NKALP",
        url: "https://S4NKALP.github.io/Protofolio",
        icon: "fa-brands fa-fort-awesome",
        color: "#1688f0",
    },
    {
        name: "Projects",
        description: "All my projects!",
        url: "https://S4NKALP.github.io/projects",
        icon: "fa-brands fa-product-hunt",
        color: "#da552f",
    },
    {
        name: "Instagram",
        description: "Glimpse of my life and journey",
        url: "https://instagram.com/",
        icon: "fa-brands fa-instagram",
        color: "#e1306c",
    },
    {
        name: "Reddit",
        description: "Lurk mostly, sometimes I post",
        url: "reddit.com/user/",
        icon: "fa-brands fa-reddit",
        color: "#ff4500",
    },
    {
        name: "Dev",
        description: "Where I connect with Devs",
        url: "dev.to/",
        icon: "fa-brands fa-dev",
        color: "#ccc",
    },
    {
        name: "HackerRank",
        description: "For problem-solving skills",
        url: "hackerrank.com/",
        icon: "fa-brands fa-hackerrank",
        color: "#1ba94c",
    },
    {
        name: "Exercism",
        description: "For learning new languages",
        url: "exercism.org/profiles/",
        icon: "fa-brands fa-font-awesome",
        color: "#1b51d2",
    },
    {
        name: "freeCodeCamp",
        description: "Where I started web dev",
        url: "freecodecamp.org/",
        icon: "fa-brands fa-free-code-camp",
        color: "#006400",
    },
    {
        name: "Leetcode",
        description: "More problem-solving",
        url: "leetcode.com/",
        icon: "fa-brands fa-black-tie",
        color: "#e08b32",
    },
];

// Display all links initially
displayLinks(linkk);
