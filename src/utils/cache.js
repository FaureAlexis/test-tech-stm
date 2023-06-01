function getCachedData() {
    const cachedData = localStorage.getItem("cachedData");
    const cachedTime = localStorage.getItem("cachedTime");
    if (cachedData && cachedTime) {
        const now = new Date().getTime();
        if (now - cachedTime < 10 * 60 * 1000) {
            return JSON.parse(cachedData);
        }
    }
    return null;
}

function setCachedData(data) {
    localStorage.setItem("cachedData", JSON.stringify(data));
    localStorage.setItem("cachedTime", new Date().getTime().toString());
}

export { getCachedData, setCachedData };
