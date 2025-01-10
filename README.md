# ChatGPT Style Changer

A simple Chrome extension to dynamically change the style of elements with the class `min-h-4` on `chatgpt.com`. The extension modifies the font size and text color of these elements for a customized appearance.

## Features

- Updates the font size of elements with the class `min-h-4` to `48px`.
- Changes the text color of these elements to `red`.
- Dynamically observes and applies changes to new elements added to the DOM.

## Files Overview

- **manifest.json**: Contains the metadata and configuration for the Chrome extension.
- **content.js**: Implements the logic for styling elements and observing DOM changes.
- **icon.png**: The icon for the extension, displayed in the Chrome toolbar.

## Installation

1. Clone or download this repository.
2. Open Chrome and navigate to `chrome://extensions/`.
3. Enable **Developer Mode** (top-right corner).
4. Click on **Load unpacked** and select the project folder.
5. The extension will now be added to Chrome.

## Usage

1. Navigate to [chatgpt.com](https://chatgpt.com/).
2. The extension automatically updates the styles of elements with the class `min-h-4`.
3. Any new elements matching the criteria will also be updated dynamically.
   
![image](https://github.com/user-attachments/assets/3763e040-90af-49f6-99ae-a6978a31d1bc)

## Permissions

This extension requires the following permissions:
- **Scripting**: To inject JavaScript into the webpage.
- **Active Tab**: To modify content in the currently active tab.
- **Host Permissions**: To allow modifications on `https://chatgpt.com/*`.

## Notes

- This extension is configured to work only on `https://chatgpt.com/*`.
- A message will appear in the console if no elements with the class `min-h-4` are found (`No elements found with the class 'min-h-4'`).

## Development

### Updating the Extension
To make changes:
1. Edit the files in the project directory.
2. Reload the extension in `chrome://extensions/` by clicking the **Reload** button.

### Debugging
- Use the browser’s developer tools (`F12`) to view the console logs from `content.js`.

## Contribution

Feel free to submit issues or pull requests to improve the extension. Contributions are always welcome!

---

### License

This project is licensed under the MIT License.
