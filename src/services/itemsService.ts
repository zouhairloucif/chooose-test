
import IItem from '../interface/IItem'

const getItems = () => {
  return new Promise<IItem[]>((resolve, reject) => {
    fetch(`${process.env.REACT_APP_API}/items`)
      .then((response) => response.json())
      .then((response) => resolve(response))
      .catch((error) => reject(error))
  })
}

export {
  getItems
}