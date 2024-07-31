# Tech-Blog-MVC

## Description

This is a CMS style blog site where developers can publish their blog posts and comment on each others posts as well. It was built completely from scratch. It follows the MVC paradigm in it's architectural structure, uses Handlebars.js as the templating language, Sequelize as the ORM and the express-session npm package for auth.

When you visit the site for the first time you are presented with the homepage which once blog posts are made, will be populated with them. Nav links on the header take you to log in or sign up.

When you click "homepage" you are taken to the homepage. When you click log in or sign up, the appropriate page comes up to prompt you to log in or enter credentials to sign up.

When you come back to the site at a later date you can sign in and view/delete your old posts plus comments that have been made on them.

Blog posts include creator's name and date they were created.

When you add a new blog post you are prompted for a title and content section. When you click save, your post is displayed.

When a user leaves a comment, it is visible to all. 

When you click the log out option, you are logged out of the site.

When you are idle on the site for too long, you can still view posts and comments but will be prompted to log in again before you can add, update or delete posts.


## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Visuals](#visuals)
- [Roadmap](#roadmap)
- [Tests](#tests)
- [Questions](#questions)

## Installation

N/A

## Usage

On first visit, select the sign up option from the nav bar. Enter your information to create an account and click "sign up" button.

You will then be taken to your dashboard where you can create a blog post. The dashboard also displays your username and email to show you are logged in.

Fill out the post title and content fields and then click "add post" to make a blog post. Your post will be displayed below the post form with a delete button option. This delete button will delete that blog post and all associated comments.

Click "Home" on the nav bar to go to the Homepage where you will see all previously made blog posts. Click read more on a given blog post to leave a comment.

On this page you have the post itself and a field to fill out a comment. Once the field is filled out, click "add comment" to add your comment to the post.

Your comment will appear under the fields for all to see.

Click "Logout" on the nav bar to log out and end your session.

Come back any time and log in to add more blog posts and comments!

Refer to [Visuals](#visuals) for link to the deployed application.

## Visuals

Here is a link to the deployed application:

https://tech-blog-mvc-3-204s.onrender.com/

This screenshot demonstrates the homepage with a blog post on it:

![Homepage with a blog post on it](https://github.com/user-attachments/assets/279bf85e-893f-45f8-9b00-80189e6b3740)

This screenshot demonstrates a comment example:

![comment example](https://github.com/user-attachments/assets/41f2dfe0-199d-4710-9a43-a4303db92fdf)

This is the javascript logic for logging in:

![js logic for logging in](https://github.com/user-attachments/assets/001816f6-1c7d-46bb-965e-64cab596dd74)

This is the main.handlebars file for the site:

![main handlebars for the site](https://github.com/user-attachments/assets/4423ad05-b44b-400a-be3e-9d0a451fcfbf)


## License

This project is licensed under the MIT license. For more information, please visit [this link](https://opensource.org/licenses/MIT).


## Contributing
N/A

Code of conduct || How to report bugs || How to submit changes || Coding standards || Tests

## Roadmap

This application is finished.

## Tests

Insomnia was used for testing the API routes.

## Questions

If you have any questions about the repo, open an issue or contact me directly at b2rn3r@yahoo.com. You can find more of my work at [ColinBurner](https://github.com/ColinBurner/).