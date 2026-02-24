export const calculateExpires = () => {
    const now = new Date();
    now .setDate(now.getDate() + 7);
    return now;
}