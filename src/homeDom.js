import "./style.css";

const homeDomController = (function () {
  const Home = () => {
    const content = document.getElementById("content");

    const titleContainer = document.createElement("div");
    titleContainer.classList.add("title-container");
    const dumplingImg = document.createElement("img");
    dumplingImg.src = "img/dumpling.svg";
    const title = document.createElement("h1");
    title.textContent = "Jerry's Dumplings";
    title.classList.add("title");
    titleContainer.appendChild(dumplingImg);
    titleContainer.appendChild(title);

    const aboutSection = document.createElement("div");
    aboutSection.classList.add("content-child");
    const aboutParagraph = document.createElement("p");
    aboutParagraph.textContent =
      " Jerry's Dumplings is a culinary haven where tradition and taste converge, offering handcrafted dumplings made with fresh, locally-sourced ingredients. Our commitment to quality is matched by exceptional customer service and a warm, inviting ambiance. Led by the passionate Chef Jerry, our restaurant blends comfort with elegance, making it perfect for casual meals or special events. Emphasizing sustainability and culinary excellence, Jerry's Dumplings is more than just a dining spot; it's an experience to cherish, inviting guests to enjoy and return for its unique flavors and heartfelt hospitality 🍽️💫🥂";
    aboutSection.appendChild(aboutParagraph);

    const hoursSection = document.createElement("div");
    hoursSection.classList.add("content-child", "hours");
    const hoursHeading = document.createElement("h2");
    hoursHeading.textContent = "Hours";
    const hoursList = document.createElement("ul");
    const hoursLi1 = document.createElement("li");
    hoursLi1.textContent = "Sunday: 8am - 8pm";
    const hoursLi2 = document.createElement("li");
    hoursLi2.textContent = "Monday: 6am - 6pm";
    const hoursLi3 = document.createElement("li");
    hoursLi3.textContent = "Tuesday: 6am - 6pm";
    const hoursLi4 = document.createElement("li");
    hoursLi4.textContent = "Wednesday: 6am - 6pm";
    const hoursLi5 = document.createElement("li");
    hoursLi5.textContent = "Thursday: 6am - 10pm";
    const hoursLi6 = document.createElement("li");
    hoursLi6.textContent = "Friday: 6am - 10pm";
    const hoursLi7 = document.createElement("li");
    hoursLi7.textContent = "Saturday: 8am - 10pm";
    hoursList.appendChild(hoursLi1);
    hoursList.appendChild(hoursLi2);
    hoursList.appendChild(hoursLi3);
    hoursList.appendChild(hoursLi4);
    hoursList.appendChild(hoursLi5);
    hoursList.appendChild(hoursLi6);
    hoursList.appendChild(hoursLi7);

    hoursSection.appendChild(hoursHeading);
    hoursSection.appendChild(hoursList);

    const addressContainer = document.createElement("div");
    addressContainer.classList.add("content-child");
    const addressHeading = document.createElement("h2");
    addressHeading.textContent = "Location";
    const addressAddress = document.createElement("p");
    addressAddress.textContent = "123 Dumpling Drive, Toronto, Canada";
    addressContainer.appendChild(addressHeading);
    addressContainer.appendChild(addressAddress);

    content.appendChild(titleContainer);
    content.appendChild(aboutSection);
    content.appendChild(hoursSection);
    content.appendChild(addressContainer);
  };
  return { Home };
})();

export { homeDomController };
