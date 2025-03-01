# Web Development Project 1 - *Cricket*

Submitted by: **Ravi Teja Gattu**

This web app: **Cricket Teams**

Time spent: **5** hours spent in total

## Required Features

The following **required** functionality is completed:

- [✅] **There is a unique theme for events or resources relevant to a specific community**
- [✅] **At least 10 unique resources or events are displayed in a responsive card format**

The following **optional** features are implemented:

- [✅] Buttons or links to a related resources are on each card component
- [✅] The site is responsive for both desktop and mobile formats

The following **additional** features are implemented:

* [✅] List anything else that you added to improve the site's functionality!
# Summary of improvements and changes made to enhance the functionality and design of my site:

1. Grid Layout for Team Cards (.teams class):
display: grid: Ensures that the cards are displayed in a grid format.
grid-template-columns: repeat(3, 1fr): Divides the grid into 3 equal columns for card placement in each row.
gap: 20px: Adds space between each card, ensuring they don't stick together.
justify-content: center: Centers the grid horizontally.
padding: 20px: Adds padding around the grid, creating space around the cards.
2. Card Layout (.team-card class):
width: 200px & height: 250px: Ensures each card has a fixed size, making the layout uniform and preventing cards from collapsing.
display: flex: Used to ensure that the contents of each card (image, text, and button) are properly laid out.
flex-direction: column: Organizes the card's contents vertically (image, team name, and button).
justify-content: space-between: Makes sure the button is pushed to the bottom while keeping space between other elements.
align-items: center: Centers the contents (e.g., text and images) horizontally inside the card.
background-color: black & color: white: Ensures the card's background is black with white text for high contrast and readability.
3. Image Styling:
object-fit: contain: Ensures the team logo images are displayed properly within their allotted space without distorting.
4. Button Styling:
Button placement and styling: The button is styled with a blue background and white text. It’s placed at the bottom of each card by using margin-top: auto inside the card.
Button hover effect: Added a hover effect on the button, making it change color when hovered over to give users feedback on interactivity.
5. Responsive Design:
max-width: 1200px on .teams: Prevents the grid from becoming too wide on large screens by limiting the grid’s width to 1200px. This ensures that the cards don’t stretch too far apart, maintaining a clean layout.
margin: auto: Centers the grid horizontally within its container, which also adapts to different screen sizes.
6. App Container Styling (App.css):
max-width: 1280px: Ensures the entire app container doesn’t stretch beyond a certain width, providing a more focused and controlled layout.
margin: 0 auto: Centers the entire app on the screen.
7. Button Functionality in Team Component:
onClick={() => window.open(props.url, "_blank")}: When a user clicks the button, the URL for the team’s player list is opened in a new tab.
8. Accessibility Enhancements:
alt={props.name} for images: Ensures that images have alt text for accessibility, making the site more inclusive for screen readers.
9. Font Styling:
Consistent use of fonts: Ensures a consistent and pleasant font-family (Inter, Avenir, Helvetica, Arial, sans-serif) across the app for a clean and modern design.

## Video Walkthrough

Here's a walkthrough of implemented required features:
https://drive.google.com/file/d/17EHgI_BcqC43xsdrHDTt4XlP2O6MFpKf/view?usp=sharing
https://github.com/user-attachments/assets/f6d6fb21-afd2-4a8b-8f5a-58fd7674261b
[Video](https://github.com/user-attachments/assets/bff7e2c1-9606-48ad-b0a7-59b7483d905f)

<img src='https://drive.google.com/file/d/17EHgI_BcqC43xsdrHDTt4XlP2O6MFpKf/view?usp=sharing' title='Video Walkthrough1' width='' alt='Video Walkthrough' />
[Watch the video](https://github.com/user-attachments/assets/f6d6fb21-afd2-4a8b-8f5a-58fd7674261b)
https://github.com/RaviTejaGattu1/CricketTeams-ReactJS/issues/1#issue-2888726308

<img src='' title='Video Walkthrough2' width='' alt='Video Walkthrough' />

<!-- Replace this with whatever GIF tool you used! -->
GIF created with ...  https://cloudconvert.com/webm-to-gif
<!-- Recommended tools:
[Kap](https://getkap.co/) for macOS
[ScreenToGif](https://www.screentogif.com/) for Windows
[peek](https://github.com/phw/peek) for Linux. -->

## Notes

Describe any challenges encountered while building the app.
Understanding structure & organization of components, props took some time.
Styling was pain.

## License

    Copyright [2025] [Ravi Teja Gattu]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
    
    
# End Notes

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
