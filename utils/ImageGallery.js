// Import required modules
const fs = require('fs');
const path = require('path');

// Define the directory path
const directoryPath = path.join(process.cwd(), 'public', 'techIcons');

// Function to read file names from the directory
const getFileNames = (dirPath) => {
  // Read files in the directory
  return fs.readdirSync(dirPath).map(fileName => {
    // Format the file name as required
    return `techIcons/${fileName}`;
  });
};

// Get the array of file names
const fileNamesArray = getFileNames(directoryPath);

// Log the array of file names
// console.log(fileNamesArray);


export default fileNamesArray;
