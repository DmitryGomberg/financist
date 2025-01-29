export const formatDateForMySQL = (date: Date) => {
    return date.toISOString().slice(0, 19).replace('T', ' ');
};

export const formatPrice = (price: string): string => {
    const number = parseFloat(price);
    return number.toLocaleString('ru-RU', { minimumFractionDigits: 0, maximumFractionDigits: 2 });
};

export const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}.${month}.${year}`;
};