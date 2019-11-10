//recursively calls to fetch all data till no next page in pagination
export const getAllData = async (url, data, resolve, reject) => {
    let res =  await fetch(url);
    if(res.ok){
      let d = await res.json();
      const retrivedData = data.concat(d.results)
      //recurse till next page
      if(d.info.next.length>0){
        getAllData(d.info.next,retrivedData,resolve,reject)
      }else{
        //if no next page , stops the recursion 
        resolve(retrivedData)
      }
    }else{
      reject('Something wrong. Please refresh the page and try again.')
    }
}


