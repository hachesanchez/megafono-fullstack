# El-Megafono-server

## Auth Routes
Base URL `/api/auth`

| HTTP Method   | URI Path       | Description             |
| ------------- | -------------- | ----------------------- |
| POST          | `/signup`      | Signup user             |
| POST          | `/login`       | Login user              |
| GET           | `/verify`      | Verify Auth Token       |

## Experience Routes
Base URL `/api/experience`

| HTTP Method   | URI Path                        | Description             | Middleware            |
| ------------- | ------------------------------- | ----------------------- | ---------------------- |
| GET           | `/getAllExperiences`            | Get all experiences     | None                   |
| GET           | `/getOneExperience/:id`         | Get one experience by ID| None                   |
| POST          | `/saveExperience`               | Save new experience     | isAuthenticated       |
| PUT           | `/edit/:id`                     | Edit experience by ID   | isAuthenticated       |
| DELETE        | `/delete/:id`                   | Delete experience by ID | isAuthenticated       |

## Jobs Routes
Base URL `/api/jobs`

| HTTP Method   | URI Path                   | Description             | Middleware            |
| ------------- | -------------------------- | ----------------------- | ---------------------- |
| GET           | `/getAllJobs`              | Get all jobs            | None                   |
| GET           | `/getOneJob/:id`           | Get one job by ID       | None                   |
| POST          | `/saveJob`                 | Save new job            | isAuthenticated       |
| PUT           | `/edit/:id`                | Edit job by ID          | isAuthenticated       |
| DELETE        | `/delete/:id`              | Delete job by ID        | isAuthenticated       |

## Upload Routes
Base URL `/api/upload`

| HTTP Method   | URI Path       | Description             | Middleware            |
| ------------- | -------------- | ----------------------- | ---------------------- |
| POST          | `/image`       | Upload image to Cloudinary| None                 |

## Users Routes
Base URL `/api/users`

| HTTP Method   | URI Path                        | Description             | Middleware            |
| ------------- | ------------------------------- | ----------------------- | ---------------------- |
| GET           | `/getAllUsers`                  | Get all users           | None                   |
| GET           | `/getOneUser/:id`               | Get one user by ID      | None                   |
| GET           | `/getCandidateUsers`            | Get candidate users     | None                   |
| PUT           | `/addSavedJob/:jobId`           | Add a saved job to user's profile | None             |
| PUT           | `/deleteSavedJob/:jobId`        | Delete a saved job from user's profile | None          |
| PUT           | `/edit/:id`                     | Edit user profile       | None                   |
| DELETE        | `/delete/:id`                   | Delete user profile     | None                   |

## Test Routes
Base URL `/api/test`

| HTTP Method   | URI Path       | Description             | Middleware            |
| ------------- | -------------- | ----------------------- | ---------------------- |
| GET           | `/`            | Test endpoint           | None                   |
