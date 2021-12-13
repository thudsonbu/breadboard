# Integrations
Integration between [Habitica](https://habitica.com/) and [Todoist](todoist.com).
Currently, working on receiving item completed events from the [Todoist Sync
API](https://developer.todoist.com/sync/v8/#overview) and creating a completed
task in Habitica in order to keep experience and coins up to date.

# Todo (bottom to top)
- [ ] Refactor Todoist and Habitica resources to classes
- [ ] Add deployed URL to
- [ ] Decide on cloud provider
- [ ] Add unpacking of request to `habitica/relay` route
- [x] Add Habitica relay resource methods and tests
- [x] Init Hapi app with resource
- [x] Add Habitica create todo methods
- [x] Add Habitica and Todoist clients and tests
- [x] Test api keys
