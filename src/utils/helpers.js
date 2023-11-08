export default function formatCurrency(num) {
    return Number(num.toFixed(1)).toLocaleString() + " ";
}

export const getDoctorImage = (id) => {
    try {
        return  require(`../assets/images/balloons/${id}.png`)
    } catch (error) {
        return null
    }
}