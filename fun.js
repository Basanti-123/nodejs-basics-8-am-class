// write a js function that checks if the mobile number is valid phone number or not
// for eg: +014411=> false
// for eg: 9841012345=> true

const phoneNumber = (nbr) => {
  const numString = String(nbr);
  if (numString.length < 10 || numString.length > 10) return false;
  return numString.startsWith("98");
};

const result = phoneNumber("9841012345");
console.log({ result });

// for eg: Raktim is MERN Stack instructor. He has been working in this feild for 8 years.
// output Raktim is MERN Stack instructor. He has been working in....

const truncate = (string) => {
  return string.slice(0, 65).concat("....");
};
const res = truncate(
  "Raktim is MERN Stack instructor. he has been working in this field for 8 years."
);
console.log({ res });

// write a js library that greets users based on the time of the day using data object and greeting object>
// eg:
// const greetings = {
//morning: "Good morning!, 5am to 12pm"
//afternoon: "Good afternoon!", 12pm to 5pm
// evening: "Good evening!", after 5pm
//};

const d = new Date().getHours();
console.log({ d });
