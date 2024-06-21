// Define the student object
let student = {
    name: "Jayant Baghel"
};

// Add getKeys method to Object prototype
Object.prototype.getKeys = function() {
    return Object.keys(this);
};

// Function to show keys of the student object
function showKeys() {
    console.log(student.getKeys());
}
