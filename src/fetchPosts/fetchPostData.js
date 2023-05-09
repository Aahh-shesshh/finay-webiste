


export default async function fetchPostData({queryKey}){
    const response = await fetch("https://api.slingacademy.com/v1/sample-data/photos");
    const data = await response.json()
    return data; 
}
