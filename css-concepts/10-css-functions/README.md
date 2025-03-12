1. Using calc() for Layout and Spacing

Exercise 1: Create a two-column layout with a sidebar and main content area. Set the sidebar width to 200px and the main content width using calc(100% - 200px). Adjust the layout by changing the sidebar width and using calc() to maintain balance.

Exercise 2: Design a responsive card component where the padding is calculated as calc(1rem + 1vw). Observe how the padding scales with the viewport width.

Exercise 3: Create a sticky header that occupies 10% of the viewport height and set the main content’s top margin using calc(100vh - 10vh). Adjust the header height to see how calc() helps maintain proper layout.

2. Color Manipulation with rgba() and hsl()

Exercise 4: Design a button with a background color using rgba(). Make it semi-transparent with rgba(0, 123, 255, 0.5). Change the alpha (opacity) value on hover to make it fully opaque.

Exercise 5: Use hsl() to set the background color of multiple elements (like boxes or cards) with the same hue but varying saturation and lightness. Create a gradient-like effect by adjusting the saturation and lightness values for each element.

Exercise 6: Design a tooltip with a background color using hsl() that appears in a soft color. Adjust the tooltip’s lightness and saturation to experiment with different shades without changing the base hue.

3. Working with var() and CSS Variables

Exercise 7: Define CSS variables for primary and secondary colors using --primary-color and --secondary-color. Apply them with var() on different elements, and change their values to instantly change the color scheme of the entire page.

Exercise 8: Use CSS variables with var() to create a theme toggle. For example, set --bg-color and --text-color in a light theme, and switch their values for a dark theme using a toggle button.

Exercise 9: Combine calc() and var() to create a layout where the spacing between items is set to a CSS variable (e.g., --spacing: 20px). Adjust the --spacing variable to update all gaps consistently.

4. Using url() for Backgrounds and Icons

Exercise 10: Use url() to set a background image on a full-screen hero section. Adjust the background properties to achieve a visually appealing layout.

Exercise 11: Create a series of cards with url()-based icons as backgrounds in each card header. Use different URLs to load various icons for each card header background.

Exercise 12: Design a custom button with an icon as its background using url(). Position the icon to appear before the button text. Experiment with positioning to align the icon correctly.

5. Combining min(), max(), and clamp() for Responsive Sizing

Exercise 13: Create a heading element that changes size responsively using clamp(), e.g., clamp(1.5rem, 2vw + 1rem, 3rem). Observe how the heading resizes between the minimum and maximum values based on the viewport width.

Exercise 14: Set the width of a container using min(90%, 500px). The container should occupy 90% of the viewport width but max out at 500px. Test the responsiveness by resizing the viewport.

Exercise 15: Use max() to set a minimum padding for a container, e.g., max(10px, 2vw), to ensure consistent spacing on both mobile and desktop views.

6. Using Transform Functions for Animation and Effects

Exercise 16: Create a rotating effect on an image or icon using transform: rotate(45deg);. Use hover to trigger the rotation to see how the element changes when interacted with.

Exercise 17: Design a button that scales up slightly on hover using transform: scale(1.1);. Experiment with different scale values to see how they impact the hover effect.

Exercise 18: Make a 3D flip card using transform: rotateY(180deg); on the card’s back face. Use the perspective() function on the card container to achieve a 3D effect.

7. Gradients with linear-gradient() and radial-gradient()

Exercise 19: Create a gradient background using linear-gradient() for a hero section. Experiment with different angles and color stops to achieve a smooth transition effect.

Exercise 20: Design a button with a gradient background using linear-gradient(), and change the gradient direction on hover. Try using multiple color stops for a more complex gradient effect.

Exercise 21: Use radial-gradient() to create a circular gradient background for a div. Experiment with the gradient’s shape and size to achieve a spotlight effect.

8. Shadows with drop-shadow() and box-shadow()

Exercise 22: Apply box-shadow() to a card component to create a soft shadow effect. Adjust the offset, blur, and spread values to achieve a realistic shadow.

Exercise 23: Create a button with a box-shadow that changes on hover to give it a lifted look. Increase the shadow spread and blur for the hover state.

Exercise 24: Use drop-shadow() on an image to create a colored shadow effect. Change the shadow color and offset to match the overall color scheme of your page.

9. Advanced Color Functions: mix() and contrast()
   (Note: These color functions are available in some newer versions of CSS and may require support.)

Exercise 25: Use mix() to blend two colors (e.g., primary and secondary) for a new button background color. Adjust the blend ratio to explore different color mixing results.

Exercise 26: Apply contrast() on text elements to automatically adjust the text color against various background colors, ensuring readable contrast levels.

Exercise 27: Use color-contrast() to create a text color that adjusts based on the background color. Experiment with different background colors to see how the text color changes for better visibility.

10. Combining Functions for Dynamic Effects

Exercise 28: Create a responsive text element where the font size is calculated with clamp() and the color is set using hsl() with variables for hue, saturation, and lightness. Adjust these variables to dynamically style the text.

Exercise 29: Build a card layout where each card background uses a linear-gradient() mixed with a semi-transparent color using rgba(). Apply a box-shadow() with a color calculated from the card’s gradient.

Exercise 30: Make an animated loader where each dot uses transform: scale() with calc() for its size and changes color with hsl() to create a pulsing effect.

These exercises will help you become comfortable with CSS functions and teach you how to use them to enhance layouts, color schemes, responsiveness, and animations. Let me know if you’d like further guidance or additional exercises!
