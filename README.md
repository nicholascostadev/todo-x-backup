# Docs 

Docs are still being written, don't expect to have everything documented yet, if you want to help with anything, even the docs, feel free to do so by following the [How to contribute](#how-to-contribute) guide.

## How to contribute

For contributing, you'll first need to follow the [How to run it locally](#how-to-run-it-locally) tutorial if you don't know how to, and then create a branch like: "feat/new-feature", by "new-feature" meaning simple keywords to the new feature.

After making all your changes on the new branch, create a PR and explain your changes briefly, no need right now for any PR template.

_**PS**: Make sure to lint everything before you create the PR, PRs with linting issues will not be accepted_.


## How to run it locally

```bash
# Clone the repo
git clone https://github.com/nicholascostadev/todo-x.git

# cd to folder
cd todo-x

# install dependencies
npm install

# run the development server
npm run dev
```

##  Ideas

Initial ideas for features to the project

- Should be able to have basic management of todos(creating, editing, marking as done, delete).
- Should be able to signup, login, recover password.
- Each person will have its own profile that can have public information as:
  - X total tasks done today.
  - Y total tasks done.
  - Z followers.
- Should be able to follow a user.

### Todo

- [x] Todos page
- [x] Add Todo
- [x] Mark Todo as done
- [x] Delete Todo
- [x] Login page(still with no server)
- [x] Signup page(still with no server)
- [ ] Register(fake register to begin with)
- [x] Login(fake login to begin with)
- [ ] Profile page(fake auth with localstorage)
- [ ] When server is ready: Transfer everything from local to server
