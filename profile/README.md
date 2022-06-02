**GhostNetwork is an education project (social network) that provides training ground for testing high level concepts and different technologies before applying them into production ready code**


### Achitecture diagram 
![GhostNetwork achitecture overview](https://user-images.githubusercontent.com/9577482/171648656-6d89016a-8358-460e-a9d1-8ccb41e22b4a.svg)


- Account - portal for registration and authentication. Provides oauth2 support
- Gateway - entrypoint for different kinds of application (web spa, mobile app etc). In charge of authorization and data aggregation from other services
- Profiles - user personal information, relations (friends, followers etc) and user settings (not related to auth) management
- Content - publications, comments and reactions management
- NewsFeed - personalized news feed for user building
- Web - web client written with angular

Future plans:
- Messages - chats and messages management
- Notification - web, email and phone notifications hub
