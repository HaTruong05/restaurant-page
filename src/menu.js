function menuItem(name, description, price, trend) {
    this.name = name;
    this.description = description;
    this.price = price;
    this.trend = trend;
}

export function renderMenuPage() {
    const contentSection = document.getElementById('content');
    
    // Flex div for menu
    const menuContainer = document.createElement('div');
    menuContainer.classList.add('flex');
    contentSection.appendChild(menuContainer);

    // Menu
    const menu = document.createElement('div');
    menu.id = 'menu';
    menuContainer.appendChild(menu);

    // Flex div for menu tilte
    const menuTitleContainer = document.createElement('div');
    menuTitleContainer.classList.add('flex');
    const menuTitle = document.createElement('h4');
    menuTitleContainer.appendChild(menuTitle);

    // Menu title
    menuTitle.textContent = 'Menu';
    menu.appendChild(menuTitleContainer)

    // Dishes
    menuItems.forEach((item) => {
        // New dish
        const dish = document.createElement('div');
        dish.classList.add('dish');
        menu.appendChild(dish);

        // Name and Desc of new dish
        const nameAndDesc = document.createElement('div');
        nameAndDesc.classList.add('name-and-desc');
        dish.appendChild(nameAndDesc);

        const name = document.createElement('h5');
        name.textContent = item.name;
        nameAndDesc.appendChild(name);

        const desc = document.createElement('p');
        desc.textContent = item.description;
        nameAndDesc.appendChild(desc)
        
        // Price and trend for dish
        const priceAndTrend = document.createElement('div');
        priceAndTrend.classList.add('price-and-trend');
        dish.appendChild(priceAndTrend);

        const price = document.createElement('h7');
        price.textContent = item.price;
        priceAndTrend.appendChild(price);

        const trend = document.createElement('p');
        trend.textContent = item.trend;
        priceAndTrend.appendChild(trend);
    })
}

const menuItems = [
  new menuItem(
    "$STEAK: Filet Mignon 500g",
    "Premium cut grilled to perfection. A bullish classic.",
    "$42.00",
    "+3.5%"
  ),
  new menuItem(
    "$BURR: Burrito Bowl",
    "Customizable bowl with rice, beans, and choice of protein. Bears pulled out.",
    "$12.00",
    "-1.2%"
  ),
  new menuItem(
    "$TENDY: Chicken Tenders (Hot Pick)",
    "Crispy golden tendies, investors are dipping like crazy.",
    "$9.99",
    "+8.7%"
  ),
  new menuItem(
    "$SUSHI: Assorted Nigiri",
    "Market-stable combo of salmon, tuna, and shrimp nigiri.",
    "$18.00",
    "0.0%"
  ),
  new menuItem(
    "$ICE: Insider Cone Cream",
    "Summer-favorite dessert, rumors of a flavor collab.",
    "$7.00",
    "+6.2%"
  ),
  new menuItem(
    "$RAMN: Tokyo-Style Tonkotsu Ramen",
    "Creamy pork broth noodles surging in Q3 appetite index.",
    "$14.50",
    "+2.8%"
  ),
  new menuItem(
    "$WAGYU: A5 Wagyu Slider Trio",
    "Small but mighty, premium Japanese beef drawing whales.",
    "$21.00",
    "+5.1%"
  ),
  new menuItem(
    "$PASTA: Truffle Mushroom Fettuccine",
    "Creamy, earthy, and beloved by long-term holders.",
    "$17.25",
    "0.0%"
  ),
  new menuItem(
    "$NUGG: Spicy Vegan Nuggets",
    "Plant-based dip stock slightly cooling after last week's hype.",
    "$8.25",
    "-0.9%"
  ),
  new menuItem(
    "$PIE: Salted Caramel Pecan Pie Slice",
    "Sweet, nutty, and outperforming market expectations.",
    "$6.75",
    "+4.0%"
  )
];

