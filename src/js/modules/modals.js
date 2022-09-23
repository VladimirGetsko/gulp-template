const modals = () => {
    function bindModal(triggerSelector, modalSelector, closeSelector, closeClickOverlay = true) {
        const trigger = document.querySelectorAll(triggerSelector);
        const modal = document.querySelector(modalSelector);
        const close = document.querySelector(closeSelector);
        const windows = document.querySelectorAll('[data-modal]'); // необходим для работы со всеми модальными окнами
        const scroll = calcScroll();

        trigger.forEach(item => {
            item.addEventListener('click', (e) => {
                if (e.target) {
                    e.preventDefault();
                }

                windows.forEach(item => {
                    item.style.display = 'none';
                    item.classList.add('fadeIn');
                });
    
                modal.style.display = "block";
                document.body.style.overflow = "hidden";
                document.body.style.marginRight = `${scroll}px`;
            });
        });

        close.addEventListener('click', () => {
            windows.forEach(item => {
                item.classList.remove('fadeIn');
                item.classList.add('fadeOut');
    
                setTimeout(() => {
                    item.classList.remove('fadeOut')
                    item.style.display = "none";
                }, 800)

            });

            modal.classList.remove('fadeIn');
            modal.classList.add('fadeOut');

            setTimeout(() => {
                modal.classList.remove('fadeOut');
                modal.style.display = "none";
            }, 800)


            document.body.style.overflow = "";
            document.body.style.marginRight = `0px`;
        });

        modal.addEventListener('click', (e) => {
            if (e.target === modal && closeClickOverlay) {
                windows.forEach(item => {
                    item.classList.remove('fadeIn')
                    item.classList.add('fadeOut')
        
                    setTimeout(() => {
                        item.classList.remove('fadeOut')
                        item.style.display = "none";
                    }, 800)
                });

                
                modal.classList.remove('fadeIn')
                modal.classList.add('fadeOut')
    
                setTimeout(() => {
                    modal.classList.remove('fadeOut')
                    modal.style.display = "none";
                }, 800)

                document.body.style.overflow = ""; 
                document.body.style.marginRight = `0px`;
            }
        });
    }

     // Popup который вызывается через время
     function showModalByTime(selector, time) {
        setTimeout(function() {
            let display;

            document.querySelectorAll('[data-modal]').forEach(item => {
                if (getComputedStyle(item).display !== 'none') {
                    display = 'block';
                }
            });

            if(!display) {
                document.querySelector(selector).style.display = 'block';
                document.body.style.overflow = "hidden";

                const scroll = calcScroll();
                document.body.style.marginRight = `${scroll}px`;
            }
        }, time);
    }

    function calcScroll() {
        let div = document.createElement('div');

        div.style.width = '50px';
        div.style.height = '50px';
        div.style.overflowY = 'scroll';
        div.style.visibility = 'hidden';

        document.body.appendChild(div);
        let scrollWidth = div.offsetWidth - div.clientWidth;
        div.remove();

        return scrollWidth;
    }

    bindModal('.phone__link', '.popup', '.popup .popup__close');
    // showModalByTime('.popup', 60000);
   
};

export default modals;