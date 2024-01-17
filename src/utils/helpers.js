export default function formatCurrency(num) {
    return Number(num.toFixed(1)).toLocaleString() + " ";
}

export const getImportedImage = (id) => {
    try {
        console.log('imageid to import', id)
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

// export const getFormatTotalAmount= (amount) => {
//     const updatedAmount = Number(amount).toFixed(2);
//     return `AED ${updatedAmount}`
// }

export const getFormatAmount= (amount) => {
    const updatedAmount = Number(amount).toFixed(2);
    return `AED ${updatedAmount}`
}

export const getLocalStorageValue = (skey, defaultValue='') => {
    return localStorage.getItem(skey) ? localStorage.getItem(skey) : defaultValue;
}


export const validateCategoryParams = (val) => {
    const validParams = ["bouquets", "holidays", "occasions","decorations"];
    var res = validParams.includes(val);
    console.log('res', [res, val])
    if (validParams.includes(val)) {
    return true;
    } else {
    return false;
    }
}

export const getBreadFromPath = (path) => {

    let category = '';
  let subcategory = '';

  if (path.length >= 2) {
    subcategory = path.pop();
    category = path.pop();
    return ["Home",category.toUpperCase(),subcategory.toUpperCase()]
  } else if (path.length === 1) {
    subcategory = path.pop();
    return ["Home",subcategory.toUpperCase()]
  }

  return []

}

export const validatePhoneNumber = (input) => {
    let result = ''
    if(input.length === 0) {
        result = "emptyField"
    } else if(input.length < 10){
        result = "wrongFormat";
    } else if(!input.startsWith("05")){
        result = "invalidMobile";
    } else {
        result = "valid"

    }
    console.log('invalMob ', input )
    console.log('result', result)
    return result;

}
//not used
export const formatDateToYMD = (date) => {
    // const year = date.getFullYear();
    // const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
    // const day = String(date.getDate()).padStart(2, '0');
  
    // return `${year}-${month}-${day}`;
    const serializedDate = date.toISOString();
    console.log('serializedDate.split()', serializedDate.split())
    return serializedDate.split('T')[0];
  };

