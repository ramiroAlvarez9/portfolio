# React Coding Rules for Claude Code

## Function Structure
- **Don't create auxiliary functions** - use inline functions directly in onClick events
- **Use classic function syntax** for components (not arrow functions)
- **Static data below component** - place outside and after the component function

## Types and Pure Functions
- **Use "type" instead of interface** for defining types
- **Pure functions outside component** - if auxiliary functions are needed, create them as pure functions (all data from params) outside the component

## Code Style
- **Don't add comments** in the code

## Git Rules
- **Use conventional commits** for commit messages
- **Git commands shortcuts:**
  - `gst` for git status
  - `gp` for git push
  - `gc` for git commit

## CSS Rules
- **Mobile first approach** - no max-width media queries
- **Only use min-width >= 768px** for desktop screens
- Default styles target mobile, then scale up for larger screens

## React WinBox Library Rules

**Install**
```
npm install --save react-winbox
# OR
yarn add react-winbox
```

**Usage**
Ensure document body has initial non-zero height (e.g. `100vh`).

```jsx
import 'winbox/dist/css/winbox.min.css'; // required
import 'winbox/dist/css/themes/modern.min.css'; // optional
import WinBox from 'react-winbox';

<WinBox
  width={this.state.boxWidth ?? 500}
  height={300}
  x="center"
  y={30}
  noClose={this.state.inEditing}
>
  <div>
    <h1>Hello, WinBox!</h1>
    <MyComponent myProps={1} onChange={this.handleChange}/>
  </div>
</WinBox>
```

**Windows Manager Pattern**
```jsx
const [windows, setWindows] = useState([]);

const handleClose = (id) => {
  let state = [...windows];
  const index = state.findIndex(info => info.id === id);
  if (index !== -1) {
    state.splice(index, 1);
    setTimeout(() => setWindows(state));
  }
};

return (
  <>
    {windows.map(info => (
      <WinBox 
        key={info.id} 
        id={info.id} 
        onclose={() => handleClose(info.id)}
        {...info.neededProps}
      >
        <div>Some children</div>
      </WinBox>
    ))}
  </>
);
```

**Key Points**
- To open: create in virtual DOM
- To close: don't render it
- Use `setTimeout` for destroy actions in `onclose`
- Control properties through component props
- Access pure WinBox.js object via `winBoxObj` in component ref

## Example Structure
```jsx
function MyComponent() {
  return (
    <button onClick={() => {
      console.log('Button clicked');
      // Handle click logic inline
    }}>
      Click me
    </button>
  );
}

export default MyComponent;

// Static data below the component
const menuItems = [
  { id: 1, label: 'Home' },
  { id: 2, label: 'About' },
  { id: 3, label: 'Contact' }
];
```