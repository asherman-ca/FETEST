const arraySum = (arr) => {
	return arr.reduce((acc, curr) => acc + curr, 0)
}

console.log(arraySum([1, 2, 3, 4, 5]))
