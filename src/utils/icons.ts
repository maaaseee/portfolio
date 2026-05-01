export const getIconUrl = (icon: string, color: string = "ffffff") => {
    if (icon === "java") {
        return `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg`;
    }
    if (icon === "angular") {
        return `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg`;
    }
    if (icon === "amazonwebservices") {
        return `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg`;
    }
    if (icon === "python") {
        return `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg`;
    }
    return `https://cdn.simpleicons.org/${icon}/${color}`;
};
