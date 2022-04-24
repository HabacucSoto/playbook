const obj = {
    name: 'playbook',
    author: 'Habacuc Soto',
    language: 'JavaScript',
    numberOfCommits: 95,
    stars: 87,
    forks: 65,
    issuesOpen: 14,
    issuesClose: 10,
    getTotalIssues: () => `Total Issues: ${ obj.issuesOpen + obj.issuesClose }`,
    getGeneralInfo: () => `This repository (${ obj.name }) was created by ${ obj.author }`
}

console.log( obj )
console.log( obj.getTotalIssues() )
console.log( obj.getGeneralInfo() )