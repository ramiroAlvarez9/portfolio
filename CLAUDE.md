# React Coding Rules for Claude Code

## Function Structure
- **Don't create auxiliary functions** - use inline functions directly in onClick events
- **Use classic function syntax** for components (not arrow functions)
- **Static data below component** - place outside and after the component function

## Types and Pure Functions
- **Use "type" instead of interface** for defining types
- **Pure functions outside component** - if auxiliary functions are needed, create them as pure functions (all data from params) outside the component

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