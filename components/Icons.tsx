import React from 'react';

interface IconProps {
  className?: string;
}

export const LogoIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C8.43 2 5.23 4.43 4.29 7.82L12 22l7.71-14.18C18.77 4.43 15.57 2 12 2zM12 6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2z"/>
  </svg>
);

export const SearchIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
);

export const MapPinIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
    </svg>
);

export const PriceTagIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 20 20" fill="currentColor">
        <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
        <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
    </svg>
);

export const ClockIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.414-1.415L11 9.586V6z" clipRule="evenodd" />
    </svg>
);

export const SparklesIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.934L13.033 17.256A1 1 0 0112 18V2z" clipRule="evenodd" />
    </svg>
);

export const LocationIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

export const ErrorIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

export const GrabFoodIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={className} viewBox="0 0 256 256" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M189.92 148.17a12.8 12.8 0 0 1-9.05 3.75h-24.22a4 4 0 0 0-3.1 1.55l-8.67 11.41a4 4 0 0 0 3.1 6.45h32.89a4 4 0 0 0 3.1-6.45l-8.67-11.41a4 4 0 0 0-.48-5.3zm-104.4-23.89a4 4 0 0 0-3.1 1.55l-8.67 11.41a4 4 0 0 0 3.1 6.45h32.89a4 4 0 0 0 3.1-6.45l-8.67-11.41a4 4 0 0 0-3.58-1.55zm121-14.78a83.65 83.65 0 0 0-76.45-50.73 83.65 83.65 0 0 0-76.45 50.73 4 4 0 0 0 1.13 4.14L94.52 156a4 4 0 0 0 6.2 0l43.27-42.23a4 4 0 0 0 1.13-4.14z"/>
    </svg>
);

export const FoodPandaIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={className} viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M10.15 2.65a4.13 4.13 0 0 0-1.28.23 3.6 3.6 0 0 0-2.3 2.14 4.3 4.3 0 0 0 .15 3.25A3.49 3.49 0 0 0 8.4 10.4a3.8 3.8 0 0 0 3.38-1.2 4.2 4.2 0 0 0 .91-2.45 4.3 4.3 0 0 0-2.54-4.1zM5.38 5.51A3.4 3.4 0 0 0 3.2 4.19a3.82 3.82 0 0 0-2.56 1.12A4.2 4.2 0 0 0 0 7.77a4.32 4.32 0 0 0 2.22 3.65 3.8 3.8 0 0 0 3.45.09 4.3 4.3 0 0 0 2.22-2.3A3.5 3.5 0 0 0 5.38 5.52zm-.53 6.36a2.6 2.6 0 0 0-1.12-.22 2.76 2.76 0 0 0-2.22.92A2.94 2.94 0 0 0 .7 15.3a3 3 0 0 0 1.8 1.57 2.74 2.74 0 0 0 2.8 0 3 3 0 0 0 1.6-1.89 2.75 2.75 0 0 0-.6-2.7z"/>
    </svg>
);