import bun from './bundle.js';
import pro from './product.js';
class DataSource {
  static searchBundle(keyword) {
    return new Promise((resolve, reject) => {
      const filteredBundle = bun.filter(bun => bun.name.toUpperCase().includes(keyword.toUpperCase()));
      
      if (filteredBundle.length) {
        resolve(filteredBundle);
      } else {
        reject(`${keyword} is not found`);
      }
    });
  }
  static searchProduct(keyword) {
    return new Promise((resolve, reject) => {
      const filteredProduct = pro.filter(pro => pro.name.toUpperCase().includes(keyword.toUpperCase()));
      
      if (filteredProduct.length) {
        resolve(filteredProduct);
      } else {
        reject(`${keyword} is not found`);
      }
    });
  }
  static getBundle(){
    return bun;
  }
  static getProduct(){
    return pro;
  }
}

export default DataSource;