# Crud App

This application is built using the simple and effective [tutorial from Tania Rascia.](https://www.taniarascia.com/crud-app-in-react-with-hooks/)

TODO:
- [ ] remove the controlled component warning [react docs to reference](https://reactjs.org/docs/forms.html#controlled-components)
- [ ] add tests jest
- [ ] update readme so it's thorough and concise
- [ ] add styles
- [ ] consider animation transitions

## Dependencies
Reach Router to control routing and love that it manages focus automatically. Great for accessibility!

## Handling Styles
It's my personal preference to manage CSS in files separate from the JS. However, I can easily adjust to any method of managing CSS that the team finds most effective.

I lean on SMACSS and BEM methodologies for styling and you will see that echoed through the code challenge.

## Assets
Please note that the profile icon is different than the design. This is because I used a Material UI icon as a placeholder. In a real project, I would either grab the icon from the designs file or some central repo of icons for the project. If I could not locate it or grab it from the designs, I would chat with design to get the SVG.

## Accessibility
With the data table, I am using generic `div` and `span` elements in order to achieve design specifications, then adding aria roles to reintroduce native table accessbility. This will look like a data table to assitive technology while achieving the desired design visuals.

