let text = document.getElementById('text');
        let bird1 = document.getElementById('bird1');
        let bird2 = document.getElementById('bird2');
        let btn = document.getElementById('btn');
        let rocks = document.getElementById('rocks');
        let forest = document.getElementById('forest');
        let water = document.getElementById('water');
        
        window.addEventListener('scroll', function() {
            let value = window.scrollY;
            
            text.style.top = 50 + value * -.1 + '%';
            bird2.style.top = value * -1.5 + 'px';
            bird2.style.left = value * 2 + 'px';
            bird1.style.top = value * -1.5 + 'px';
            bird1.style.left = value * -5 + 'px';
            btn.style.marginTop = value * 1.5 + 'px';
            rocks.style.top = value * -.12 + 'px';
            forest.style.top = value * .25 + 'px';
        })





        const panels = document.querySelectorAll('.panel')

        panels.forEach((panel) => {
            panel.addEventListener('click', () => {
               removeActiveClasses()
                panel.classList.add('active') 
            })
        })
        
        function removeActiveClasses() {
            panels.forEach(panel => {
                panel.classList.remove('active')
            })
        }







        const darkToggle = document.querySelector('#darkMode');
        darkToggle.addEventListener('click', ()=> {

        document.querySelector("h2").classList.toggle('dark-mode')
        document.querySelector("#night").style = "display:block;";
       
        });