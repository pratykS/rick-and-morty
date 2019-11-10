import axios from 'axios'


//recursively calls to fetch all data till no next page in pagination
export const getAllData = (url, data, resolve, reject) => {
  axios.get(url)
    .then(response => {
      const retrivedData = data.concat(response.data.results);
        //recurse till next page
      if (response.data.info.next.length>0) {
          getAllData(response.data.info.next, retrivedData, resolve, reject);    
      } else {
         //if no next page , stops the recursion 
        resolve(retrivedData)
      }
    })
    .catch(error => {
      console.log(error)
      reject('Something wrong. Please refresh the page and try again.')
    })
}


