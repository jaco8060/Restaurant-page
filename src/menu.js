import "./style.css";

const menuDomController = (function () {
  const Menu = () => {
    const content = document.getElementById("content");

    const createMenuSection = (title, items) => {
      const section = document.createElement("div");
      section.classList.add("content-child", "menu");

      const heading = document.createElement("h2");
      heading.textContent = title;
      section.appendChild(heading);

      items.forEach((item) => {
        const paragraph = document.createElement("p");
        paragraph.textContent = item;
        section.appendChild(paragraph);
      });

      return section;
    };

    const menuSections = [
      {
        title: "Starters",
        items: [
          "Traditional Pork Dumplings - Succulent pork with a blend of herbs and spices, wrapped in a delicate dough.",
          "Vegetarian Paradise Dumplings - A mix of seasonal vegetables, seasoned to perfection.",
          "Spicy Chicken Gyoza - Tender chicken with a fiery kick, pan-seared for a crispy edge.",
          "Prawn and Ginger Dumplings - Fresh prawns and ginger, offering a refreshing zest.",
          "Soup of the Day - Chef's special selection, made from fresh, local ingredients.",
        ],
      },
      {
        title: "Main Courses",
        items: [
          "Dumpling Platter - A sampler of our best-selling dumplings, perfect for sharing.",
          "Beef Dumpling Stir-Fry - Juicy beef dumplings tossed with vegetables in a savory sauce.",
          "Seafood Dumpling Noodle Soup - A comforting bowl of noodles with assorted seafood dumplings.",
          "Vegan Dumpling Delight - Assortment of vegan dumplings, served with a side of seasonal greens.",
        ],
      },
      {
        title: "Sides",
        items: [
          "Steamed Jasmine Rice",
          "Seasonal Steamed Vegetables",
          "Crispy Spring Rolls",
          "Sweet Chili Dipping Sauce",
          "Soy-Ginger Dipping Sauce",
        ],
      },
      {
        title: "Desserts",
        items: [
          "Sweet Red Bean Dumplings - A delightful end to your meal.",
          "Green Tea Ice Cream - Refreshing and creamy, with a subtle green tea flavor.",
          "Mango Pudding - Silky and sweet, topped with fresh mango slices.",
        ],
      },
      {
        title: "Beverages",
        items: [
          "Selection of Teas - Green, black, jasmine, and more.",
          "Craft Beers - Local and imported options.",
          "House Wines - Red, white, and rosé.",
          "Soft Drinks and Juices - Various choices available.",
        ],
      },
    ];

    menuSections.forEach((section) => {
      const menuSection = createMenuSection(section.title, section.items);
      content.appendChild(menuSection);
    });
  };
  return { Menu };
})();

export { menuDomController };
