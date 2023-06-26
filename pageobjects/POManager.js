const {HomePage} = require('./HomePage');
const {Dashboard} = require('./Dashboard');

class POManager{
    constructor(page)
    {
        this.page=page;
        this.homePage=new HomePage(this.page);
//        this.dashboard=new Dashboard(this.page);
    }

    getHomePage()
    {
        return this.homePage;
    }

    getDashboard()
    {
        return this.dashboard;
    }
}
module.exports={POManager};