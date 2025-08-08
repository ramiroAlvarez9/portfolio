import { User, SquareTerminal, Briefcase, Mail } from 'lucide-react';
import { useState } from 'preact/hooks';
import './Dash.css';

function Dash() {
  const [activeItem, setActiveItem] = useState('about');

  return (
    <nav className="dash">
      {menuItems.map((item) => {
        const IconComponent = item.icon;
        return (
          <button
            key={item.id}
            className={`dash-item ${activeItem === item.id ? 'active' : ''}`}
            onClick={() => {
              setActiveItem(item.id);
              console.log(`Clicked: ${item.id}`);
            }}
            title={item.label}
          >
            <IconComponent size={'100%'} />
            <div className="dash-indicator"></div>
          </button>
        );
      })}
    </nav>
  );
}

export default Dash;

const menuItems = [
  { id: 'about', label: 'About', icon: User },
  { id: 'projects', label: 'Projects', icon: SquareTerminal },
  { id: 'experience', label: 'Experience', icon: Briefcase },
  { id: 'contact', label: 'Contact', icon: Mail }
];
