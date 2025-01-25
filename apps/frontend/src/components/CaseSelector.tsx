import React from 'react'
import CaseButton from './CaseButton'

interface CaseSelectorProps {
  currentCase: string
  onSelect: (caseType: string) => void
}

export default function CaseSelector({
  currentCase,
  onSelect,
}: CaseSelectorProps) {
  return (
    <div className="mt-8 flex justify-center gap-4">
      <CaseButton
        caseType="1"
        isActive={currentCase === '1'}
        onClick={onSelect}
      >
        Case 1: Success
      </CaseButton>
      <CaseButton
        caseType="2"
        isActive={currentCase === '2'}
        onClick={onSelect}
      >
        Case 2: Ongoing
      </CaseButton>
      <CaseButton
        caseType="3"
        isActive={currentCase === '3'}
        onClick={onSelect}
      >
        Case 3: Fail
      </CaseButton>
    </div>
  )
}
