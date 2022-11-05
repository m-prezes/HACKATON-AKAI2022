export const getWeekAndCurrentDay = () => {
    const week = [0, 1, 2, 3, 4, 5, 6];
    const date = new Date();
    const today = date.getDay();

    return [week, today]
}