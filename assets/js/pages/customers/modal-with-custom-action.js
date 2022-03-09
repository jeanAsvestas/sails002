// Learn Template literals: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
// Learn about Modal: https://getbootstrap.com/docs/5.0/components/modal/

var modalWrap = null;
/**
 * 
 * @param {string} title 
 * @param {string} description content of modal body 
 * @param {string} yesBtnLabel label of Yes button 
 * @param {string} noBtnLabel label of No button 
 * @param {function} callback callback function when click Yes button
 */
const showModal = (title, formData, yesBtnLabel = 'Yes', noBtnLabel = 'Cancel', callback) => {
  if (modalWrap !== null) {
    modalWrap.remove();
  }

  modalWrap = document.createElement('div');
  modalWrap.innerHTML = `
    <div class="modal fade" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header bg-light">
            <h5 class="modal-title">${title}</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <p>Select products for the customer ${formData.customerName} with id: ${formData.customerId}</p>
            <!-- 
              STEP 1.
              Can we bring the products dynamically?
              Yes. With AJAX or WebSockets!
              Can you do it?
            -->
            <select id='listOfProducts'>
              ${formData.products.map(product => {
                return `<option value=${product.id}>${product.name}</option>`;
              }).join("")}
            </select>
            
            <!--
              STEP 2. 
              How can we show just once per select the number of Product X?
              This can help you: https://write.corbpie.com/bootstrap-5-accordion-catch-hide-and-show-events/
            -->
            <div>
              <label for="p${formData.products[0].id}" class="form-label">Select number of products</label>
              <input 
                type="range" 
                class="form-range" 
                min="0" max="10" 
                value="${formData.products[0].quantity}" 
                id="p${formData.products[0].id}" onchange="p1value.value=value" />
              <output id="p${formData.products[0].id}value">${formData.products[0].quantity}</output>
            </div>
            
            <hr>
            <h5>${formData.question}</h5>
          </div>
          <div class="modal-footer bg-light">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">${noBtnLabel}</button>
            <button type="button" class="btn btn-primary modal-success-btn" data-bs-dismiss="modal">${yesBtnLabel}</button>
          </div>
        </div>
      </div>
    </div>
  `;

  modalWrap.querySelector('.modal-success-btn').onclick = callback;
  document.body.append(modalWrap);
  var modal = new bootstrap.Modal(modalWrap.querySelector('.modal'));
  modal.show();
}