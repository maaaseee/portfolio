export interface Tech {
    name: string;
    icon: string;
    color: string;
}

export const techMap: Record<string, Tech> = {
    "Java": { name: "Java", icon: "java", color: "640dad" },
    "TypeScript": { name: "TypeScript", icon: "typescript", color: "3178C6" },
    "Javascript": { name: "Javascript", icon: "javascript", color: "F7DF1E" },
    "Python": { name: "Python", icon: "python", color: "3776AB" },
    "Spring Boot": { name: "Spring Boot", icon: "spring", color: "6DB33F" },
    "Angular": { name: "Angular", icon: "angular", color: "DD0031" },
    "NestJS": { name: "NestJS", icon: "nestjs", color: "E0234E" },
    "PostgreSQL": { name: "PostgreSQL", icon: "postgresql", color: "4169E1" },
    "MongoDB": { name: "MongoDB", icon: "mongodb", color: "47A248" },
    "Git": { name: "Git", icon: "git", color: "F05032" },
    "Docker": { name: "Docker", icon: "docker", color: "2496ED" },
    "AWS": { name: "AWS", icon: "amazonwebservices", color: "FF9900" },
    "Gemini CLI": { name: "Gemini CLI", icon: "googlegemini", color: "7B00FF" },
    "REST API": { name: "REST API", icon: "postman", color: "FF6C37" },
    "Websocket": { name: "Websocket", icon: "socketdotio", color: "ffffff" },
    "Supabase": { name: "Supabase", icon: "supabase", color: "3ECF8E" },
    "Ionic": { name: "Ionic", icon: "ionic", color: "3178C6" },
    "Express.js": { name: "Express.js", icon: "express", color: "6DB33F" },
    "MySQL": { name: "MySQL", icon: "mysql", color: "4169E1" },
};

export const getTech = (name: string): Tech => {
    return techMap[name] || { name, icon: name.toLowerCase(), color: "ffffff" };
};
