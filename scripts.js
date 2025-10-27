// Set current year in footer
document.addEventListener('DOMContentLoaded', function(){
	const y = document.getElementById('year');
	if(y) y.textContent = new Date().getFullYear();

	// Mobile nav toggle
	const nav = document.querySelector('.site-nav');
	const btn = document.querySelector('.nav-toggle');
	if(btn && nav){
		btn.addEventListener('click', function(){
			nav.classList.toggle('open');
		});
		// close nav when a link is clicked
		nav.querySelectorAll('a').forEach(a => a.addEventListener('click', ()=> nav.classList.remove('open')));
	}

	// Smooth scroll for internal links
	document.querySelectorAll('a[href^="#"]').forEach(link =>{
		link.addEventListener('click', function(e){
			const targetId = this.getAttribute('href').slice(1);
			if(!targetId) return;
			const target = document.getElementById(targetId);
			if(target){
				e.preventDefault();
				target.scrollIntoView({ behavior: 'smooth', block: 'start' });
			}
		});
	});
});

function learnjavascriptwith(name) {
  console.log("learnjavascriptwith " + name);
}
learnjavascriptwith("youssra");

