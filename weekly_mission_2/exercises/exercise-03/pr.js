class PullRequest {

    constructor(title, author, branchName, dateCreated, status, repositoryNameAssociated){
        this.title = title
        this.author = author
        this.branchName = branchName
        this.dateCreated = dateCreated
        this.status = status
        this.repositoryNameAssociated = repositoryNameAssociated
    }

    getStatus(){
        return `Status: ${ this.status }`
    }

    getTitleAndAuthor(){
        return `Title: ${ this.title }  |  Author: ${ this.author }`
    }

}

const myPR = new PullRequest('problem solving', '@HabacucSoto', 'syntax error', 'January 15', 'Open', 'MissionNodeJS')

console.log( myPR )
console.log( myPR.getStatus() )
console.log( myPR.getTitleAndAuthor() )