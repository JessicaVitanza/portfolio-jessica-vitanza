
        let rocks = document.getElementById('rocks');
        let forest = document.getElementById('forest');
        let water = document.getElementById('water');
        
        window.addEventListener('scroll', function() {
            let value = window.scrollY;
            
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
        document.querySelector("#text").style = "color: white;";
      
        });