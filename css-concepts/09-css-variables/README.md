Here are some exercises to help you practice CSS variables (custom properties). These exercises cover basic usage, responsive adjustments, theming, and more advanced applications of CSS variables.

### Basic CSS Variables

- [Exercise 1](../../src/exercises/css-variables/exercise1/): Create a variable for primary colors and apply it to headings, paragraphs, and links. Define variables like `--primary-color`, `--secondary-color`, and `--text-color` and use them across the page.
- [Exercise 2](../../src/exercises/css-variables/exercise2/): Set up variables for font sizes (e.g., `--font-small`, `--font-medium`, `--font-large`) and apply them to different text elements. Adjust the variables in a single place to change the font sizes globally.
- [Exercise 3](../../src/exercises/css-variables/exercise3/): Create a card component with CSS variables for padding and margin (e.g., `--card-padding`, `--card-margin`). Use the variables to control spacing around and inside the card.

### Color Themes with CSS Variables

- [Exercise 4](../../src/exercises/css-variables/exercise4/): Create a light and dark theme using CSS variables for background and text colors. Set variables like `--background-color` and `--text-color`, and switch their values when applying a `dark-theme` class to the body.
- [Exercise 5](../../src/exercises/css-variables/exercise5/): Implement a color scheme for a website header, navigation, and footer using CSS variables. Use variables for `--header-background`, `--nav-color`, and `--footer-background` and apply them consistently across those elements.
- [Exercise 6](../../src/exercises/css-variables/exercise6/): Make a theme toggle button that switches between two themes (e.g., light and dark) by toggling CSS variables. Create variables for both themes and use JavaScript to toggle classes that change the variable values.

### Responsive Design with CSS Variables

- [Exercise 7](../../src/exercises/css-variables/exercise7/): Define variables for breakpoints (e.g., `--small-screen`, `--medium-screen`, `--large-screen`) and use them in media queries to change layout and styles based on screen size.
- [Exercise 8](../../src/exercises/css-variables/exercise8/): Set up responsive typography using CSS variables. Define variables like `--font-size-small`, `--font-size-medium`, and `--font-size-large` and apply them based on screen size.
- [Exercise 9](../../src/exercises/css-variables/exercise9/): Create a responsive grid layout where the number of columns is controlled by a variable (`--num-columns`). Change the value of `--num-columns` in media queries to adjust the grid for different screen sizes.

### Using Variables in Animations and Transitions

- [Exercise 10](../../src/exercises/css-variables/exercise10/): Set up CSS variables for animation duration and timing function (e.g., `--animation-duration`, `--timing-function`). Apply them to a button hover effect and change the values to see different animation styles.
- [Exercise 11](../../src/exercises/css-variables/exercise11/): Create a loading spinner using CSS variables to control the animation speed (e.g., `--spinner-speed`). Adjust the speed dynamically by changing the variable’s value.
- [Exercise 12](../../src/exercises/css-variables/exercise12/): Define variables for different transform values (e.g., `--scale-factor`, `--rotate-angle`) and apply them in an animation. Change the variable values to see the transform effect adjust smoothly.

### Applying Variables for Spacing and Layout Control

- [Exercise 13](../../src/exercises/css-variables/exercise13/): Set up a CSS variable for spacing (e.g., `--spacing-unit`) and use it for padding and margin on various elements like headers, buttons, and cards. Adjust the spacing unit in one place to see changes across all elements.
- [Exercise 14](../../src/exercises/css-variables/exercise14/): Define CSS variables for common layout measurements like `--max-width` and `--container-padding` and apply them to control the layout of a page. Change the variables to see how they affect the layout.

### Dynamic Color Adjustments Using HSL

- [Exercise 15](../../src/exercises/css-variables/exercise15/): Use HSL values in CSS variables to define primary colors (e.g., `--primary-hue`, `--primary-saturation`, `--primary-lightness`). Adjust just the hue value to create color variations across the page.
- [Exercise 16](../../src/exercises/css-variables/exercise16/): Make a hover effect on a button that lightens the background color. Use CSS variables for HSL lightness values (e.g., `--button-lightness`) and adjust it on hover.

### Variables in Nested Components

- [Exercise 17](../../src/exercises/css-variables/exercise17/): Create a card component with a title, description, and button, using separate variables for each part (e.g., `--card-title-color`, `--card-bg-color`, `--card-button-color`). Customize each card component by changing the variable values for specific cards.
- [Exercise 18](../../src/exercises/css-variables/exercise18/): Define variables for a navbar (e.g., `--nav-background`, `--nav-link-color`). Override these variables locally in specific sections of the page to customize the navbar appearance based on the section.

### Advanced Themable Components

- [Exercise 19](../../src/exercises/css-variables/exercise19/): Design a form with CSS variables for border, focus, and hover states for inputs and buttons (e.g., `--input-border-color`, `--input-focus-color`). Change the values to create light and dark themed versions of the form.
- [Exercise 20](../../src/exercises/css-variables/exercise20/): Create a card component that uses CSS variables for border-radius, shadow, and spacing. Adjust these variables to create a “compact” and “spacious” version of the card.
