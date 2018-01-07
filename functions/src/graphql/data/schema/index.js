import { makeExecutableSchema } from "graphql-tools"

import resolvers from "../resolvers"

const schema = `
# --------------- Query | Root Level ---------------
type Query {
  list(
    entity: String!,
    branch: [String],
    boundaries: ReadBoundaries, 
    order: ReadOrder
  ): List
  item
  (
    entity: String!,
    branch: [String],
    boundaries: ReadBoundaries,
    order: ReadOrder
  ): Item
}

# --------------- List | Query.List ---------------
# @type List
# @requirements $entity:String
# @description Lists return items of top-level entities
# @parent Query
# @children User,Task,Project,Order

type List {
  id: String
  users: [User]
  organizations: [Organization]
  tasks: [Task]
  projects: [Project]
  orders: [Order]
  items: [Item]
}

# --------------- Item | Query.Item ---------------

# Item is a generic wrapper for general query requests.

# Components on the Frontend can easily create simple query structures via the predictable
# structure and naming conventions shared across the database branch
type Item {
  authentication: UserAuthentication
  metadata: ItemMetadata
  identity: ItemIdentity
  pointer: String
  time: ItemTime
  roles: [Role]
}

# Query.User.UserName
type ItemIdentity {
  address: ItemAddress
  contact: ItemContact
  name: ItemName
}

# Query.User.UserName
type ItemName {
  nameDisplay: String
  nameFirst: String
  nameLast: String
  nameOrganization: String
  nameOrganizationLegal: String
}

type ItemAddress {
  addressStreet: String
  addressCity: String
  addressState: String
  addressZip: String
  addressCountry: String
}

type ItemContact {
  biography: String
  contactEmail: String
  contactPhone: String
  contactURL: String
}

type ItemTime {
  dateStart: String
  dateEnd: String
  hourStart: String
  hourEnd: String
  minuteStart: String
  minuteEnd: String
}

type ItemMetadata {
  metaCreated: String
  metaEdited: String
}

# --------------- Authentication | Query.Authentication - Query.List.Authentication ---------------
type Authentication {
  emailVerified: Boolean
  source: String
  status: String
}

type Parent {
  uid: String
  type: String
}

type Permission {
  link: String
  levels: String
}

type PermissionLevel {
  name: String
  active: Boolean
}

type Role {
  name: String
  active: Boolean
}

# --------------- List | Query.List - Query.List.User ---------------
# Query.User 
type User {
  uid: String
  pointer: String
  dateCreated: String
  dateModified: String
  authentication: UserAuthentication
  identity: UserIdentity
  tasks: [TaskSlice]
  permissions: [Permission]
  projects: [ProjectSlice]
  roles: [Role]
}
type UserRole {
  role: Boolean
}

# Query.User.UserAuthentication
type UserAuthentication {
  email: String
  emailVerified: Boolean
  authentications: [Authentication]
}

# Query.User.UserIdentity
type UserIdentity {
  address: UserAddress
  biography: UserBiography
  contact: UserContact
  name: UserName
  images: UserImages
}
# Query.User.UserAddress
type UserAddress {
  addressStreet: String
  addressCity: String
  addressState: String
  addressZip: String
  addressCountry: String
}

# Query.User.UserBiography
type UserBiography {
  biographyMission: String
  biographyOccupation: String
  biographySkills: String
  biographyOverview: String
}

# Query.User.UserContact
type UserContact {
  biography: String
  contactEmail: String
  contactPhone: String
  contactURL: String
}

# Query.User.UserImages
type UserImages {
  imageBackground: String
  imageProfile: String
}

# Query.User.UserName
type UserName {
  nameDisplay: String
  nameFirst: String
  nameLast: String
}

# Query.User.UserStatus
type UserStatus {
  active: Boolean
}

# --------------- List | Query.List - Query.List.Organization ---------------
# Query.Organization 
type Organization {
  uid: String
  pointer: String
  dateCreated: String
  dateModified: String
  authentication: OrganizationAuthentication
  identity: OrganizationIdentity
  tasks: [TaskSlice]
  permissions: [Permission]
  projects: [ProjectSlice]
  roles: [Role]
}
type OrganizationRole {
  role: Boolean
}

# Query.Organization.OrganizationAuthentication
type OrganizationAuthentication {
  email: String
  emailVerified: Boolean
  authentications: [Authentication]
}

# Query.Organization.OrganizationIdentity
type OrganizationIdentity {
  address: OrganizationAddress
  biography: OrganizationBiography
  contact: OrganizationContact
  name: OrganizationName
  images: OrganizationImages
}
# Query.Organization.OrganizationAddress
type OrganizationAddress {
  addressStreet: String
  addressCity: String
  addressState: String
  addressZip: String
  addressCountry: String
}

# Query.Organization.OrganizationBiography
type OrganizationBiography {
  biographyMission: String
  biographyOccupation: String
  biographySkills: String
  biographyOverview: String
}

# Query.Organization.OrganizationContact
type OrganizationContact {
  biography: String
  contactEmail: String
  contactPhone: String
  contactURL: String
}

# Query.Organization.OrganizationImages
type OrganizationImages {
  imageBackground: String
  imageProfile: String
}

# Query.Organization.OrganizationName
type OrganizationName {
  nameDisplay: String
  nameFirst: String
  nameLast: String
}

# Query.Organization.OrganizationStatus
type OrganizationStatus {
  active: Boolean
}

# --------------- Product | Query.Order - Query.List.Order ---------------
type Order {
  id: String!
  uid: String!
  pid: String!
  products: [ProductFragment]
}

type OrderFragment {
  id: String!
  uid: String!
  pid: String!
  products: [ProductFragment]
}

# --------------- Product | Query.Product - Query.List.Product ---------------
type PaymentMethodFragment {
  id: String!
}

# --------------- Product | Query.Product - Query.List.Product ---------------
type ProductFragment {
  id: String!
  name: String
  priceDisplay: String
  priceRaw: Int 
}

type Product {
  id: String!
  name: String
  description: String
  parent: String
  priceDisplay: String
  priceRaw: Int
  tags: [Tag]
}

# --------------- Project | Query.Project - Query.List.Project ---------------
type Project {
  uid: String!
  type: String
  name: String
  users: [User]
  tasks: [Task]
  timelines: [Timeline]
  resources: [Resource]
  permissions: ProjectPermissions
}

type ProjectPermissions {
  access: String # Authentication and sharability
  published: Boolean # Database boundary and filtering 
  owners: [ParticipantPermissions]
  contributors: [ParticipantPermissions]
}

type ParticipantPermissions {
  uid: String
  active: Boolean
}

type ProjectSlice {
  uid: String!
  name: String
  notifications: [ProjectNotifications]
}

type ProjectNotifications {
  id: String!
}

# --------------- Tag | Query.Tag - Query.List.Tag ---------------
type Tag {
  id: String!
  name: String
}

# --------------- Task | Query.Task - Query.List.Tasks ---------------
type Task {
  uid: String
  name: String
  description: String
  parent: [Parent]
}

type TaskSlice {
  uid: String!
  name: String
  description: String
}

# --------------- Resource | Query.Resource - Query.List.Resources ---------------
type Resource {
  uid: String!
  name: String
  description: String
}

# --------------- Timeline | Query.Timeline - Query.List.Timeline ---------------
type Timeline {
  tid: String!
  name: String
  dateStart: String
  dateEnd: String
  status: TimelineStatus
  events: [TimelineEvent]
  predictions: [TimelinePrediction]
}

type TimelineStatus {
  momentum: String
  health: String
}

type TimelineEvent {
  eid: String!
  name: String!
  date: String!
  time: String!
  significance: String!
}

type TimelinePrediction {
  eid: String!
  name: String!
  date: String!
  time: String!
  significance: String!
}

type DatabaseRead {
  startAt: String
  endAt: String
  equalTo: String
  limitToFirst: Int
  limitToLast: Int
  orderByChild: String
  orderByKey: String
  orderByPriority: String
  orderByValue: String
  startAt: String
  toJSON: String
  toString: String
}

type DatabaseFilter {
  filter: String!
  value: String
}

type Filter {
  id: String
}

type Mutation {
  taskAdd (
    title: String!
    description: String
  ): Task
}
#--- Input | Query.List ---#
# @input ReadBoundaries
# @parent Query.List
input ReadBoundaries {
  limitToFirst: Int
  limitToLast: Int
  startAt: Int
  endAt: Int
  equalTo: String
}

# @input ReadOrder
# @parent Query.List
input ReadOrder {
  orderByKey: Boolean # Key ==== Timestamp
  orderByChild: String
  orderByValue: String
  reverse: Boolean
}

`

export default makeExecutableSchema({
  typeDefs: schema,
  resolvers
})
