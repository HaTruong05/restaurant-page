export function renderAboutPage() {
    const contentSection = document.getElementById('content');

    const aboutContainer = document.createElement('div');
    aboutContainer.classList.add('flex');
    contentSection.appendChild(aboutContainer);

    const about = document.createElement('div');
    about.id = 'about';
    aboutContainer.appendChild(about);

    const titleContainer = document.createElement('div');
    titleContainer.classList.add('flex');
    about.appendChild(titleContainer);

    const title = document.createElement('h4');
    title.textContent = "About us";
    titleContainer.appendChild(title);

    const historySection = document.createElement('div');
    about.appendChild(historySection);

    const historySectionTitle = document.createElement('h2');
    historySectionTitle.textContent = 'History';
    historySection.appendChild(historySectionTitle);

    const history = document.createElement('p');
    history.textContent='The Bull Market Bistro is where fine dining meets market timing. Born out of the chaos of trading floors and lunch breaks,our kitchen serves high-yield flavors for bulls, bears, and everything in between. From sizzling tendies to blue-chip sushi, our menu moves faster than a meme stock on earnings day.'
    historySection.appendChild(history);

    const contactInfoSection = document.createElement('div');
    contactInfoSection.id = 'contact-info';
    about.appendChild(contactInfoSection);

    const contactInfoTitle = document.createElement('h2');
    contactInfoTitle.textContent = 'Contact Info';
    contactInfoSection.appendChild(contactInfoTitle);

    const phoneNumber = document.createElement('p');
    phoneNumber.innerHTML = '<b>Phone:</b> (212) 656-3000';
    const email = document.createElement('p');
    email.innerHTML = '<b>Email:</b> info@nyse.com';
    const openTime = document.createElement('p');
    openTime.innerHTML = '<b>Open:</b> Monday-Friday, 9:30 AM - 4:00 PM ET';

    [phoneNumber, email, openTime].forEach((info) => {
        contactInfoSection.appendChild(info);
    })

    const disclaimerSection = document.createElement('div');
    disclaimerSection.id = 'disclaimer';
    about.appendChild(disclaimerSection);
    
    const disclaimer = document.createElement('p');
    disclaimer.innerHTML = '<em> <b>Disclaimer:</b> Please do not contact the actual NYSE via the provided phone number and email. This is a parody restaurant. This page is for entertainment purposes only.</em>';
    disclaimerSection.appendChild(disclaimer);
}
