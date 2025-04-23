import React from 'react';
import './Avatar.scss';

type AvatarProps = {
  name: string;
  imageUrl?: string;
  size?: number;
};

const Avatar: React.FC<AvatarProps> = ({ name, imageUrl, size = 40 }) => {
  const initials = name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase();

  return imageUrl ? (
    <img
      src={imageUrl}
      alt={name}
      className="custom-avatar"
      style={{ width: size, height: size, borderRadius: '50%' }}
    />
  ) : (
    <div
      className="custom-avatar"
      style={{ width: size, height: size, fontSize: size * 0.4 }}
    >
      <span>
      {initials}
      </span>
    </div>
  );
};
export default Avatar;