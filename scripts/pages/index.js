import '../components/product-list.js';
import '../components/product/product.js';
import '../components/bundle/bundle.js';
import '../components/jumbotron/jumbotron.js';
import pro from '../data/product.js';
// import bun from '../data/bundle.js';
import DataSource from '../data/data-source.js';
const main = () => {
    const searchElement = document.querySelector('jumbo-tron');
    const bundleListElement = document.querySelector('#popular-bundle product-list');
    const productListElement = document.querySelector('#popular-product product-list');

    // onload
    bundleListElement.products = DataSource.getBundle();
    productListElement.products = DataSource.getProduct();
    
    const onButtonSearchClicked = async () => {
        try {
        console.log(searchElement.value);

          const bunresult = await DataSource.searchBundle(searchElement.value);
          const proresult = await DataSource.searchProduct(searchElement.value);
          renderResult(bunresult,proresult);
          
        } catch (message) {
          fallbackResult(message);
        }
      };
     
      const renderResult = (bresults,presults) => {
        bundleListElement.products = bresults;
        productListElement.products = presults;
        
      };
     
      const fallbackResult = message => {

        bundleListElement.renderError(message);
        productListElement.renderError(message);
        
      };
     
      searchElement.clickEvent = onButtonSearchClicked;
      
};
 
export default main;