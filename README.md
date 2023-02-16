# What is this?

This project is focused on providing React based Envision components. Envision is a CSS library for the Sitevision CMS.
The React components here simplify Sitevision Webapp-developent by providing the necessary markup and classes for Envision.

In order to visualise the components we use Storybook in this project. Please note that the components do _not_ contain any CSS, but rather rely on having a local Envision environment with compiled CSS.

## Requirements

Storybook currently fetch it's CSS from a hardcoded path in preview.js. This makes it necessary to place Envision on the same level as this project in your folders like this:

Parent folder

-envision folder

-react-envision folder

## Available Scripts

#### `yarn storybook`

Runs storybook
