import { Sun, Moon } from 'lucide-react';
import { useState, useEffect } from 'preact/hooks';
import './TopBar.css';

function TopBar() {
  const [time, setTime] = useState(new Date());
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDark(savedTheme === 'dark');
    }

    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <header className="top-bar">
      <div className="top-bar-left">
        <span className="date-time">
          {time.toLocaleDateString('en-US', { 
            weekday: 'short', 
            month: 'short', 
            day: 'numeric' 
          })}
        </span>
      </div>
      
      <div className="top-bar-center">
        <span className="time">
          {time.toLocaleTimeString('en-US', { 
            hour12: false,
            hour: '2-digit',
            minute: '2-digit'
          })}
        </span>
      </div>
      
      <div className="top-bar-right">
        <button 
          className="theme-toggle"
          onClick={() => {
            const newTheme = isDark ? 'light' : 'dark';
            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            setIsDark(!isDark);
          }}
          title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          {isDark ? <Sun size={16} /> : <Moon size={16} />}
        </button>
      </div>
    </header>
  );
}

export default TopBar;