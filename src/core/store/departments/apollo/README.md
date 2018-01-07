# Apollo Department

The Apollo Redux Department moves GraphQL implmentation functionality away from components into into Redux Apollo Actions, Reducers and Sagas.

Components can still use the "higher order components" to fetch data, but lose the ability for more controlled, easier to reason about, complex state changes when thinking about integrations with persistent local data storage, WebRTC for peer-to-peer data transfer, and other (future) dynamic data sources. In the future, apollo-redux-saga might provide a swappabable HOC for "graphql from 'apollo-client'", to interact with the Department Sagas, instead of the default apollo client methods.

Saga's provide more nuanced control over "side-effects" i.e. queries, mutations, caching and most important service worker integration for larger, persistent data-storage in a progressive web application environment.