export interface GitHubData {
    login: string;
    name: string;
    avatar_url: string;
    public_repos: number;
    location: string;
    bio: string;
    timezone: string;
}

const getTimezone = (location: string | null): string => {
    if (!location) return "UTC";
    
    const loc = location.toLowerCase();
    if (loc.includes("buenos aires") || loc.includes("argentina")) return "GMT-3";
    if (loc.includes("new york") || loc.includes("est")) return "GMT-5";
    if (loc.includes("london") || loc.includes("uk")) return "GMT+0";
    if (loc.includes("madrid") || loc.includes("spain") || loc.includes("europe")) return "GMT+1";
    
    return "UTC"; // Default
};

export const fetchGitHubData = async (username: string): Promise<GitHubData | null> => {
    try {
        const response = await fetch(`https://api.github.com/users/${username}`);
        if (!response.ok) {
            throw new Error(`Failed to fetch GitHub data: ${response.statusText}`);
        }
        const data = await response.json();
        return {
            login: data.login,
            name: data.name,
            avatar_url: data.avatar_url,
            public_repos: data.public_repos,
            location: data.location || "Unknown",
            bio: data.bio || "",
            timezone: getTimezone(data.location)
        };
    } catch (error) {
        console.error("Error fetching GitHub data:", error);
        return null;
    }
};
