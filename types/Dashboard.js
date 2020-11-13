const Dashboard = `
  type Dashboard {
    activeUsers: [User!]!
    offers: [Offer!]!
    services: [Service!]!
    lastDayServiceCount: Int
    lastDayOfferCount: Int
    todayServiceCount: Int
    todayOfferCount:Int
  }
  
  extend type Query {
    getDashboard: Dashboard!
  }
`

module.exports = Dashboard;
