const BaseUrl = 'http://localhost:3004/posts/';


export const RestAPIGet = (type) => {
    return new Promise((resolve, reject) => {

        fetch(`${BaseUrl}${type}`)
            .then(response => response.json())
            .then((responsejson) => {
                resolve(responsejson);
            })
            .catch((error) => {
                reject(error);
            })
    });
}


export const RestAPIPost = (type, userData) => {

    return new Promise((resolve, reject) => {

        fetch( `${BaseUrl}${type}`,{
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData)
        })
        .then((response) => response.json())
        .then((responsejson) => {
            resolve(responsejson);
        })
        .catch((error) => {
            reject(error);
        })
        // console.log(BaseUrl);
    });
}

export const RestAPIPut = (type, userData) => {
     return new Promise((resolve, reject)=>{
        fetch(`${BaseUrl}${type}`,{
            method: 'PUT',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData)
        })
        .then((response) => response.json())
        .then((responsejson) => {
            resolve(responsejson);
        })
        .catch((error) => {
            reject(error);
        })
     })
}

export const RestAPIDelete = (type, userData) => {
    return new Promise((resolve, reject)=>{
        fetch(`${BaseUrl}${type}`,{
            method: 'DELETE',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData)
        })
        .then((response) => response.json())
        .then((responsejson) => {
            resolve(responsejson);
        })
        .catch((error) => {
            reject(error);
        })
     })
}
