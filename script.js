        // parallax background
        let rocks = document.getElementById('rocks');
        let forest = document.getElementById('forest');
        let water = document.getElementById('water');
        let mountain = document.getElementById('mountain');
        
        window.addEventListener('scroll', function() {
            let value = window.scrollY;
            
            rocks.style.top = value * -.12 + 'px';
            forest.style.top = value * .25 + 'px';
            mountain.style.top = value * .65 + 'px';
        })


        // expanding card
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
