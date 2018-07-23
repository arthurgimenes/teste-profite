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

/**
 * Helper to close the lightbox
 * 
 * @export
 * @param {objcet} e - event to close lightbox
 */
export function closeLightbox(e) {
  e.preventDefault();
  e.target.parentNode.parentNode.classList.contains('-opened') ?
    e.target.parentNode.parentNode.classList.remove('-opened') :
    e.target.parentNode.parentNode.parentNode.classList.remove('-opened') 
}

/**
 * Helper to verify if is Client side
 */
export const isClient = typeof window !== 'undefined';

/**
 * 
 * @param {object} e - Click event
 * @param {string} sku - Sku caught by API
 */
export const openLightbox = (e, sku) => {
  e.preventDefault();
  
  const lightbox = document.getElementById(sku);

  lightbox.classList.add('-opened');
}