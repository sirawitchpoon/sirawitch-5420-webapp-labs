let planet = document.createElement('div');
        planet.classList.add('planet');
        planet.style.backgroundColor = 'grey';
        document.body.appendChild(planet);

        let moon = document.createElement('div');
        moon.classList.add('moon');
        moon.style.backgroundColor = 'yellow';
        planet.appendChild(moon);

        let text = document.createElement('div');
        text.textContent = 'The planet and the moon';
        text.style.color = 'green';
        document.body.appendChild(text);