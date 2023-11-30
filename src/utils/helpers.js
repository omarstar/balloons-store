export default function formatCurrency(num) {
    return Number(num.toFixed(1)).toLocaleString() + " ";
}

export const getImportedImage = (id) => {
    try {

        return  require(`../assets/images/balloons/collections/${id}.jpg`)
    } catch (error) {
        return null
    }
}

export const getImage = (srcpath) => {
    try {
        return  require("../assets/images/banners/NationalDay-Banner.webp")
    } catch (error) {
        return null
    }
}

export const getLocalStorageValue = (skey, defaultValue='') => {
    return localStorage.getItem(skey) ? localStorage.getItem(skey) : defaultValue;
}