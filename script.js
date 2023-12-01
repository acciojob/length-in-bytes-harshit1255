const byteSize = (str) => {
  // write your code here
	let b =new Blob([str]);
	retrun b.size;
};

// Do not change the code below 
const str = prompt("Enter some string.");
alert(byteSize(str));
