# social-media-analytics-microservices
An application to track your social media users and their interactions.

## Installation
First [clone]() this repository.
Do an npm install in the repository.
Enter command
 ```bash
npm install
```

The microservice will start listening on port 8000 by default.



## Usage

```node

# returns 'users'
http://localhost:8000/users


# returns 'comments authored by other users on a post on the social media platform'
foobar.pluralize('goose')
http://localhost:8000/posts/:postid/comments

# returns 'posts authored by particular user'
http://localhost:8000/users/:userid/posts

```

