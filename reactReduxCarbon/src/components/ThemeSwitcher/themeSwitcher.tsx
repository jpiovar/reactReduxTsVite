// ThemeSwitcher.tsx
import React from 'react';
import { Select, SelectItem } from '@carbon/react';

type Props = {
  theme: 'white' | 'g10' | 'g90' | 'g100';
  onChange: (newTheme: 'white' | 'g10' | 'g90' | 'g100') => void;
};

const ThemeSwitcher: React.FC<Props> = ({ theme, onChange }) => {
  const themes: Array<'white' | 'g10' | 'g90' | 'g100'> = ['white', 'g10', 'g90', 'g100'];

  return (
    <Select
      id="theme-select"
      labelText="Select Theme"
      value={theme}
      onChange={(e) => onChange(e.target.value as any)}
    >
      {themes.map((t) => (
        <SelectItem key={t} value={t} text={t.toUpperCase()} />
      ))}
    </Select>
  );
};

export default ThemeSwitcher;
