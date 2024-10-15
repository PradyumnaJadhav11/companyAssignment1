function normalizeString(input) {
    // Step 1: Remove extra spaces from the beginning and end of the string
    let trimmedString = input.trim();
  
    // Step 2: Remove special characters and punctuation, leaving only alphanumeric characters and spaces
    let alphanumericString = trimmedString.replace(/[^a-zA-Z0-9\s]/g, '');
  
    // Step 3: Replace multiple spaces between words with a single space
    let singleSpaceString = alphanumericString.replace(/\s+/g, ' ');
  
    // Step 4: Convert the cleaned string to camel case
    let words = singleSpaceString.split(' ');
    let camelCaseString = words
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(' ');
  
    return camelCaseString;
  }
  
  // Example usage
  let input = " Hello! World@ This is a Test!. ";
  let normalizedString = normalizeString(input);
  console.log(normalizedString); // Output: "Hello World This Is A Test"
  