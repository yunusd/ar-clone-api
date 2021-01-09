const UserInfo = `
  type UserInfo {
    id: Int
    name: String
    address: Address
    status: String
    user_roles: [User_Role]
    serviceCount : Int
    offerCount: Int
    user_categories: [User_Category]
   }
  
  extend type Query {
    getUserInfo: UserInfo!
  }
`

module.exports = UserInfo;
