

import React from 'react'

interface ErrorProps {
  error: string
}

const ErrorComponent: React.FC<ErrorProps> = ({ error }) => (
  <div className="text-red-500">
    <p>{error}</p>
  </div>
)

export default ErrorComponent
