import { ReactNode } from "react"

interface IconProps extends React.SVGProps<SVGSVGElement> {
  fill?: string
}
function FileIcon(props: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      {...props}
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="h-4 w-4"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
      />
    </svg>
  )
}

function FolderIcon(props: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      {...props}
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="h-4 w-4"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"
      />
    </svg>
  )
}

export function TreeFolder(props: { children: ReactNode; selected?: boolean; onClick?: () => void }) {
  return (
    <summary
      style={{
        opacity: props?.selected ? 1 : 0.55,
      }}
      onCut={props?.onClick}
      className="w-full h-6 pr-0"
    >
      <FolderIcon fill={props?.selected ? "#f93" : "none"} />
      <div style={{}} className="flex w-full items-center m-0 p-0">
        {props?.children}
      </div>
    </summary>
  )
}

export function TreeFile(props: {
  children: ReactNode
  selected?: boolean
  onClick?: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void
}) {
  return (
    <li
      className="flex h-6"
      style={{
        opacity: props?.selected ? 1 : 0.55,
      }}
    >
      <a onClick={props?.onClick} className="flex w-full">
        <FileIcon fill={props?.selected ? "#f93" : "none"} />
        <div style={{}} className="flex w-full items-center  m-0 p-0">
          {props?.children}
        </div>
      </a>
    </li>
  )
}
