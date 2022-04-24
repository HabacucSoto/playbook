const issue = {
    title: '09 Live 3 Semana 3 [Jueves 21 de Abril 8 PM]',
    repositoryNameAssociated: 'MissionNodeJS',
    status: 'Open',
    numberOfComments: '48',
    labels: ['FINALIZADO', 'LIVE 3', 'Semana-3'],
    author: '@carlogilmar',
    dateCreated: 'April 17',
    lastUpdated: '2 days ago',
    getTitleAndAuthor: () => `Title: ${ issue.title }  |  Author: ${ issue.author }`,
    getGeneralInfo: () => `This issue '${ issue.title }' was created by ${ issue.author } in ${ issue.dateCreated }`
}

console.log( issue )
console.log( issue.getTitleAndAuthor() )
console.log( issue.getGeneralInfo() )