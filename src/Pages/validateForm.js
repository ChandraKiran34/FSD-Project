// validations.js
const isValidEmail = (email) => {
    // Regular expression for basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  
  const isValidPhoneNumber = (phoneNumber) => {
    // Regular expression for basic phone number validation (10 digits)
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phoneNumber);
  };
  
  const isValidPassword = (password) => {
    // Password must be at least 6 characters long and contain one special character, one digit, and one alphabet
    const passwordRegex = /^(?=.*[!@#$%^&*(),.?":{}|<>])(?=.*\d)(?=.*[a-zA-Z]).{6,}$/;
    return passwordRegex.test(password);
  };
  
  const isValidName = (name) => {
    // Name must start with an alphabet and not contain special characters
    const nameRegex = /^[A-Za-z][A-Za-z\s]*$/;
    return nameRegex.test(name);
  };
  
  const isValidsport = (favoriteSport) => {
    // Name must start with an alphabet and not contain special characters
    const nameRegex = /^[A-Za-z][A-Za-z\s]*$/;
    return nameRegex.test(favoriteSport);
  };
  
  const isValidAddress = (address) => {
    // Address must be at least 12 characters long
    return address.length >= 12;
  };
  
  const validateForm = (name, email, phoneNumber, password, address, favoriteSport) => {
    if (!name || !email || !phoneNumber || !password || !address || !favoriteSport) {
      return "All fields are required.";
    }
  
    if (!isValidName(name)) {
      return "Name must start with an alphabet and not contain special characters.";
    }
  
    if (!isValidEmail(email)) {
      return "Invalid email address.";
    }
  
    if (!isValidPhoneNumber(phoneNumber)) {
      return "Invalid phone number.";
    }
  
    if (!isValidPassword(password)) {
      return "Password must be at least 6 characters long and contain one special character, one digit, and one alphabet.";
    }
  
    if (!isValidAddress(address)) {
      return "Address must be at least 12 characters long.";
    }
    if (!isValidsport(favoriteSport)) {
        return "Provide exact sport name";
      }
  
    return null; // No validation error
  };
  
  export default validateForm;