interface RegistrationData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export const registerUser = (formData: RegistrationData): boolean => {
  console.log(formData);
  // Here, you can implement your logic for registration
  // For now, let's assume the registration is successful if all fields are filled
  const { firstName, lastName, email, password } = formData;
  const isFormValid = firstName !== '' && lastName !== '' && email !== '' && password !== '';
  
  if (isFormValid) {
    // Perform registration logic here (e.g., send data to a server, etc.)
    // If registration is successful, return true
    return true;
  } else {
    // If registration fails, return false
    return false;
  }
};