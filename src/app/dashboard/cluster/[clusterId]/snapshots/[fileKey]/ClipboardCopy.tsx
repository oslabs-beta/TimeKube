"use client";
import { CopyToClipboard } from "react-copy-to-clipboard";
export default function ClipboardCopy(props) {
  const stringToCopy = props.string;

  return (
        <CopyToClipboard text={stringToCopy}>
          <button className={"btn btn-accent"}>
            Copy to Clipboard
          </button>
        </CopyToClipboard>
  )
}
