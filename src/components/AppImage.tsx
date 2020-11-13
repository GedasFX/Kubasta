import React from 'react';

export const fromUrl = (src: string) => {
  return AppImage({ src });
};

export default function AppImage(props: { src: string }) {
  return <img src={props.src} alt="Desktop" />;
}
