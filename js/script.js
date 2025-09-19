// Mobile nav toggle and basic interactions
const menuToggle = document.querySelector('.menu-toggle');
const navList = document.querySelector('nav ul');
menuToggle?.addEventListener('click', ()=>{
    navList.classList.toggle('show');
});

// Scroll reveal for elements with .fade-in
const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
},{threshold:0.12});
document.querySelectorAll('.fade-in').forEach(el=>observer.observe(el));

// Simple form validation for contact and order forms
function handleFormSubmit(e){
    e.preventDefault();
    const form = e.target;
    const name = form.querySelector('[name=name]')?.value.trim();
    const email = form.querySelector('[name=email]')?.value.trim();
    if(!name || !email){
        alert('Please provide your name and email.');
        return false;
    }
    // Additional validation for order form
    const qtyEl = form.querySelector('[name=quantity]');
    if(qtyEl){
        const qty = parseInt(qtyEl.value,10);
        if(isNaN(qty) || qty <= 0){ alert('Please enter a valid quantity.'); return false; }
    }
    // fake submit
    alert('Thank you! Your submission was received.');
    form.reset();
    return true;
}
document.addEventListener('submit', handleFormSubmit);
