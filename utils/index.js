/**
 * Helper to calc the value of saving of product
 * 
 * @export
 * @param {string} old - Old price caught by API 
 * @param {string} actual - Actual price caught by API 
 * @returns 
 */

export function saveCalc(old, actual) {
  const prevPrice = old.replace(',', '.'),
        nextPrice = actual.replace(',', '.');
  
  const saving = (prevPrice - nextPrice).toFixed(2);
  
  return saving.toString().replace('.', ','); 
}
