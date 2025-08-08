import { User, Code, Briefcase, Mail, Sun, Moon } from 'lucide-react';
import './Dash.css';

function Dash() {
  return (
    <nav className="dash">
      {menuItems.map((item) => {
        const IconComponent = item.icon;
        return (
          <button
            key={item.id}
            className="dash-item"
            onClick={() => {
              console.log(`Clicked: ${item.id}`);
            }}
            title={item.label}
          >
            <IconComponent size={24} />
            <span className="dash-label">{item.label}</span>
          </button>
        );
      })}
    </nav>
  );
}

export default Dash;

const menuItems = [
  { id: 'about', label: 'About', icon: User },
  { id: 'projects', label: 'Projects', icon: Code },
  { id: 'experience', label: 'Experience', icon: Briefcase },
  { id: 'contact', label: 'Contact', icon: Mail }
];