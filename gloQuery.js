(() => {
  const glo = function (selector) {
    const elems = document.querySelectorAll(selector);
    const obj = {
      hide() {
        elems.forEach(elem => elem.style.display = 'none');
        return this;
      },
      show(option = '') {
        elems.forEach(elem => elem.style.display = option);
        return this;
      },
      toggle() {
        elems.forEach(elem => {
          if (elem.style.display === 'none') {
            elem.style.display = '';
          } else {
            elem.style.display = 'none'
          }
        });
        return this;
      },
      addClass(className) {
        elems.forEach(elem => {
          elem.classList.add(className);
        });
        return this;
      },
      removeClass(className) {
        elems.forEach(elem => {
          elem.classList.remove(className);
        });
        return this;
      },
      toggleClass(className) {
        elems.forEach(elem => {
          elem.classList.toggle(className);
        });
        return this;
      },
      on(eventName, callback) {
        elems.forEach(elem => {
          elem.addEventListener(eventName, callback);
        });
        return this;
      },
      off(eventName, callback) {
        elems.forEach(elem => {
          elem.removeEventListener(eventName, callback);
        });
        return this;
      },



    };
    return obj;
  };

  window.glo = glo;
})();



