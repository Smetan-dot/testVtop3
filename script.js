    const button = document.querySelectorAll('.buttons-item')[0];

    const span = document.createElement('span');
    span.textContent = 'EN';
    button.appendChild(span);
  
    button.addEventListener('click', () => {
        if(span.textContent === 'EN') span.textContent = 'RU'
        else span.textContent = 'EN';
    })


