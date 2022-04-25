class Issue {

    constructor(title, repositoryNameAssociated, status, numberOfComments, labels, author, dateCreated, lastUpdated){
        this.title = title
        this.repositoryNameAssociated = repositoryNameAssociated
        this.status = status
        this.numberOfComments = numberOfComments
        this.labels = labels
        this.author = author
        this.dateCreated = dateCreated
        this.lastUpdated = lastUpdated
    }

    getTitleAndAuthor(){
        return `Title: ${ this.title }  |  Author: ${ this.author }`
    }

    getGeneralInfo(){
        return `This issue '${ this.title }' was created by ${ this.author } in ${ this.dateCreated }`
    }

}

const myIssue = new Issue('09 Live 3 Semana 3 [Jueves 21 de Abril 8 PM]', 'MissionNodeJS', 'Open', 48, ['FINALIZADO', 'LIVE 3', 'Semana-3'], '@carlogilmar', 'April 17', '2 days ago')

console.log( myIssue )
console.log( myIssue.getGeneralInfo() )
console.log( myIssue.getTitleAndAuthor() )
