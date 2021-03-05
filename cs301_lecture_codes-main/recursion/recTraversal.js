let company = { // the same object, compressed for brevity
    sales: [{ name: 'John', salary: 1000 }, { name: 'Alice', salary: 1600 }],
    development: {
        sites: [{ name: 'Peter', salary: 2000 }, { name: 'Alex', salary: 1800 }],
        internals:{
            permanent: [{ name: 'Jack', salary: 1300 }],
            contract: [{name:'Jill', salary: 1500}]
        }
    }
};

// The function to do the job
function sumSalaries(department) {
    if (Array.isArray(department)) { // Base case
        return department.reduce((prev, current) => prev + current.salary, 0); // sum the array
    } else { // case (2)
        let sum = 0;
        for (let subDept of Object.values(department)) {
            sum += sumSalaries(subDept); // recursively call for subdepartments, sum the results
        }
        return sum;
    }
}

console.log(sumSalaries(company)); // 7700