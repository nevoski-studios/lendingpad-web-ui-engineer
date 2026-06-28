# LendingPad Web UI Engineer Assessment
## Instructions
- Download and extract the code `.zip` file, and open the `table.html` and `edit_records.html` files to view each part of the assessment.
- I included the **Figma** file containing my design proposals too: open the `table_and_records_design.fig` file in **Figma** to view.
## Notes for reviewer
**TL:DR:** I didn't use AI, there's two options for the edit records page, I created a custom SVG font, used BEM, the table and side panel are interactive, table data is dynamically added, and the table, side panel, and edit records page are all responsive.

[Example table .gifs below &#128899;](#examples)

### 1) No AI tools used
I intended this to be reflective of my foundational skill level, and while I'm not opposed to them when they're helpful, I didn't use Claude etc. for any part of this assessment.
### 2) Edit record page (and panel)
I included two design proposals for editing records:
- A dynamic side panel that opens when you click the "edit" button in table rows
- A standalone page: `edit_records.html`
### 3) Custom LendingPad SVG font
- The table, edit records panel, and edit records page all use a custom SVG font library
- See the "icons" folder for source SVG icon files
### 4) Block, Element, Modifier (BEM)
- BEM notation is used wherever appropriate
### 5) Interactive table elements
- All "edit" buttons open the edit records panel
- Edit record panel "exit", "cancel", and "save" buttons will close the panel
- The button for selecting the number of visible rows is clickable
- The "more" / "actions" menu button in each row is clickable
- All checkboxes are custom CSS with SVG animation, and clickable
### 6) Dynamic table data
- Table rows are created dynamically via JavaScript in the `script.js` file
- Customer balance amounts are dynamically set to red/green color style based on integer value
- Status badges are set dynamically based on the "status" value in the customer data object
### 7) Responsive design
- Table header buttons reposition dynamically at speficied breakpoints
- Table content scrolls along x/y axis as needed
- The edit records side panel scrolls along y axis

<a name="examples"></a>





