const pr = {
    title: 'problem solving',
    author: '@HabacucSoto',
    branchName: 'syntax error',
    dateCreated: 'January 15',
    status: 'Open',
    repositoryNameAssociated: 'MissionNodeJS',
    getStatus: () => `Status: ${ pr.status }`,
    getTitleAndAuthor: () => `Title: ${ pr.title }  |  Author: ${ pr.author }`
}

console.log( pr )
console.log( pr.getStatus() )
console.log( pr.getTitleAndAuthor() )