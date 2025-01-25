interface CaseButtonProps {
  caseType: string
  isActive: boolean
  onClick: (caseType: string) => void
  children: React.ReactNode
}

export default function CaseButton({
  caseType,
  isActive,
  onClick,
  children,
}: CaseButtonProps) {
  return (
    <button
      onClick={() => onClick(caseType)}
      className={`px-4 py-2 rounded-lg ${
        isActive ? 'bg-indigo-600 text-white' : 'bg-gray-300 text-black'
      }`}
    >
      {children}
    </button>
  )
}
