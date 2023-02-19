import { FC, useContext } from 'react';
import { Theme, ThemeContext } from '../../core/ThemeContext';
import { Color } from '../../palette';

interface LogoProps {
  height?: number;
  theme?: Theme;
}

export const BrjLogo: FC<LogoProps> = ({ height, theme }) => {
  const { theme: contextTheme } = useContext(ThemeContext);
  const primaryColor = (theme ?? contextTheme) === Theme.Light ? '#000' : '#fff';

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 255.85 77.92" style={{ height: `${height ?? 32}px` }}>
      <path
        d="M92.2 62.36L91.99.1h7.5q0 8.37 0 16.74a27.92 27.92 0 0 1 12.53-2.57 15.8 15.8 0 0 1 8 2 13.64 13.64 0 0 1 3.1 2.55q4.15 4.59 4.16 12.51v13.5q0 7.83-4.16 12.42a15.44 15.44 0 0 1-3.09 2.55c-4 2.51-7.79 2.42-16.16 2.47-2.42-.03-6.46 0-11.67.09zm17.3-7.07a10 10 0 0 0 7.5-2.83c1.83-1.89 2.75-4.62 2.75-8.17V31.83q0-5.34-2.75-8.17a10 10 0 0 0-7.5-2.83 9.5 9.5 0 0 0-7.3 2.91c-1.8 1.95-2.71 4.65-2.71 8.09v12.51c0 3.44.91 6.14 2.71 8.08a9.47 9.47 0 0 0 7.3 2.87zm27.02 7.07V16.51h7.34a45 45 0 0 1 12.08-.83c5.16.34 7.48 1.41 9 2.41a15 15 0 0 1 2.54 2.13q4.29 4.55 4.29 12.3v2.75h-7.44v-2.09q0-5.41-2.63-8.29c-1.75-1.92-4.23-2.88-7.46-2.88a9.67 9.67 0 0 0-7.46 2.92c-1.81 1.94-2.71 4.7-2.71 8.25v29.18zm39.65 15.57v-6.92h10.76q5.16 0 8-2.8c1.92-1.86 2.88-4.49 2.88-7.87V23.9h-19.14v-6.83h26.66v43.27q0 8.09-5 12.83-5 4.74-13.4 4.76zm24.41-67.25a5.31 5.31 0 0 1-3.9-1.42 5.19 5.19 0 0 1-1.42-3.84 5.49 5.49 0 0 1 1.42-4 5.93 5.93 0 0 1 7.79 0 5.44 5.44 0 0 1 1.42 4 5.16 5.16 0 0 1-1.42 3.84 5.28 5.28 0 0 1-3.89 1.42zM34.45 62.1L0 43.83V39.1l34.45-18.27v4.89L10.33 38.25l-3.5 1.72-2.78 1.39 2.86 1.34 3.42 1.76 24.09 12.65z"
        fill={primaryColor}
      />
      <path d="M49.95 62.27L72.44.2h4L53.95 62.27z" fill={Color.orange} />
      <path
        d="M221.39 57.11l24.09-12.65 3.43-1.76 2.86-1.34-2.78-1.39-3.51-1.72-24.09-12.58v-4.84l34.46 18.29v4.71l-34.46 18.3z"
        fill={primaryColor}
      />
    </svg>
  );
};
