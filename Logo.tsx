import React from 'react'

const Logo: React.FC<{ className?: string; theme?: 'light' | 'dark' }> = ({ className = '', theme = 'light' }) => {
  const mainColor = theme === 'light' ? '#6366F1' : '#818CF8'
  const accentColor1 = theme === 'light' ? '#10B981' : '#34D399'
  const accentColor2 = theme === 'light' ? '#F59E0B' : '#FBBF24'
  const textColor = theme === 'light' ? '#1F2937' : '#F3F4F6'

  return (
    <svg className={className} width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="logoTitle logoDesc">
      <title id="logoTitle">WealthWise Academy Logo</title>
      <desc id="logoDesc">A stylized piggy bank with a graduation cap, representing financial wisdom</desc>
      
      {/* Piggy bank body */}
      <ellipse cx="100" cy="110" rx="80" ry="70" fill={mainColor} />
      
      {/* Piggy bank ears */}
      <circle cx="40" cy="80" r="20" fill={mainColor} />
      <circle cx="160" cy="80" r="20" fill={mainColor} />
      
      {/* Piggy bank snout */}
      <ellipse cx="100" cy="130" rx="30" ry="20" fill={accentColor1} />
      
      {/* Coin slot */}
      <rect x="80" y="60" width="40" height="10" rx="5" fill={accentColor2} />
      
      {/* Eyes */}
      <circle cx="70" cy="90" r="10" fill={textColor} />
      <circle cx="130" cy="90" r="10" fill={textColor} />
      
      {/* Graduation cap */}
      <rect x="60" y="20" width="80" height="15" rx="7.5" fill={accentColor2} />
      <path d="M70 35 L100 20 L130 35 L100 50 Z" fill={accentColor2} />
      <rect x="95" y="50" width="10" height="20" fill={accentColor2} />
      
      {/* WW text */}
      <path d="M40 170 L60 170 L70 150 L80 170 L100 170 L110 150 L120 170 L140 170" stroke={textColor} strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default Logo

