import logo from './bull.png'

export function renderHomePage() {
    const contentSection = document.getElementById('content');
    for (let i=0; i<3; i++) {
        const container = document.createElement('div');
        container.classList.add('flex');
        if (i == 0) {
            const name = document.createElement('h1');
            name.textContent = 'The Bull Market Bistro';
            container.appendChild(name);
        } else if (i == 1) {
            const img = document.createElement('img');
            img.src = logo;
            img.alt = "Restaurant's logo. A picture of the New York Stock Exchange's bull";
            container.appendChild(img);
        } else {
            const slogan = document.createElement('h3');
            slogan.innerHTML = 'Where customer satisfaction stays bullish <br> and price stays bearish!';
            container.appendChild(slogan);
        }
        contentSection.appendChild(container);
    }
}

