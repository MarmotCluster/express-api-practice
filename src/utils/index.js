export const setTime = (hour, min, sec) => {
    return Math.floor(Date.now() / 1000) + sec + min * 60 + hour * 3600;
};
