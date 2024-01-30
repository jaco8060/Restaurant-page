import "./style.css";

const contactDomController = (function () {
  const Contact = () => {
    const content = document.getElementById("content");

    const contactContainer = document.createElement("div");
    contactContainer.classList.add("content-child", "contact");

    const contactHeading = document.createElement("h2");
    contactHeading.textContent = "Contact Us";
    contactContainer.appendChild(contactHeading);

    const addressParagraph = document.createElement("p");
    addressParagraph.textContent = "123 Dumpling Drive, Toronto, Canada";
    contactContainer.appendChild(addressParagraph);

    const phoneParagraph = document.createElement("p");
    phoneParagraph.textContent = "Phone: (123) 456-7890";
    contactContainer.appendChild(phoneParagraph);

    const emailParagraph = document.createElement("p");
    emailParagraph.textContent = "Email: info@jerrysdumplings.com";
    contactContainer.appendChild(emailParagraph);

    const hoursHeading = document.createElement("h3");
    hoursHeading.textContent = "Operating Hours";
    contactContainer.appendChild(hoursHeading);

    const hoursList = document.createElement("ul");

    const days = [
      "Sunday: 8am - 8pm",
      "Monday: 6am - 6pm",
      "Tuesday: 6am - 6pm",
      "Wednesday: 6am - 6pm",
      "Thursday: 6am - 10pm",
      "Friday: 6am - 10pm",
      "Saturday: 8am - 10pm",
    ];

    days.forEach((day) => {
      const hoursItem = document.createElement("li");
      hoursItem.textContent = day;
      hoursList.appendChild(hoursItem);
    });

    contactContainer.appendChild(hoursList);

    content.appendChild(contactContainer);
  };
  return { Contact };
})();

export { contactDomController };
