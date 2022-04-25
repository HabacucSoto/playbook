class Repository {

    constructor(name, author, language, numberOfCommits, stars, forks, issuesOpen, issuesClose){
        this.name = name
        this.author = author
        this.language = language
        this.numberOfCommits = numberOfCommits
        this.stars = stars
        this.forks = forks
        this.issuesOpen = issuesOpen
        this.issuesClose = issuesClose
    }

    getTotalIssues(){
        return `Total Issues: ${ this.issuesOpen + this.issuesClose }`
    }

    getGeneralInfo(){
        return `This repository (${ this.name }) was created by ${ this.author }`
    }

}

const myRepo = new Repository('playbook', '@HabacucSoto', 'JavaScript', 95, 87, 65, 14, 10)

console.log( myRepo )
console.log( myRepo.getTotalIssues() )
console.log( myRepo.getGeneralInfo() )